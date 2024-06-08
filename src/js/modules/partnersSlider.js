import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function partnersSlider () {
	const swiperElement = document.querySelector('.partners__slider')

	if (swiperElement) {
		const swiper = new Swiper(swiperElement, {
      slidesPerView: 4,
			spaceBetween: 30,
      navigation: {
        nextEl: ".partners__group-button.partners__group-button-next",
        prevEl: ".partners__group-button.partners__group-button-prev",
      },
    });
	}

}