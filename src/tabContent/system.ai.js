export default function(container) {
  container.innerHTML = `<pre id="out" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></pre>
  <div class='p-2 space-x-2'>
    <button id='diag' class='bg-gray-700 px-2 py-1 rounded'>Run Diagnostic</button>
    <button id='purge' class='bg-gray-700 px-2 py-1 rounded'>Purge Cache</button>
    <button id='inject' class='bg-gray-700 px-2 py-1 rounded'>Inject Prompt</button>
  </div>`;
  const out = container.querySelector('#out');

  const bootLines = [
    '> booting Neurocode Engine...',
    '> loading modules...',
    '> synthesizing neural shell...',
    '> done. system online.'
  ];

  runLines(bootLines);

  document.getElementById('diag').addEventListener('click', () => {
    runLines(['> running diagnostics...', '> all systems nominal']);
  });
  document.getElementById('purge').addEventListener('click', () => {
    runLines(['> purging cache...', '> cache cleared']);
  });
  document.getElementById('inject').addEventListener('click', () => {
    runLines(['> awaiting prompt injection...', '> prompt injected']);
  });

  async function runLines(lines) {
    for (const l of lines) {
      await typeLine(l);
    }
  }

  function typeLine(text) {
    return new Promise(resolve => {
      let i = 0;
      const id = setInterval(() => {
        out.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(id);
          out.textContent += '\n';
          out.scrollTop = out.scrollHeight;
          resolve();
        }
      }, 30);
    });
  }
}
