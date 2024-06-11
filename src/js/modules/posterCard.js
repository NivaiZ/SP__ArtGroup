export default function hoverPosterCard() {
	const calendarButton = document.querySelectorAll('[data-action="calendar"]')
	const closeButton = document.querySelectorAll('[data-action="close"]')
	const modalPoster = document.querySelectorAll('.poster__background')

	if (calendarButton && modalPoster && closeButton) {
		for (let i = 0; i < calendarButton.length; i++) {
			const elementCard = calendarButton[i]
			const elementPoster = modalPoster[i]
			const elementClose = closeButton[i]

			elementCard.addEventListener('click', () => {
				elementPoster.classList.toggle('poster__visible')
			})

			elementClose.addEventListener('click', () => {
				elementPoster.classList.remove('poster__visible')
			})
		}
	}
}