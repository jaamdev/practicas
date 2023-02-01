let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let input = document.querySelector('input');

searchBtn.onclick = function(){
	searchBox.classList.add('active');
	closeBtn.classList.add('active');
	searchBtn.classList.add('active');
	menuToggle.classList.add('hide');
	header.classList.toggle('open');
	input.focus();
}
closeBtn.onclick = function(){
	searchBox.classList.remove('active');
	closeBtn.classList.remove('active');
	searchBtn.classList.remove('active');
	menuToggle.classList.remove('hide');
	input.value = '';
}
menuToggle.onclick = function(){
	header.classList.toggle('open');
	searchBox.classList.remove('active');
	closeBtn.classList.remove('active');
	searchBtn.classList.remove('active');
}