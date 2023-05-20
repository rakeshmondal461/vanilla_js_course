const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal-button');
const showModalButtons = document.querySelectorAll('.show-modal-button');

for (let index = 0; index < showModalButtons.length; index++)
  showModalButtons[index].addEventListener('click', (e) => {
    showHideModal('show');
  });

closeModalButton.addEventListener('click', () => {
  showHideModal('hide');
});

overlay.addEventListener('click', () => {
  showHideModal('hide');
});

const showHideModal = (flag) => {
  if (flag === 'show') {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(e);
    showHideModal('hide');
  }
});
