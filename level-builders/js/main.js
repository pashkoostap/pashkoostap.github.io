var link = document.querySelector('.btn-contact');
var modalContBG = document.querySelector('.modal-content');
var modalContForm = document.querySelector('.modal-content-form');

var modalClose = document.querySelector('.modal-close');


link.addEventListener('click', function (event) {
    event.preventDefault();
    modalContBG.classList.add('modal-content-show');
    modalContForm.classList.add('modal-content-form-show');
});

modalClose.addEventListener('click', function (event) {
    event.preventDefault();
    modalContBG.classList.remove('modal-content-show');
    modalContForm.classList.remove('modal-content-form-show');

});

