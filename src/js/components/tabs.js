const tabs = document.querySelectorAll('.types__tab')
const tabsContent = document.querySelectorAll('.types__content')

const clearActive = () => {
  tabs.forEach(t => t.classList.remove('active'))
  tabsContent.forEach(t => t.classList.remove('active'))
}
tabs.forEach(el => {
  el.addEventListener('click', e => {
    clearActive()
    const dataset = el.dataset.tabType
    document.querySelector(`[data-tab-content="${dataset}"]`).classList.add('active')

    el.classList.add('active')

  })
})
