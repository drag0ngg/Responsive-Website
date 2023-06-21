const btn = document.querySelector('.show')
const ul = document.querySelector('.ul')
const nav1row = document.querySelector('.nav1row')


btn.addEventListener('click', () => {
  if (btn.innerHTML == '=') {
    btn.innerHTML = 'x'
    ul.className = 'ulon'
    btn.style.position = 'absolute'
    nav1row.style.display = 'none'

  } else {
    btn.innerHTML = '='
    ul.className = 'ulof'
    btn.style.position = 'none'
    nav1row.style.display = 'flex'
  }
})