var link = document.querySelector('.login');
var modalCont = document.querySelector('.modal-content');
var modalClose = document.querySelector('.modal-content-close');
var mapLink = document.querySelector('.how-to-find', 'a.how-to-find');
var modalMapOpen = document.querySelector('.modal-map');
var modalMapClose = document.querySelector('.modal-map-close');

link.addEventListener('click', function (event) {
    event.preventDefault();
    modalCont.classList.add('modal-content-show');
});

modalClose.addEventListener('click', function (event) {
    event.preventDefault();
    modalCont.classList.remove('modal-content-show');
});

mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    modalMapOpen.classList.add('modal-map-show');
});

modalMapClose.addEventListener('click', function (event) {
    event.preventDefault();
    modalMapOpen.classList.remove('modal-map-show');
});
