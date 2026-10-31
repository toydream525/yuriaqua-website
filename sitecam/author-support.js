(() => {
  const dialog = document.getElementById('author-support');
  let opener;
  let previousOverflow;
  document.querySelectorAll('[data-author-support]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    });
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    opener?.focus();
  });
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
