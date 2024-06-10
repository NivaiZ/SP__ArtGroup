import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function posterSlider() {
	const swiperExist = document.querySelector(".poster__article")

	if (swiperExist) {
		function initSwiper() {
			if (document.documentElement.clientWidth < 1366) {
				return new Swiper(swiperExist, {
					slidesPerView: 4,
					spaceBetween: 30,
					freeMode: true,
					watchSlidesProgress: true,
					slidesPerGroup: 1,
					loop: false,
					breakpoints: {
						320: {
							slidesPerView: 1.3,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1440: {
							slidesPerView: 4,
							spaceBetween: 30,
						}
					},
					scrollbar: {
						el: ".poster__scrollbar.swiper-scrollbar",
						dragSize: 1,
						draggable: true,
						snapOnRelease: true,
					},
				})
			}
			return null
		}

		let swiperInstance = initSwiper()

		window.addEventListener("resize", function () {
			if (swiperInstance) {
				swiperInstance.destroy(true, true)
				swiperInstance = null
			}
			swiperInstance = initSwiper()
		})
	} else {
		console.error("Element with the specified selector was not found.")
	}
}
