import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'
import useDynamicAdapt from './modules/dynamic-adapt'
import gallerySlider from './modules/gallerySlider'
import newsSlider from './modules/newsSlider'
import partnersSlider from './modules/partnersSlider'
import hoverPosterCard from './modules/posterCard'
import posterSlider from './modules/posterSlider'
import searchModal from './modules/search'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	searchModal();
	hoverPosterCard();
	newsSlider();
	gallerySlider();
	partnersSlider();
	posterSlider();
	useDynamicAdapt("max");
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)