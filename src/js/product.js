(() => {
  const refs = {
    openOverflowBtn: document.querySelector('[data-overflow-open]'),
    overflow: document.querySelector('[data-oveflow]'),
  };

  refs.openOverflowBtn.addEventListener('click', toggleOverflow);

  function toggleOverflow() {
    document.body.classList.toggle('overflow-open');
    refs.overflow.classList.toggle('is-hidden');
  }
})();