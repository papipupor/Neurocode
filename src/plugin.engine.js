export async function loadPlugin(name) {
  try {
    const mod = await import(`./plugins/${name}.js`);
    if (mod && typeof mod.default === 'function') mod.default();
  } catch(e) {
    console.warn('Plugin', name, 'failed to load:', e);
  }
}

export function initPlugins(list) {
  list.forEach(p => loadPlugin(p));
}

document.addEventListener('DOMContentLoaded', () => {
  initPlugins(['ai.mind', 'easter.egg', 'terminal.replay']);
});
