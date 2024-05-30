import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'
import hoverPosterCard from './modules/posterCard'
import searchModal from './modules/search'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	searchModal();
	hoverPosterCard();
	// useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)