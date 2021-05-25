;(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile_menu__btn-open'),
    closeMenuBtn: document.querySelector('.mobile_menu__btn-close'),
    menu: document.querySelector('.mobile-menu'),
  }

  refs.openMenuBtn.addEventListener('click', toggleModal)
  refs.closeMenuBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.menu.classList.toggle('is-open')
  }
})()
