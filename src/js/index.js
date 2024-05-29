import burgerMenu from './modules/burger'
import dropDownMenu from './modules/dropdown'

function handleDOMContentLoaded() {
	burgerMenu();
	dropDownMenu();
	// useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)