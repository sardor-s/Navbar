const ulEl = document.querySelector('ul')

const liEl = document.createElement('li')
liEl.className = 'active'
liEl.classList.add('nav-item')
ulEl.appendChild(liEl)
const aEL = document.createElement('a')
aEL.classList.add('nav-link')
aEL.setAttribute("href", "#")
aEL.textContent = 'Home'
liEl.appendChild(aEL)

const li2El = document.createElement('li')
li2El.classList.add('nav-item')
ulEl.appendChild(li2El)
const a2EL = document.createElement('a')
a2EL.classList.add('nav-link')
a2EL.setAttribute("href", "#")
a2EL.textContent = 'service'
li2El.appendChild(a2EL)

const li3El = document.createElement('li')
li3El.classList.add('nav-item')
ulEl.appendChild(li3El)
const a3EL = document.createElement('a')
a3EL.classList.add('nav-link')
a3EL.setAttribute("href", "#")
a3EL.textContent = 'contact'
li3El.appendChild(a3EL)

const li4El = document.createElement('li')
li4El.classList.add('nav-item')
ulEl.appendChild(li4El)
const a4EL = document.createElement('a')
a4EL.classList.add('nav-link')
a4EL.setAttribute("href", "#")
a4EL.textContent = 'about'
li4El.appendChild(a4EL)

const li5El = document.createElement('li')
li5El.className = 'nav-item'
ulEl.appendChild(li5El)
const a5EL = document.createElement('a')
a5EL.classList.add('nav-link')
a5EL.setAttribute("href", "#")
a5EL.textContent = 'blog'
li5El.appendChild(a5EL)

// const formEL = querySelector('from')








