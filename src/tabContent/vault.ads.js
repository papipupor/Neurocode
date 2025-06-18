export default function(container) {
  container.innerHTML = `<div class='p-4 space-y-4'>
    <iframe src='https://example.com/ad' class='w-full h-32 border'></iframe>
    <div class='space-x-2'>
      <a href='https://buymeacoffee.com/yourname' class='underline text-blue-400'>Buy Me A Coffee</a>
      <a href='https://github.com/sponsors/yourname' class='underline text-blue-400'>GitHub Sponsor</a>
    </div>
  </div>`;
}
