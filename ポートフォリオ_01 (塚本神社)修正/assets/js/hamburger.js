// JavaScript Document

const ham = document.querySelector('#trigger');
const nav = document.querySelector('nav');

ham.addEventListener('click', function(){
	ham.classList.toggle('active');
	nav.classList.toggle('active');
});