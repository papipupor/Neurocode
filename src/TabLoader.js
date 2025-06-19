export async function loadTab(tab) {
  try {
    return await import(`./tabContent/${tab}.js`);
  } catch (e) {
    const el = document.getElementById('app');
    if (el) el.innerHTML = `Tab ${tab} not found.`;
    return null;
  }
}
