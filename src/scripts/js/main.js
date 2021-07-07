@include('../lib/swiper.js');
@include('accordion.js');
//burger
const burger = document.querySelectorAll('.burger');

burger.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle("active");
		document.querySelector(".header__nav").classList.toggle("active")
		document.querySelector("body").classList.toggle("lock")
	})
})


//swiperHero
const sliderHero = document.querySelector('.slider-hero');

let swiperHero = new Swiper(sliderHero, {
	slidesPerView: 1,
	spaceBetween:0,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		991: {
      slidesPerView: "auto",
    },
	}
})

//swiperMeetYouniverse
const meetYouniverseSlider = document.querySelector('.features-items');

if (meetYouniverseSlider) {

let swiperMeetYouniverse;

function mobileSlider() {
	if (window.innerWidth <= 510 && meetYouniverseSlider.dataset.mobile == 'false') {
		swiperMeetYouniverse = new Swiper(meetYouniverseSlider, {
			slidesPerView: 1,
			// spaceBetween: 20,
			loop: true,
			centeredSlides: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			slideClass: 'features-item',
			
		});

		meetYouniverseSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 510) {
		meetYouniverseSlider.dataset.mobile = 'false';
		if (meetYouniverseSlider.classList.contains('swiper-container-initialized')) {
			swiperMeetYouniverse.destroy();
		}
	}
}
mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
}




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