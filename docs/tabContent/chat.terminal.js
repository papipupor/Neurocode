export default function(container) {
  container.innerHTML = `<div id="chat" class="p-4 bg-black text-green-400 h-64 overflow-y-auto border border-gray-700 rounded"></div>
  <form id="form" class="flex p-2 items-center space-x-2"><span>&gt;</span><input id="msg" class="flex-1 bg-gray-800 p-2 text-white" autocomplete="off"/><button class="bg-blue-600 px-3 py-1 rounded" type="submit">Send</button></form>`;

  const chat = container.querySelector('#chat');
  const form = container.querySelector('#form');
  const input = container.querySelector('#msg');
  const aiReplies = [
    'Hi there! How can I help you today?',
    "I'm just a simulated AI in this portfolio.",
    'Feel free to explore the other tabs.'
  ];
  let idx = 0;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = input.value.trim();
    if (!msg) return;
    appendLine(`You: ${msg}`);
    input.value = '';
    setTimeout(() => typeLine(`AI: ${aiReplies[idx % aiReplies.length]}`), 500);
    idx++;
  });

  function appendLine(text) {
    chat.textContent += text + '\n';
    chat.scrollTop = chat.scrollHeight;
  }

  function typeLine(text) {
    return new Promise(resolve => {
      let i = 0;
      const id = setInterval(() => {
        chat.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(id);
          chat.textContent += '\n';
          chat.scrollTop = chat.scrollHeight;
          resolve();
        }
      }, 30);
    });
  }
}
