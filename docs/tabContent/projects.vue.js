export default async function(container) {
  container.innerHTML = `<div class='p-4'>
    <div id='filters' class='mb-2 space-x-2'></div>
    <pre id='list' class='bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded p-2'></pre>
  </div>`;

  let projects = [];
  try {
    const res = await fetch('../data/projects.json');
    projects = await res.json();
  } catch (e) {
    projects = [];
  }

  const techs = new Set();
  projects.forEach(p => p.tech.forEach(t => techs.add(t)));

  const filters = container.querySelector('#filters');
  filters.innerHTML = `<button data-tech='all' class='bg-gray-700 px-2 py-1 rounded'>All</button>` +
    Array.from(techs).map(t => `<button data-tech='${t}' class='bg-gray-700 px-2 py-1 rounded'>${t}</button>`).join(' ');

  const list = container.querySelector('#list');
  display(projects);

  filters.addEventListener('click', e => {
    const tech = e.target.dataset.tech;
    if (!tech) return;
    if (tech === 'all') display(projects);
    else display(projects.filter(p => p.tech.includes(tech)));
  });

  function display(items) {
    list.textContent = '';
    items.forEach(p => {
      list.textContent += `${p.name} - ${p.desc} [${p.tech.join(', ')}] (${p.year})\n`;
    });
  }
}
