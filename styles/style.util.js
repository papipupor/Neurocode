export function toggleClass(element, cls, condition) {
  if (condition) element.classList.add(cls);
  else element.classList.remove(cls);
}
