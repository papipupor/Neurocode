export const themes = {
  dark: { label: 'Dark Pro', bg: '#1a1b26', text: '#c0caf5', accent: '#7aa2f7' },
  light: { label: 'Light Dev', bg: '#fdf6e3', text: '#2d3748', accent: '#3182ce' },
  neon: { label: 'Neon Synth', bg: '#1a002b', text: '#e0f7fa', accent: '#ff00ff' }
};

const THEME_KEY = 'neuro_theme';

export function getTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

export function setTheme(name) {
  localStorage.setItem(THEME_KEY, name);
  applyTheme(name);
}

export function initTheme() {
  applyTheme(getTheme());
}

export function applyTheme(name) {
  const t = themes[name] || themes.dark;
  const root = document.documentElement;
  root.style.setProperty('--bg-color', t.bg);
  root.style.setProperty('--text-color', t.text);
  root.style.setProperty('--accent-color', t.accent);
  root.setAttribute('data-theme', name);
}

initTheme();
