export async function loadTab(tab) {
  try {
    return await import(`./${tab}.js`);
  } catch (err) {
    const el = document.getElementById('app');
    if (el) {
      el.innerHTML = `<p style='color:white;'>Tab #/${tab} not found.</p>`;
    }
    return null;
  }
}
