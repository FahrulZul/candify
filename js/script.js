var hamburger = document.querySelector('.header_toggle');
var header = document.querySelector('.header')

hamburger.addEventListener('click', function(){
    header.classList.toggle('open');

});