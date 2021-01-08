let testimonials = document.querySelector('.testimonials');
if(testimonials) {
    let testimonialsSlider = new Swiper(testimonials.querySelector('.swiper-container'), {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoHeight: true,
        autoplay: {
            delay: 15000,
        },
        navigation: {
                  nextEl: testimonials.querySelector('.testimonials__btn-next'),
                  prevEl: testimonials.querySelector('.testimonials__btn-prev'),
              },
      });
}