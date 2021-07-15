@include('../lib/swiper.js');
@include('accordion.js');
@include('paginator.js');

//burger
const burger = document.querySelectorAll('.burger');

burger.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle("active");
		document.querySelector(".header-nav").classList.toggle("active")
		document.querySelector("body").classList.toggle("lock")
	})
});


//homepage
const homePage = document.querySelector('#homepage');
if (homePage) {
	//swiperHero
	const sliderHero = document.querySelector('.slider-hero');

	let swiperHero = new Swiper(sliderHero, {
		slidesPerView: 1,
		spaceBetween: 0,
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

	// swiperVideos and player
	const video = document.querySelector('.video-container');
	const videoNav = document.querySelector('.video-nav');

	let swiperVideoNav = new Swiper(videoNav, {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1100: {
				slidesPerView: 6,
			},
		}
	});

	let activeVideo = document.querySelector('.video.active-video video');
	let videos = document.querySelectorAll('video');
	let playBtnBig = document.querySelector('.play-btn');
	let playBtn = document.querySelector('.video-controls .play');
	let pauseBtn = document.querySelector('.video-controls .pause');
	let currTime = document.querySelector('.video-controls .curr-time');
	let durTime = document.querySelector('.video-controls .dur-time');
	let progressBar = document.querySelector('.video-controls .progress-bar');
	let soundBar = document.querySelector('.video-controls .sound-bar');
	let expandBtn = document.querySelector('.video-controls .expand');
	console.log(activeVideo);
	videos.forEach((vid) => {
		if (vid.played) {
			vid.pause();
			playBtnBig.classList.remove("hidden");
			playBtn.classList.remove("hidden");
			pauseBtn.classList.add("hidden");
		}
	});


	function videoAct() {
		activeVideo = document.querySelector('.video.swiper-slide-active video');
		console.log(activeVideo);

		if (activeVideo.paused) {
			activeVideo.play();
			playBtn.classList.add("hidden");
			playBtnBig.classList.add("hidden");
			pauseBtn.classList.remove("hidden");
			console.log(activeVideo);
			activeVideo.addEventListener('timeupdate', videoProgress);
			soundBar.addEventListener('change', videoChangeVolume);

		} else {
			activeVideo.pause();
			playBtn.classList.remove("hidden");
			playBtnBig.classList.remove("hidden");
			pauseBtn.classList.add("hidden");

		}
		if (durTime.innerHTML == '00:00') {
			durTime.innerHTML = videoTime(activeVideo.duration);
		}
	};

	function toggleFullscreen() {
		let elem = document.querySelector('.video.swiper-slide-active video');

		if (!document.fullscreenElement) {
			elem.requestFullscreen().catch(err => {
				alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
			});
		} else {
			document.exitFullscreen();
		}
	};

	expandBtn.addEventListener('click', toggleFullscreen);
	playBtn.addEventListener('click', videoAct);
	pauseBtn.addEventListener('click', videoAct);
	playBtnBig.addEventListener('click', videoAct);

	function videoTime(time) {
		time = Math.floor(time);
		let minutes = Math.floor(time / 60);
		let seconds = Math.floor(time - minutes * 60);
		let minutesVal = minutes;
		let secondsVal = seconds;
		if (minutes < 10) {
			minutesVal = '0' + minutes;
		}
		if (seconds < 10) {
			secondsVal = '0' + seconds;
		}
		return minutesVal + ':' + secondsVal;
	};

	function videoProgress() {
		progress = (Math.floor(activeVideo.currentTime) / (Math.floor(activeVideo.duration) / 100));
		progressBar.value = progress;
		currTime.innerHTML = videoTime(activeVideo.currentTime);
	}

	function videoChangeTime(e) {
		let mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
		let progress = mouseX / (progressBar.offsetWidth / 100);
		activeVideo.currentTime = activeVideo.duration * (progress / 100);
	}

	progressBar.addEventListener('click', videoChangeTime);

	function videoChangeVolume() {
		let volume = soundBar.value / 100;
		console.log(volume);
		activeVideo.volume = volume;
	};

	let swiperVideo = new Swiper(video, {
		spaceBetween: 1,
		loop: true,
		loopedSlides: 1,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		thumbs: {
			swiper: swiperVideoNav,
		}
	});

	swiperVideo.on('slideChange', function () {
		console.log(activeVideo);

		console.log(durTime.innerHTML);
		videos.forEach((vid) => {
			if (vid.played) {
				vid.pause();
				playBtnBig.classList.remove("hidden");
				playBtn.classList.remove("hidden");
				pauseBtn.classList.add("hidden");
				activeVideo.removeEventListener;
			}
		});
		durTime.innerHTML = '00:00';
		currTime.innerHTML = '00:00';
		progressBar.value = 0;
	});
}


// swiperTestimonials
const slider = document.querySelector('.slider-main');
const sliderNav = document.querySelector('.slider-nav');

let mySwiperNav = new Swiper(sliderNav, {
	slidesPerView: 1,
	spaceBetween: 10,
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


//contact page
const contactPage = document.querySelector('#contact');
if (contactPage) {

	const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY; //позиция экрана по Y
    const scrollWidth = window.innerWidth - document.body.offsetWidth // ширина скроллбара

    document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    width: 100%;
    overflow:hidden;
    height:100vh;
    padding-right: ${scrollWidth}px;
    `
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY
    })
}

	//FORM
	const formElems = document.querySelectorAll('.contact-form');
	const closeModalBtn = document.querySelector('#modal-close');
	const modalElem = document.querySelector('.modal');

	const formHandler = (form) => {
		const smallElem = document.createElement('small');
		form.append(smallElem);
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const data = {};
			let flag = true;
			const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			const buttonSubmit = form.querySelector('.button[type="submit"]');
			for (const elem of form.elements) {
				const { name, value } = elem;
				if (name) {
					if (!value.trim()) {
						elem.classList.add('input-error');
						flag = false;
						elem.value = '';
						elem.placeholder = 'Field ' + name + ' is required';
					} else if (name == 'mail' && reg.test(value) == false) {
						elem.classList.add('input-error');
						flag = false;
						elem.value = '';
						elem.placeholder = 'Invalid email';
					}
					else {
						elem.classList.remove('input-error');
						data[name] = value.trim();
					}
				}
			}

			if (flag) {
				modalElem.classList.remove('hidden');
				form.reset();
				return;
			}
		});
	};
	formElems.forEach(formHandler);

	//MODAL
	

	const openModal = () => {
		modalElem.classList.remove('hidden');
		disableScroll();
	}

	const closeModal = () => {
		modalElem.classList.add('hidden');
		enableScroll();
	}
	
	closeModalBtn.addEventListener('click', closeModal);

	//MAP
	const infoBox = document.querySelector('.infobox');
	let map;

	function initMap() {
		const styledMapType = new google.maps.StyledMapType(
			[
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#46bcec"
						},
						{
							"visibility": "on"
						}
					]
				}
			],
			{ name: "Styled Map" }
		);
		const myPlace = { lat: 53.90899912816915, lng: 27.522981573908456 };
		map = new google.maps.Map(document.getElementById("map"), {
			zoom: 12,
			center: { lat: 53.90899912816915, lng: 27.522981573908456 },
		});

		map.mapTypes.set("styled_map", styledMapType);
		map.setMapTypeId("styled_map");

		const contentString = infoBox;

		let infowindow = new google.maps.InfoWindow({
			content: contentString,
		});
		let marker = new google.maps.Marker({
			position: myPlace,
			map,
			icon: {
				url: "media/icons/sprite.svg#icon-baloon",
				scaledSize: new google.maps.Size(64, 64),
				fillColor: "#431d91",
				fillOpacity: .1,
			},
			title: "Andromeda",
		});
		marker.addListener("click", () => {
			infowindow.open({
				anchor: marker,
				map,
				shouldFocus: false,
			});
		});
		infowindow.open(map, marker);

	}

}