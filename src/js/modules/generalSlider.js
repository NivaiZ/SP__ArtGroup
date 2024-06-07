import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function generalSlider () {
	const swiper = new Swiper(".mySwiper", {
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});
}