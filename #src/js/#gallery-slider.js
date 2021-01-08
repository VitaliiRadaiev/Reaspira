{
  let gallerySlider = document.querySelector('.gallery-slider');
  if(gallerySlider) {
    let galleryThumbs = new Swiper(gallerySlider.querySelector('.gallery-slider__thumbs'), {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
				nextEl: gallerySlider.querySelector('.gallery-slider__thumbs-btn_next'),
				prevEl: gallerySlider.querySelector('.gallery-slider__thumbs-btn_prev'),
			},
    });
    let galleryTop = new Swiper(gallerySlider.querySelector('.gallery-slider__top'), {
      spaceBetween: 15,
      thumbs: {
        swiper: galleryThumbs
      },

    });
  }

  let galleryThumbs = document.querySelector('.gallery-slider__thumbs .swiper-wrapper');
  if(galleryThumbs) {
    if(document.documentElement.clientWidth > 410) {
        if(galleryThumbs.children.length <= 4) {
          let control = document.querySelector('.gallery-slider__thumbs-control');
          control.style.display = 'none';
        }

    } else {
      if(galleryThumbs.children.length <= 3) {
        let control = document.querySelector('.gallery-slider__thumbs-control');
        control.style.display = 'none';
      }
    }
  }
}
