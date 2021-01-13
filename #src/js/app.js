var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('_function.js');


$(document).ready(function() {
	document.body.classList.add('is-load');

	@@include('burger.js');
	@@include('popup.js');
	@@include('forms.js');


// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

			// ==== ADD PADDING-TOP ================================
			{
				let wrapper = document.querySelector('.wrapper');
				if (wrapper) {
					let topLine = document.querySelector('.top-line');
					if(topLine) {
						let headerHeight = topLine.clientHeight;
							wrapper.style.marginTop = headerHeight + 'px';
					}
				}
			}
			// ==== AND ADD PADDING-TOP ================================
	

// === // Проверка, поддержка браузером формата webp ==================================================================

@@include('#video.js');
@@include('#slider.js');
@@include('#gallery-slider.js');
@@include('#recipes.js');
@@include('##testimonials.js');


// == close basket ============================
document.body.addEventListener('click', (e) => {
	if(!e.target.closest('.mini-basket')) {
		document.querySelector('.mini-basket').closest('.action__icon').classList.remove('active')
	}
})
// == // close basket ============================

// == application tooltip handler ============================
let application = document.querySelector('.application');
if(application) {
	window.addEventListener('scroll', () => {
		if(application.getBoundingClientRect().top < 120) {
			application.classList.add('tooltip-bottom');
		} else {
			application.classList.remove('tooltip-bottom');
		}
		
	})
}
// == // application tooltip handler ============================

// == benefit tooltip handler ============================
{
let benefit = document.querySelector('.benefit');
if(benefit) {
	window.addEventListener('scroll', () => {	
		if((benefit.getBoundingClientRect().bottom - document.documentElement.clientHeight) > -250) {
			benefit.classList.add('tooltip-top');
		} else {
			benefit.classList.remove('tooltip-top');
		}
		
	})
}
}
// == // benefit tooltip handler ============================


});