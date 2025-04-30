var swiper = new Swiper('.logo-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true,
    speed: 2800, // Higher speed = faster movement
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
  });

// animation
  AOS.init();

//   new
var myswiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
});