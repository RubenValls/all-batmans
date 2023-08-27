const infos = Array.from(document.getElementsByClassName('info'))
const more = Array.from(document.getElementsByClassName('more'))

more.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const info = (e.target.parentElement.nextElementSibling)
    info.style.display = 'flex'
  })
});

infos.forEach(info => {
  info.addEventListener('mouseleave', (e) => {
    e.target.style.display = 'none'
  })
})