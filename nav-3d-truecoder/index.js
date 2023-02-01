const hamburger_menu = document.querySelector('.hamburger-menu')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

hamburger_menu.addEventListener('click', () => {
	container.classList.toggle("active")
})

btn.addEventListener('mouseover',() => {
	btn.textContent = 'Ver vídeo'
})

btn.addEventListener('mouseout',() => {
	btn.textContent = 'Read more'
})

btn.addEventListener('click',() => {
	window.open('https://youtu.be/nOcVOJw3Gfw')
})