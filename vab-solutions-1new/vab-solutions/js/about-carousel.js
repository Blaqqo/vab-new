const swiper = new Swiper('.mySwiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});