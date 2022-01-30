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

})

