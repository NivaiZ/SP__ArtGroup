export default function dropDownMenu() {
  const dropDownWrappers = document.querySelectorAll('.dropdown__wrapper');

  dropDownWrappers.forEach(wrapper => {
    const dropDownButton = wrapper.querySelector('[data-action="dropdown"]');
    const dropDownList = wrapper.querySelector('[data-action="dropdown__visible"]');

    wrapper.addEventListener('mouseenter', () => {
      dropDownList.classList.add('dropdown__visible');
      dropDownButton.classList.add('dropdown__name--js');
    });

    wrapper.addEventListener('mouseleave', () => {
      dropDownList.classList.remove('dropdown__visible');
      dropDownButton.classList.remove('dropdown__name--js');
    });
  });
}