export default function() {
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'e') {
      alert('Easter egg unlocked!');
    }
  });
}
