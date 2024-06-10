import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function gallerySlider () {
	const swiperElemenet = document.querySelector('.gallery-block__slider')

	if (swiperElemenet) {
		const swiper = new Swiper(swiperElemenet, {
			slidesPerView: 4.79,

			scrollbar: {
				el: ".gallery-block__scrollbar.swiper-scrollbar",
				dragSize: 10,
				draggable: true,
				snapOnRelease: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 2.1,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
				1440: {
					slidesPerView: 4.79,
				}
			}
		});
	}
}