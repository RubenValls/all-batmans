const cards = Array.from(document.querySelectorAll('.card'))
const infos = Array.from(document.getElementsByClassName('info'))
const more = Array.from(document.getElementsByClassName('more'))

const closeModalBtns = Array.from(document.querySelectorAll('.close-modal-btn'))

more.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const info = (anchor.parentElement.nextElementSibling)
    info.style.display = 'flex'
  })
});

infos.forEach(info => {
  info.addEventListener('mouseleave', () => {
    info.style.display = 'none'
  })
})

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none'
  })
})