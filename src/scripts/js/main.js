@include('../lib/swiper.js');
@include('accordion.js');
// swiperTestimonials
const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 1,
	spaceBetween: 1,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1100: {
      slidesPerView: 3,
    },
	}
})

let mySwiper = new Swiper(slider, {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 1,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: mySwiperNav,
	}
})