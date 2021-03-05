'use strict';

// Modal-showing routine
const showModalProc = function (){
    for(let i = 0; i < hiddenBlocks.length; i++)
        hiddenBlocks[i].classList.remove('hidden');
    return;
}

// Modal-closing routine
const closeModalProc = function (){
    for(let i = 0; i < hiddenBlocks.length; i++)
        hiddenBlocks[i].classList.add('hidden');
    return;
}

// Query of elements
const divModal = document.querySelector('.modal');
const divOverlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const hiddenBlocks = document.querySelectorAll('.hidden');

// Event Creation
for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', showModalProc);
}

btnCloseModal.addEventListener('click', closeModalProc);
divOverlay.addEventListener('click', closeModalProc);
document.addEventListener('keydown', function (keyEvent){
    if(keyEvent.key == 'Escape') return closeModalProc();
    else return;
});
