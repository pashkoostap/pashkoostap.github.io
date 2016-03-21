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

var linkSearchOpen = document.querySelector('.search__block__btn');
var linkSearchForm = document.querySelector('.search__container');

linkSearchOpen.addEventListener('click', function (event) {
  var linkSearchOpen = document.querySelector('.search__block__btn');
  var linkSearchForm = document.querySelector('.search__container');
  event.preventDefault();
  if (linkSearchForm.classList == 'search__container') {
    linkSearchForm.classList.add('search__container__show');
  } else if (linkSearchForm.classList == 'search__container search__container__show') {
    linkSearchForm.classList.remove('search__container__show');
  }
    
});


var linkFormCounterAdult = document.querySelector('.counter-adult');
var linkFormCounterAdultLess = document.querySelector('.adult__less');
var linkFormCounterAdultMore = document.querySelector('.adult__more');

var linkFormCounterChild = document.querySelector('.counter-child');
var linkFormCounterChildLess = document.querySelector('.child__less');
var linkFormCounterChildMore = document.querySelector('.child__more');

function counter (link, less, more) {
  less.addEventListener('click', function (event) {
    
  if (link.value > 1) {
    event.preventDefault();
    link.value = +link.value - 1;
    
  } else {
    event.preventDefault();
    link.value = 0;
  }
      
});
  
  more.addEventListener('click', function (event) {
  event.preventDefault();
  link.value = +link.value + 1;
});
  
}

counter(linkFormCounterAdult, linkFormCounterAdultLess, linkFormCounterAdultMore);
counter(linkFormCounterChild, linkFormCounterChildLess, linkFormCounterChildMore);

