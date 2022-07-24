document.addEventListener('DOMContentLoaded', function() {

const swiper = new Swiper('.swiper', {
//параметры
slidesPerView: 1,
loop: true,

// пагинация
pagination: {
el: '.swiper-pagination',
clickable: true,
},
});

document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')
		document.querySelector('#burger').classList.add('none')
		document.querySelector('#burger-close').classList.add('active')
		document.querySelector('body').style.overflow = 'hidden';
	})

document.querySelector('#burger-close').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')
		document.querySelector('#burger-close').classList.remove('active')
		document.querySelector('#burger').classList.remove('none')
		document.querySelector('body').style.overflow = 'visible';
	})

// оживляем табы
document.querySelectorAll('.do__btn').forEach(function(tabsBtn) {
	tabsBtn.addEventListener('click', function(event) {
		const path = event.currentTarget.dataset.path

		document.querySelectorAll('.do__content').forEach(function(tabContent) {
			tabContent.classList.remove('active')
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('active')

// подсвечтваем активную кнопку
		document.querySelectorAll('.do__btn').forEach(function(btn){
			btn.classList.remove('do__btn-active')
		})
		event.currentTarget.classList.add('do__btn-active')
	})
})

 $( function() {
    $( "#accordion" ).accordion({
    	active: 'none',
    	collapsible:true,
    });
  } );

 document.querySelector('#search-svg').addEventListener('click', function(){
 	document.querySelector('#search-input').classList.add('active')
 	document.querySelector('#search-close').classList.add('active')
 	document.querySelector('#search-svg').classList.add('transform')
 	document.querySelector('#search').blur();
 })

  document.querySelector('#search-close').addEventListener('click', function(){
 	document.querySelector('#search-input').classList.remove('active')
 	document.querySelector('#search-close').classList.remove('active')
 	document.querySelector('#search-svg').classList.remove('transform')
 })

})

