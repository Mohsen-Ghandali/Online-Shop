function myFunction(x) {
    if (x.matches) {
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
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

  var x = window.matchMedia("(max-width:384px)")
  myFunction(x)
  x.addListener(myFunction) 


  // window.onresize = function(){ location.reload(); }