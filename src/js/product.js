(() => {
  const refs = {
    openOverflowBtn: document.querySelector('[data-overflow-open]'),
    closeOverflowBtn: document.querySelector('[data-overflow-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openOverflowBtn.addEventListener('click', toggleOverflow);
  refs.closeOverflowBtn.addEventListener('click', toggleOverflow);

  function toggleOverflow() {
    document.body.classList.toggle('overflow-open');
    refs.overflow.classList.toggle('is-hidden');
  }
})();

// Product_2
(() => {
  const refs = {
    openOverflow2Btn: document.querySelector('[data-overflow-2-open]'),
    closeOverflow2Btn: document.querySelector('[data-overflow-2-close]'),
    overflow2: document.querySelector('[data-overflow-2]'),
  };

  refs.openOverflow2Btn.addEventListener('click', toggleOverflow2);
  refs.closeOverflow2Btn.addEventListener('click', toggleOverflow2);

  function toggleOverflow2() {
    document.body.classList.toggle('overflow-open');
    refs.overflow2.classList.toggle('is-hidden');
  }
})();

// Product_3
(() => {
  const refs = {
    openOverflow3Btn: document.querySelector('[data-overflow-3-open]'),
    closeOverflow3Btn: document.querySelector('[data-overflow-3-close]'),
    overflow3: document.querySelector('[data-overflow-3]'),
  };

  refs.openOverflow3Btn.addEventListener('click', toggleOverflow3);
  refs.closeOverflow3Btn.addEventListener('click', toggleOverflow3);

  function toggleOverflow3() {
    document.body.classList.toggle('overflow-open');
    refs.overflow3.classList.toggle('is-hidden');
  }
})();