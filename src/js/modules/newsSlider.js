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
			scrollbar: {
				el: ".news__scrollbar.swiper-scrollbar",
				dragSize: 1,
				draggable: true,
				snapOnRelease: true,
			},
		})
	}
}