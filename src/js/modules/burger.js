import toggleBodyClass from './toggleBodyClass';

export default function burgerMenu() {
	const burgerButton = document.querySelector('[data-action="click"]');
	const burgerList = document.querySelector('.burger__wrapper');

	if (burgerButton) {
			burgerButton.addEventListener('click', (event) => {
					event.stopPropagation(); // Предотвращаем всплытие события
					toggleBurgerMenu();
			});

			document.addEventListener('keydown', handleKeyDown);
			document.addEventListener('click', handleClickOutside);
	}

	function toggleBurgerMenu() {
			burgerButton.classList.toggle('burger__open');
			burgerList.classList.toggle('burger__wrapper--js');
			toggleBodyClass();
	}

	function closeBurgerMenu() {
			if (burgerList.classList.contains('burger__wrapper--js')) {
					burgerList.classList.remove('burger__wrapper--js');
					burgerButton.classList.remove('burger__open');
					toggleBodyClass();
			}
	}

	function handleKeyDown(event) {
			if (event.key === 'Escape') {
					closeBurgerMenu();
			}
	}

	function handleClickOutside(event) {
			if (!burgerList.contains(event.target) && !burgerButton.contains(event.target)) {
					closeBurgerMenu();
			}
	}
}
