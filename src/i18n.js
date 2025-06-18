const LANG_KEY = 'neuro_lang';
let dict = {};

export async function loadLang(lang) {
  try {
    const res = await fetch('../data/lang.json');
    const data = await res.json();
    dict = data[lang] || data['en'];
  } catch (e) {
    dict = { welcome: 'Welcome' };
  }
  localStorage.setItem(LANG_KEY, lang);
}

export function t(key) {
  return dict[key] || key;
}

export function initLang() {
  const lang = localStorage.getItem(LANG_KEY) || 'en';
  loadLang(lang);
}

document.addEventListener('DOMContentLoaded', initLang);
