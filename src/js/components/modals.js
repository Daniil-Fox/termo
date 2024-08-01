const modals = document.querySelectorAll('.modal')

modals.forEach(modal => {
  const modalBody = modal.querySelector('.modal__body');
  const modalClose = modal.querySelector('.modal__close');
  const modalFrame = modalBody.querySelector('iframe')
  modal.addEventListener('click', e => {
    modal.classList.remove('active');
    modalFrame.src = "";
  })

  modalBody.addEventListener('click', e => {
    e.stopPropagation();
  })

  modalClose.addEventListener('click', e => {
    modal.classList.remove('active');
    modalFrame.src = "";
  })


})
