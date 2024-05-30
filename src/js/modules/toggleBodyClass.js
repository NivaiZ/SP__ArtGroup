export default function toggleBodyClass() {
	const burgerList = document.querySelector('.burger__wrapper');
	const searchModal = document.querySelector('.menu__search');

	const shouldAddClass = burgerList.classList.contains('burger__wrapper--js') ||
			searchModal.classList.contains('menu__search-visible');

	if (shouldAddClass) {
			document.body.classList.add('background__linear');
	} else {
			document.body.classList.remove('background__linear');
	}
}
