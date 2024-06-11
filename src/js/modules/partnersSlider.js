import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function partnersSlider() {
  const swiperElement = document.querySelector('.partners__slider')

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 4,
      spaceBetween: 30,

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 8,
          grid: {
            rows: 2,
            fill: "row",
          },
        },

        1439: {
          slidesPerView: 4,
        },
      },

      navigation: {
        nextEl: ".partners__group-button.partners__group-button-next",
        prevEl: ".partners__group-button.partners__group-button-prev",
      },
    })
  }

}