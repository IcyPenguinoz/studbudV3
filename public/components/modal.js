var modalBtn = document.querySelector('#modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('#modal-close');

var modalBtn2 = document.querySelector('#modal-btn2');
var modalBg2 = document.querySelector('.modal-bg2');
var modalClose2 = document.querySelector('#modal-close2');

var modalBtn3 = document.querySelector('#modal-btn3');
var modalBg3 = document.querySelector('.modal-bg3');
var modalClose3 = document.querySelector('#modal-close3');



modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
    console.log(modalBg);

});


modalClose.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');

});

modalBtn2.addEventListener('click', function(){
    modalBg2.classList.add('bg-active2');
    console.log(modalBtn2);

});

modalClose2.addEventListener('click', function(){
    modalBg2.classList.remove('bg-active2');

});

modalBtn3.addEventListener('click', function(){
    modalBg3.classList.add('bg-active3');
    console.log(modalBtn3);

});

modalClose3.addEventListener('click', function(){
    modalBg3.classList.remove('bg-active3');

});