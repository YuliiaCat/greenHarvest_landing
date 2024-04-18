import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      loop: true,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false,
    },
  },

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});
