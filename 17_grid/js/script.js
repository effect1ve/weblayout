document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#burger').addEventListener('click', function () {
	document.querySelector('#menu').classList.toggle('is-active')
	document.querySelector('#burger').classList.add('none')
	document.querySelector('#close').classList.add('is-active')
	document.querySelector('body').style.overflow = 'hidden';
})

document.querySelector('#close').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')
		document.querySelector('#close').classList.remove('is-active')
		document.querySelector('#burger').classList.remove('none')
		document.querySelector('body').style.overflow = 'visible';
	})
})