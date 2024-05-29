export default function dropDownMenu() {
	const dropDownButton = document.querySelectorAll('[data-action="dropdown"]')
	const dropDownList = document.querySelectorAll('[data-action="dropdown__visible"]')

	if (dropDownButton) {
		for (let i = 0; i < dropDownButton.length; i++) {
			const elementButton = dropDownButton[i]
			const elementList = dropDownList[i]

			elementButton.addEventListener('mouseenter', () => {
				elementList.classList.toggle('dropdown__visible')
				elementButton.classList.toggle('dropdown__name--js')
			})
		}
	}
}