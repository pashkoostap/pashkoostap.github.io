var bookmarkIcon = document.querySelector('.fa-bookmark');
var bookmarkActive = document.querySelector('.bookmark');
var shoppingIcon = document.querySelector('.fa-shopping-cart');
var shoppingkActive = document.querySelector('.shopping-cart');
var searchIcon = document.querySelector('.fa-search');
var inputSearchActive = document.querySelector('.search-field');

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