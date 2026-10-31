(() => {
  const dialog = document.getElementById('author-support');
  const code = document.getElementById('author-support-code');
  const paymentButtons = dialog.querySelectorAll('[data-support-payment]');
  const payments = {
    alipay: { src: 'images/author-support-alipay.jpg', alt: '支付宝收款二维码', width: 1080, height: 1620 },
    wechat: { src: 'images/author-support-wechat.png', alt: '微信收款二维码', width: 1242, height: 1692 }
  };
  function selectPayment(name) {
    const payment = payments[name];
    if (!payment) return;
    code.src = payment.src;
    code.alt = payment.alt;
    code.width = payment.width;
    code.height = payment.height;
    paymentButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.supportPayment === name)));
  }
  paymentButtons.forEach(button => button.addEventListener('click', () => selectPayment(button.dataset.supportPayment)));
  let opener;
  let previousOverflow;
  document.querySelectorAll('[data-author-support]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      previousOverflow = document.body.style.overflow;
      selectPayment('alipay');
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
