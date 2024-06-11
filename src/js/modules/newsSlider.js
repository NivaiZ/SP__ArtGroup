import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function newsSlider() {
	const swiperExist = document.querySelector('.news__slider')

	if (swiperExist) {
		const swiper = new Swiper(swiperExist, {
			slidesPerView: 4,
			spaceBetween: 30,
			freeMode: true,
			watchSlidesProgress: true,
			slidesPerGroup: 1,
			loop: false,

			breakpoints: {
				320: {
					slidesPerView: 1.4,
					spaceBetween: 20,
				},
				450: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				650: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			scrollbar: {
				el: ".news__scrollbar.swiper-scrollbar",
				dragSize: 1,
				draggable: true,
				snapOnRelease: true,
			},

		})
	}
}