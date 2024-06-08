import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function newsSliderDraft() {
	const swiperSelector = document.querySelectorAll('.news__slider')

	swiperSelector.forEach((element, index) => {
		element.classList.add('swiper-slider-' + index)

		const dragSize = element.dataset.dragSize ? parseInt(element.dataset.dragSize) : 20
		const freeMode = element.dataset.freeMode ? element.dataset.freeMode === 'true' : false
		const loop = element.dataset.loop ? element.dataset.loop === 'true' : false
		const slidesDesktop = element.dataset.slidesDesktop ? parseInt(element.dataset.slidesDesktop) : 4
		const slidesTablet = element.dataset.slidesTablet ? parseInt(element.dataset.slidesTablet) : 3
		const slidesMobile = element.dataset.slidesMobile ? parseInt(element.dataset.slidesMobile) : 2.5
		const spaceBetween = element.dataset.spaceBetween ? parseInt(element.dataset.spaceBetween) : 20

		const swiper = new Swiper('.swiper-slider-' + index, {
			direction: 'horizontal',
			loop: loop,
			freeMode: freeMode,
			spaceBetween: spaceBetween,
			breakpoints: {
				1920: {
					slidesPerView: slidesDesktop
				},
				992: {
					slidesPerView: slidesTablet
				},
				320: {
					slidesPerView: slidesMobile
				}
			},
			scrollbar: {
				el: '.news__scrollbar.swiper-scrollbar',
				draggable: true,
				dragSize: dragSize
			}
		})
	})

}