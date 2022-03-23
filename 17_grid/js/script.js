document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#burger').addEventListener('click', function () {
	document.querySelector('#menu').classList.toggle('is-active')
	document.querySelector('#burger').classList.add('none')
	document.querySelector('#close').classList.add('is-active')
	document.querySelector('#header').style.background = '#2F2C45';
	document.querySelector('#header__img').style.visibility = 'hidden';
	document.querySelector('body').style.overflow = 'hidden';
})

document.querySelector('#close').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')
		document.querySelector('#close').classList.remove('is-active')
		document.querySelector('#burger').classList.remove('none')
		document.querySelector('#header').style.background = '#3F2AFF';
		document.querySelector('#header__img').style.visibility = 'visible';
		document.querySelector('body').style.overflow = 'visible';
	})
})