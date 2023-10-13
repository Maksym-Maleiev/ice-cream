// Install swiper-slider
new Swiper(".image-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    // Bullets
    type: 'bullets',
    clickable: true,
    // Dynamic bullets
    dynamicBullets: true,
    // Custom bullets
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});
