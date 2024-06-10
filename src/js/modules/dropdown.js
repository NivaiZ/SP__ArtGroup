export default function dropDownMenu() {
  const applyDropDownMenu = () => {
    const dropDownWrappers = document.querySelectorAll('.dropdown__wrapper');

    dropDownWrappers.forEach(wrapper => {
      const dropDownButton = wrapper.querySelector('[data-action="dropdown"]');
      const dropDownList = wrapper.querySelector('[data-action="dropdown__visible"]');

      const showDropDown = () => {
        dropDownList.classList.add('dropdown__visible');
        dropDownButton.classList.add('dropdown__name--js');
      };

      const hideDropDown = () => {
        dropDownList.classList.remove('dropdown__visible');
        dropDownButton.classList.remove('dropdown__name--js');
      };

      wrapper.addEventListener('mouseenter', showDropDown);
      wrapper.addEventListener('mouseleave', hideDropDown);

      // Сохраняем функции для удаления обработчиков позже
      wrapper._showDropDown = showDropDown;
      wrapper._hideDropDown = hideDropDown;
    });
  };

  const removeDropDownMenu = () => {
    const dropDownWrappers = document.querySelectorAll('.dropdown__wrapper');

    dropDownWrappers.forEach(wrapper => {
      if (wrapper._showDropDown && wrapper._hideDropDown) {
        wrapper.removeEventListener('mouseenter', wrapper._showDropDown);
        wrapper.removeEventListener('mouseleave', wrapper._hideDropDown);

        // Удаляем сохраненные функции после удаления обработчиков
        delete wrapper._showDropDown;
        delete wrapper._hideDropDown;
      }
    });
  };

  const handleResize = () => {
    if (window.matchMedia('(min-width: 1366px)').matches) {
      applyDropDownMenu();
    } else {
      removeDropDownMenu();
    }
  };

  // Initial check
  handleResize();

  // Check on resize
  window.addEventListener('resize', handleResize);
}
