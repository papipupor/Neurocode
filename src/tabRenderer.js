import {loadTab} from './TabLoader.js';

let container;
const cache = new Map();

export function initTabRenderer() {
  container = document.getElementById('app');
}

export async function renderTab(id) {
  if (!container) return;
  container.innerHTML = '';
  let mod = cache.get(id);
  if (!mod) {
    mod = await loadTab(id);
    if (mod) cache.set(id, mod);
  }
  if (mod && typeof mod.default === 'function') {
    mod.default(container);
    container.classList.add('fade-in');
    setTimeout(() => container.classList.remove('fade-in'), 500);
  } else {
    container.textContent = `Tab ${id} not found.`;
  }
}
