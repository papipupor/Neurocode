export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key, fallback) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
}
