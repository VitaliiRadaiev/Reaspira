{
	let sliders = document.querySelectorAll('.slider');
	sliders.forEach(item => {
		let slider = item.querySelector('.swiper-container');
		let dataSlider;
		let dataSliderBottom;
	
		if(slider) {
			dataSlider = new Swiper(slider, {
				slidesPerView: 3,
				spaceBetween: 25,
				speed: 800,
				navigation: {
					nextEl: '.slider__btn-next',
					prevEl: '.slider__btn-prev',
				},
				
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 5,
						autoHeight: false,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 15,
						autoHeight: false,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
	
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 20,
		
					},
	
				},
				
			});
	
			if(document.documentElement.clientWidth < 768) {
				createSlider();
			}
	
			function createSlider() {
				let container = item.querySelector('.container');
				let mainSliderChilds = [...item.querySelector('.swiper-container .swiper-wrapper').children];
				let hulfChilds = mainSliderChilds.slice(Math.floor(mainSliderChilds.length / 2));
				
				let slider = document.createElement('div');
				slider.className = "bottom-slider swiper-container";
				slider.innerHTML = '<div class="swiper-wrapper"></div>';
				slider.firstChild.append(...hulfChilds);
	
				dataSlider.update();
				container.append(slider);
	
				dataSliderBottom = new Swiper(slider, {
					slidesPerView: 3,
					spaceBetween: 25,
					speed: 800,
					
					breakpoints: {
						320: {
							slidesPerView: 2,
							spaceBetween: 5,
							autoHeight: false,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 15,
							autoHeight: false,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
		
						},
						992: {
							slidesPerView: 4,
							spaceBetween: 20,
			
						},
		
					},
					
				});
	
				dataSlider.controller.control = dataSliderBottom;
				dataSliderBottom.controller.control = dataSlider;
					
			}
	
			function destroySlider() {
	
			}
		}
	})

}