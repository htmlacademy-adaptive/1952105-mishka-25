const menuToggle = () => {
  const header = document.querySelector('.header');
  const headerButton = document.querySelector('.header__toggle');

  header.classList.remove('header--no--js')

  headerButton.addEventListener('click', () => {
    haeder.classList.toggle('.menu--opened');
  })
}

menuToggle();
