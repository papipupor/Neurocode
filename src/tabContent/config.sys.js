import {themes, getTheme, setTheme} from '../theme.custom.js';
import {loadConfig, saveConfig} from '../uiConfigManager.js';
import {loadLang} from '../i18n.js';

export default function(container) {
  const cfg = loadConfig();
  const themeOpts = Object.entries(themes)
    .map(([k,v]) => `<option value="${k}">${v.label}</option>`)
    .join('');

  container.innerHTML = `<div class='p-4 space-y-4'>
    <div>
      <label class='block mb-1'>Theme</label>
      <select id='themeSel' class='bg-gray-800 p-2'>${themeOpts}</select>
    </div>
    <div>
      <label class='block mb-1'>Language</label>
      <select id='langSel' class='bg-gray-800 p-2'>
        <option value='en'>English</option>
        <option value='id'>Bahasa</option>
        <option value='jp'>日本語</option>
      </select>
    </div>
    <div>
      <label class='block mb-1'>Font Size</label>
      <select id='fontSel' class='bg-gray-800 p-2'>
        <option value='sm'>Small</option>
        <option value='base'>Base</option>
        <option value='lg'>Large</option>
      </select>
    </div>
    <div>
      <label class='block mb-1'>Border Radius</label>
      <input id='radius' type='range' min='0' max='3' step='1' class='w-full'>
    </div>
    <div class='flex items-center space-x-2'>
      <label>Animations</label>
      <input id='anim' type='checkbox'>
    </div>
    <div>
      <label class='block mb-1'>Accent Color</label>
      <div id='colors' class='flex space-x-2'></div>
    </div>
    <div class='space-x-2'>
      <button id='export' class='bg-gray-700 px-2 py-1 rounded'>Export Config</button>
      <button id='import' class='bg-gray-700 px-2 py-1 rounded'>Import Config</button>
    </div>
    <div class='space-x-2'>
      <button data-vp='100%' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Desktop</button>
      <button data-vp='768px' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Tablet</button>
      <button data-vp='375px' class='vp-btn bg-gray-700 px-2 py-1 rounded'>Mobile</button>
    </div>
  </div>`;

  const themeSel = container.querySelector('#themeSel');
  const langSel = container.querySelector('#langSel');
  const fontSel = container.querySelector('#fontSel');
  const radius = container.querySelector('#radius');
  const anim = container.querySelector('#anim');
  const colors = container.querySelector('#colors');
  const exportBtn = container.querySelector('#export');
  const importBtn = container.querySelector('#import');
  const vpBtns = container.querySelectorAll('.vp-btn');
  themeSel.value = getTheme();
  langSel.value = localStorage.getItem('neuro_lang') || 'en';
  fontSel.value = cfg.fontSize;
  radius.value = ['none','md','xl','2xl'].indexOf(cfg.radius);
  anim.checked = cfg.animation;

  const presets = ['#7aa2f7','#3182ce','#ff00ff','#00e0ff','#ff7e00'];
  colors.innerHTML = presets.map(c => `<button data-color='${c}' class='w-6 h-6 rounded-full' style='background:${c}'></button>`).join('');

  themeSel.addEventListener('change', e => setTheme(e.target.value));
  fontSel.addEventListener('change', e => {
    cfg.fontSize = e.target.value;
    saveConfig(cfg);
  });
  radius.addEventListener('input', e => {
    const map = ['none','md','xl','2xl'];
    cfg.radius = map[e.target.value];
    saveConfig(cfg);
  });
  anim.addEventListener('change', e => {
    cfg.animation = e.target.checked;
    saveConfig(cfg);
  });
  langSel.addEventListener('change', e => {
    loadLang(e.target.value);
  });
  colors.addEventListener('click', e => {
    const col = e.target.dataset.color;
    if (!col) return;
    cfg.accentColor = col;
    saveConfig(cfg);
  });
  exportBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(cfg));
  });
  importBtn.addEventListener('click', () => {
    const json = prompt('Paste config JSON');
    if (json) {
      try { Object.assign(cfg, JSON.parse(json)); saveConfig(cfg); } catch(e){ alert('Invalid JSON'); }
    }
  });
  vpBtns.forEach(b => {
    b.addEventListener('click', () => {
      document.documentElement.style.width = b.dataset.vp;
    });
  });
}
