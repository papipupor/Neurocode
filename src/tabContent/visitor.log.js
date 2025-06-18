export default async function(container) {
  container.innerHTML = `<pre id="log" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></pre>`;
  const logEl = container.querySelector('#log');

  let lines;
  try {
    const res = await fetch('../data/log.json');
    lines = await res.json();
  } catch (e) {
    lines = [
      'IP 192.168.1.24 accessing /projects.vue',
      'Opened /config.sys',
      'User tried to export UI config'
    ];
  }

  for (const entry of lines) {
    await typeLine(`[${new Date().toLocaleTimeString()}] - ${entry}`);
  }

  function typeLine(text) {
    return new Promise(resolve => {
      let i = 0;
      const id = setInterval(() => {
        logEl.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(id);
          logEl.textContent += '\n';
          logEl.scrollTop = logEl.scrollHeight;
          resolve();
        }
      }, 30);
    });
  }
}
