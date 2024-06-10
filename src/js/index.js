import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'
import useDynamicAdapt from './modules/dynamic-adapt'
import gallerySlider from './modules/gallerySlider'
import newsSlider from './modules/newsSlider'
import partnersSlider from './modules/partnersSlider'
import hoverPosterCard from './modules/posterCard'
import searchModal from './modules/search'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	searchModal();
	hoverPosterCard();
	newsSlider();
	gallerySlider();
	partnersSlider();
	useDynamicAdapt("max");
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)