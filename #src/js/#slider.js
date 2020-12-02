{
	let slider = document.querySelector('.slider .swiper-container');
	if(slider) {
		let dataSlider = new Swiper(slider, {
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			//observer: true,
			//observeParents: true,
			slidesPerView: 3,
			spaceBetween: 25,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.slider__btn-next',
				prevEl: '.slider__btn-prev',
			},
			
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 5,
					slidesPerColumn: 2,
					autoHeight: false,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
					slidesPerColumn: 2,
					autoHeight: false,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerColumn: 1,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 25,
					slidesPerColumn: 1,
				},

			},
			

			// And if we need scrollbar
			//scrollbar: {
			//	el: '.swiper-scrollbar',
			//},
		});
	}
}