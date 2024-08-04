
const typesContent = document.querySelectorAll('.types__content')

typesContent.forEach(tc => {
  const contentBody = tc.querySelector('.types-body__content')
  const moreBtn = tc.querySelector('.types-body__more')

  moreBtn.addEventListener('click', e => {
    e.preventDefault()
    let isActive = moreBtn.classList.toggle('active')

    contentBody.style.maxHeight = isActive ? contentBody.scrollHeight + 'px' : null;
  })
})

function clearActive(){
  typesContent.forEach(tc => {
    const contentBody = tc.querySelector('.types-body__content')
    const moreBtn = tc.querySelector('.types-body__more')

    let isActive = moreBtn.classList.remove('active')

    contentBody.style.maxHeight = null;
  })
}

export default clearActive
