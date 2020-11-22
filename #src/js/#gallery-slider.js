{
  let gallerySlider = document.querySelector('.gallery-slider');
  if(gallerySlider) {
    var galleryThumbs = new Swiper(gallerySlider.querySelector('.gallery-slider__thumbs'), {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(gallerySlider.querySelector('.gallery-slider__top'), {
      spaceBetween: 0,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
}
