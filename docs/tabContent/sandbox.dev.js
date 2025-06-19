export default function(container) {
  container.innerHTML = `<div id="sandbox-output" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></div>
  <form id="form" class="flex p-2 items-center space-x-2"><span>&gt;</span><input id="cmd" class="flex-1 bg-gray-800 p-2 text-white" autocomplete="off"/></form>`;

  const sandboxOutput = container.querySelector('#sandbox-output');
  const form = container.querySelector('#form');
  const cmd = container.querySelector('#cmd');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const code = cmd.value.trim();
    if (!code) return;
    append(`> ${code}`);
    cmd.value = '';
    if (/window|document|fetch|import|script/i.test(code)) {
      append('Error: command not allowed');
      return;
    }
    let result;
    try {
      result = Function('"use strict";return (' + code + ')')();
    } catch (err) {
      result = `\u26A0\uFE0F Error: ${err.message}`;
    }
    append(String(result));
  });

  function append(text) {
    sandboxOutput.textContent += text + '\n';
    sandboxOutput.scrollTop = sandboxOutput.scrollHeight;
  }
}
