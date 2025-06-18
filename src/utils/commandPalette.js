let commands = [];
export function registerCommand(name, action) {
  commands.push({name, action});
}
export function openPalette() {
  const query = prompt('Command');
  const cmd = commands.find(c => c.name.includes(query));
  if (cmd) cmd.action();
}
