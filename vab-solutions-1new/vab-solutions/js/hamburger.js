const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerMenu = document.getElementById('hamburger-menu');

const toggleHamburgerMenu = () => {
    hamburgerButton.classList.toggle('ham__btn--open');
    hamburgerMenu.classList.toggle('ham__menu--show');
}

hamburgerButton.addEventListener('click', toggleHamburgerMenu);

const hideMenu = (event) => {
    hamburgerMenu.classList.remove('ham__menu--show');
    hamburgerButton.classList.remove('ham__btn--open');

    event.stopPropagation();
}

hamburgerMenu.addEventListener('click', hideMenu, false);