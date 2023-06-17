'use strict'

// Hero Slider
$('.slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});

// Mobile Screen Manue

const btnManue = document.querySelector(".manue-open");
const closeBtn = document.querySelector(".manue-close");
const manueShow = document.querySelector("nav");


btnManue.addEventListener('click', function(){
	closeBtn.classList.add("cls-active")
	btnManue.classList.add("opn-manue")
	manueShow.classList.add("navactive")

})

closeBtn.addEventListener('click', function(){
	closeBtn.classList.remove("cls-active")
	btnManue.classList.remove("opn-manue")
	manueShow.classList.remove("navactive")
})

