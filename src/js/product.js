(() => {
  const refs = {
    openOverflowBtn: document.querySelector('[data-overflow-open]'),
    closeOverflowBtn: document.querySelector('[data-oveflow-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openOverflowBtn.addEventListener('click', toggleOverflow);
  refs.closeOverflowBtn.addEventListener('click', toggleOverflow);

  function toggleOverflow() {
    document.body.classList.toggle('overflow-open');
    refs.overflow.classList.toggle('is-hidden');
  }
})();