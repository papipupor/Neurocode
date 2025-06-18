export function search(list, term) {
  term = term.toLowerCase();
  return list.filter(item => item.toLowerCase().includes(term));
}
