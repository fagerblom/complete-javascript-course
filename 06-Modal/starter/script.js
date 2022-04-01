'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//querySelectorAll > target all elements in class not just first
const btnCloseModal = document.querySelector('.close-modal');

//querySelectorAll > target all elements in class not just first
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden', 'antoher-class');
  overlay.classList.remove('hidden');
};

//attach eventhandlers to >>all buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// use one functionn to instead of repeating in each eventListener
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//e = event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
