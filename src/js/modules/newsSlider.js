import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function newsSlider () {
	const swiperExist = document.querySelector('.news__slider');

	if(swiperExist) {
		const swiper = new Swiper(swiperExist, {
			slidesPerView: 4,
			spaceBetween: 30,
      scrollbar: {
        el: ".swiper-scrollbar",
				dragSize: 'auto',
				draggable: true,
				snapOnRelease: true,
      },
    });
	}
}