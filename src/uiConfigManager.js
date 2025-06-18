const CONFIG_KEY = 'neuro_ui_config';

const defaults = {
  fontSize: 'base',
  radius: 'md',
  animation: true,
  accentColor: '#7aa2f7'
};

export function loadConfig() {
  const raw = localStorage.getItem(CONFIG_KEY);
  return raw ? { ...defaults, ...JSON.parse(raw) } : { ...defaults };
}

export function saveConfig(cfg) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
  applyConfig(cfg);
}

export function applyConfig(cfg) {
  const root = document.documentElement;
  const sizeMap = { sm: '14px', base: '16px', lg: '18px' };
  root.style.fontSize = sizeMap[cfg.fontSize] || sizeMap.base;
  const rMap = { none: '0', md: '0.375rem', xl: '0.75rem', '2xl': '1rem' };
  root.style.setProperty('--radius', rMap[cfg.radius] || rMap.md);
  root.classList.toggle('no-anim', !cfg.animation);
  root.style.setProperty('--accent-color', cfg.accentColor);
}

export function exportConfig() {
  return JSON.stringify(loadConfig());
}

export function importConfig(json) {
  try {
    const data = JSON.parse(json);
    saveConfig({ ...loadConfig(), ...data });
  } catch (e) {
    console.error('invalid config');
  }
}

applyConfig(loadConfig());
