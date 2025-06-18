import {t} from '../i18n.js';

export default function(container) {
  container.innerHTML = `<pre id="boot" class="p-4"></pre>`;
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
  script.onload = () => {
    new Typed('#boot', {
      strings: [
        'booting Neurocode Studio...',
        'loading modules...',
        `ready. ${t('welcome')}`
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: false
    });
  };
  document.body.appendChild(script);
}
