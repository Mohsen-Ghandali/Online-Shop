function myFunction(x) {
    if (x.matches) {
        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 5,
            spaceBetween: 2,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

var x = window.matchMedia("(max-width: 1100px)")
myFunction(x)
x.addListener(myFunction) 