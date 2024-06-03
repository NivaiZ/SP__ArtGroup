import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'
import newsSlider from './modules/newsSlider'
import hoverPosterCard from './modules/posterCard'
import searchModal from './modules/search'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	searchModal();
	hoverPosterCard();
	newsSlider();
	// useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)