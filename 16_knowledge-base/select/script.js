document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")  

  const choices = new Choices(selector, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });

  const sel = document.querySelector('.choisec1')

  const choisec1 = new Choices(sel, {
  	searchEnabled: false,
  	itemSelectText: '',
  	classNames: {
  		containerOuter: 'choices1',
  	},
  })
  
});