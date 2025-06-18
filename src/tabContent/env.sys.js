export default function(container) {
  container.innerHTML = `<pre class='p-4 bg-black text-green-400 border rounded'>
USER=Neuro
SYSTEM=Code Lab V3.5
BOOT_AT=${new Date().toLocaleTimeString()}
PROTOCOL=INTEL-AI
</pre>`;
}
