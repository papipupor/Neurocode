const routes = {
  'home.boot': './home.boot.js',
  'about': './about.js',
  'skills': './skills.js',
  'projects.vue': './projects.vue.js',
  'certs': './certs.js',
  'resume': './resume.js',
  'system.ai': './system.ai.js',
  'chat.terminal': './chat.terminal.js',
  'visitor.log': './visitor.log.js',
  'config.sys': './config.sys.js',
  'sandbox.dev': './sandbox.dev.js',
  'vault.ads': './vault.ads.js',
  'env.sys': './env.sys.js'
};

export async function loadTab(id) {
  const path = routes[id];
  if (!path) return null;
  return import(path);
}
