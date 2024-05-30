import toggleBodyClass from './toggleBodyClass'

export default function searchModal() {
	const searchButtons = document.querySelectorAll('[data-action="search"]');
	const searchModal = document.querySelector('.menu__search');
	const searchInput = document.getElementById('search-form');
	const deleteButton = document.querySelector('.menu__delete');
	const searchForm = document.getElementById('top-form');

	if (searchButtons.length > 0 && searchModal) {
		searchButtons.forEach((elementButton) => {
			elementButton.addEventListener('click', (event) => {
				event.stopPropagation();
				toggleSearchModal();
				searchInput.focus();
			});
		});

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('click', handleClickOutside);
		searchInput.addEventListener('input', handleInput);
		deleteButton.addEventListener('click', handleDeleteClick);
		searchForm.addEventListener('submit', handleFormSubmit);
	}

	function toggleSearchModal() {
		searchModal.classList.toggle('menu__search-visible');
		toggleBodyClass();
	}

	function closeSearchModal() {
		if (searchModal.classList.contains('menu__search-visible')) {
			searchModal.classList.remove('menu__search-visible');
			toggleBodyClass();
		}
	}

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			closeSearchModal();
		}
	}

	function handleClickOutside(event) {
		if (!searchModal.contains(event.target) && !event.target.matches('[data-action="search"]')) {
			closeSearchModal();
		}
	}

	function handleInput() {
		if (searchInput.value.length > 0) {
			deleteButton.classList.add('menu__delete-visible');
		} else {
			deleteButton.classList.remove('menu__delete-visible');
		}
	}

	function handleDeleteClick() {
		searchInput.value = '';
		deleteButton.classList.remove('menu__delete-visible');
		searchInput.focus();
	}

	function handleFormSubmit(event) {
		if (searchInput.value.trim() === '') {
			event.preventDefault(); // Предотвращаем отправку пустого запроса
		}
	}
}
