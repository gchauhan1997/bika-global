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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 4,
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
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

// for mobile banner slider
var swiper = new Swiper('.mobile-banner-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// for mobile vertical slider
const swiperVertical = new Swiper('.swiper-container-vertical', {
    direction: 'vertical',
    slidesPerView: '3', // Enable auto height
    freeMode: true, // Enable free scrolling
    speed: 2800,
    loop: true,
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    mousewheel: true, // Enable mousewheel scrolling
    reverseDirection: true, // Scroll from bottom to top
});

// bottom navbar
// js for bottom navigation

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav__item");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (el) {
        el.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});








// add class on scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});
