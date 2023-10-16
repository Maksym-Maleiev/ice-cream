(() => {
  const refs = {
    openOverflowBtn: document.querySelector('[data-overflow-open]'),
    overflow: document.querySelector('[data-oveflow]'),
  };

  refs.openOverflowBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('overflow-open');
    refs.overflow.classList.toggle('is-hidden');
  }
})();