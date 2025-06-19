export async function loadTab(tab) {
  try {
    return await import(`./${tab}.js`);
  } catch (e) {
    document.getElementById('app').innerHTML = `Tab ${tab} not found.`;
    return null;
  }
}
