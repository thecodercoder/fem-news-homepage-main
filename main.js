import './scss/style.scss';

const body = document.querySelector('body');
const main = document.querySelector('main');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu() {
  console.log('open menu');

  btnOpen.setAttribute('aria-expanded', 'true');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  body.classList.add('noscroll');
  btnClose.focus();
}

function closeMobileMenu() {
  console.log('close menu');

  btnOpen.setAttribute('aria-expanded', 'false');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert');
  body.classList.remove('noscroll');
  btnOpen.focus();
}

function setupNav(e) {
  if (e.matches) {
    // mobile
    console.log('is mobile');

    navContent.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    // desktop
    console.log('is desktop');

    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
    navContent.style.display = '';
    navOverlay.style.display = '';
  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupNav(e);
});

// Detect which element has focus
document.addEventListener('keyup', (e) => {
  if (e.key == 'Tab') {
    console.log(document.activeElement);
  }
});
