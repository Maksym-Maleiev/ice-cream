// Install swiper-slider
new Swiper(".image-slider", {
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    // Bullets
    type: 'bullets',
    clickable: true,
    // Dynamic bullets
    dynamicBullets: true,
  },

   // Space between slides
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 1000,
    // stop on last slide
    stopOnLastSlide: false,
    // disable on interaction
    disableOnInteraction: false,
  },
});
