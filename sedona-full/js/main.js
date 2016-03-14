var linkMobileOpen = document.querySelector('.main-nav__mobile--open');
var linkMobileClose = document.querySelector('.main-nav__mobile--close');
var linkNavList = document.querySelector('.main-nav__list');


linkMobileOpen.addEventListener('click', function (event) {
  linkNavList.classList.add('main-nav__list--show');
  linkMobileClose.classList.add('main-nav__mobile--close--show');
});

linkMobileClose.addEventListener('click', function (event) {
  linkNavList.classList.remove('main-nav__list--show');
  linkMobileClose.classList.remove('main-nav__mobile--close--show');
});

