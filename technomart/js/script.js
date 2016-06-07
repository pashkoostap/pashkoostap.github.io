var bookmarkIcon = document.querySelector('.fa-bookmark');
var bookmarkActive = document.querySelector('.bookmark');
var shoppingIcon = document.querySelector('.fa-shopping-cart');
var shoppingkActive = document.querySelector('.shopping-cart');
var searchIcon = document.querySelector('.fa-search');
var inputSearchActive = document.querySelector('.search-field');
var signInIcon = document.querySelector('.fa-sign-in');
var registerActive = document.querySelector('.sign-in');

inputSearchActive.addEventListener('mouseover', function(event) {
  searchIcon.classList.add('fa-search-hover');
});

inputSearchActive.addEventListener('mouseout', function(event) {
  searchIcon.classList.remove('fa-search-hover');
});

inputSearchActive.addEventListener('focus', function(event) {
  searchIcon.classList.add('fa-search-active');
});

inputSearchActive.addEventListener('blur', function(event) {
  searchIcon.classList.remove('fa-search-active');
});



bookmarkActive.addEventListener('mouseover', function(event) {
  event.preventDefault();
  bookmarkIcon.classList.add('fa-bookmark-hover');
});

bookmarkActive.addEventListener('mouseout', function(event) {
  event.preventDefault();
  bookmarkIcon.classList.remove('fa-bookmark-hover');
});

bookmarkActive.addEventListener('focus', function(event) {
  event.preventDefault();
  bookmarkIcon.classList.remove('fa-bookmark-hover');
  bookmarkIcon.classList.add('fa-bookmark-active');
});

bookmarkActive.addEventListener('blur', function(event) {
  event.preventDefault();
  bookmarkIcon.classList.remove('fa-bookmark-active');
});


shoppingkActive.addEventListener('mouseover', function(event) {
  event.preventDefault();
  shoppingIcon.classList.add('fa-shopping-cart-hover');
});

shoppingkActive.addEventListener('mouseout', function(event) {
  event.preventDefault();
  shoppingIcon.classList.remove('fa-shopping-cart-hover');
});

shoppingkActive.addEventListener('focus', function(event) {
  event.preventDefault();
  shoppingIcon.classList.remove('fa-shopping-cart-hover');
  shoppingIcon.classList.add('fa-shopping-cart-active');
});

shoppingkActive.addEventListener('blur', function(event) {
  event.preventDefault();
  shoppingIcon.classList.remove('fa-shopping-active');
});


registerActive.addEventListener('mouseover', function(event) {
  signInIcon.classList.add('fa-sign-in-hover');
});

registerActive.addEventListener('mouseout', function(event) {
  signInIcon.classList.remove('fa-sign-in-hover');
});

registerActive.addEventListener('focus', function(event) {
  event.preventDefault();
  signInIcon.classList.remove('fa-sign-in-hover');
});

registerActive.addEventListener('click', function(event) {
  event.preventDefault();
  signInIcon.classList.remove('fa-sign-in-hover');
});

var sliderList = [];
var sliderPages = 2;
var sliderWrap = document.querySelector('.slider-wrap');
var arrowLeft = sliderWrap.querySelector('.fa-angle-left');
var arrowRight = sliderWrap.querySelector('.fa-angle-right');
var currentSlide = sliderWrap.querySelector('.slide-active');

for (var i = 0; i < sliderPages; i++) {
  var sliderPage = '.slide-' + (i+1);
  sliderList[i] = sliderWrap.querySelector(sliderPage);
}

arrowRight.addEventListener('click', function(event) {
  var currentSlide = sliderWrap.querySelector('.slide-active');
  for (var i = 0; i < (sliderList.length - 1); i++) {
    if(currentSlide == sliderList[i]) {
      var nextSlide = sliderList[i+1];
    } else if (currentSlide == sliderList[sliderList.length - 1]){
      var nextSlide = sliderList[0];
    }
  }
  
  currentSlide.classList.remove('slide-active');
  nextSlide.classList.add('slide-active');
});


arrowLeft.addEventListener('click', function(event) {
  var currentSlide = sliderWrap.querySelector('.slide-active');
  for (var i = sliderPages; i > 0; i--) {
    if(currentSlide == sliderList[i]) {
      var prevSlide = sliderList[i-1];
    } else if (currentSlide == sliderList[0]){
      var prevSlide = sliderList[sliderList.length - 1];
    }
  }
  
  currentSlide.classList.remove('slide-active');
  prevSlide.classList.add('slide-active');
});


     
     
     
     
     
     