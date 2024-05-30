import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'
import searchModal from './modules/search'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	searchModal();
	// useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)