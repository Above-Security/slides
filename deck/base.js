document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  document.querySelectorAll('a[href]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (!href.startsWith('#')) {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = anchor.href;
        }, 300);
      });
    }
  });
});
