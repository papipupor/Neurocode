const tabs = [
  {id: 'home.boot', icon: 'home'},
  {id: 'about', icon: 'user'},
  {id: 'skills', icon: 'code'},
  {id: 'projects.vue', icon: 'folder'},
  {id: 'certs', icon: 'award'},
  {id: 'resume', icon: 'file-text'},
  {id: 'system.ai', icon: 'ai'},
  {id: 'chat.terminal', icon: 'message-square'},
  {id: 'visitor.log', icon: 'book-open'},
  {id: 'config.sys', icon: 'settings'},
  {id: 'sandbox.dev', icon: 'terminal'},
  {id: 'env.sys', icon: 'file-text'},
  {id: 'vault.ads', icon: 'dollar-sign'}
];

let onSelectCb;

export function initSidebar(onSelect) {
  onSelectCb = onSelect;
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  sidebar.innerHTML = '';
  toggle.addEventListener('click', () => sidebar.classList.toggle('hidden'));
  tabs.forEach(t => {
    const btn = document.createElement('button');
    btn.dataset.tabId = t.id;
    btn.className =
      'w-full h-12 flex items-center justify-center border-l-4 border-transparent glow-hover transition ease-in-out duration-300';
    btn.innerHTML = `<img src="./assets/icons/${t.icon}.svg" class="w-5 h-5" alt="${t.id}">`;
    btn.addEventListener('click', () => {
      onSelectCb(t.id);
      if (window.innerWidth < 640) sidebar.classList.add('hidden');
    });
    sidebar.appendChild(btn);
  });
}

export function setActiveTab(id) {
  document.querySelectorAll('#sidebar button').forEach(btn => {
    const active = btn.dataset.tabId === id;
    btn.classList.toggle('border-l-4', active);
    btn.classList.toggle('bg-gray-700', active);
    btn.style.borderColor = active ? 'var(--accent-color)' : 'transparent';
  });
}
