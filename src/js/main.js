import Swiper from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

document.addEventListener("DOMContentLoaded", function () {
	/*-----------------------------------------------------------------------------------------------------------------------------------------------------------
Burger
-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	const burger = document.getElementById("burger");
	const mobileMenu = document.getElementById("mobile-menu");
	const overlay = document.getElementById("overlay");
	const closeButton = document.getElementById("mobile-close");

	burger.addEventListener("click", () => {
		mobileMenu.classList.add("active");
		disableScroll();
		overlay.classList.add("active");
	});
	closeButton.addEventListener("click", () => {
		mobileMenu.classList.remove("active");
		enableScroll();
		overlay.classList.remove("active");
	});

	function disableScroll() {
		window.addEventListener("wheel", preventDefault, { passive: false });
		window.addEventListener("touchmove", preventDefault, { passive: false });
	}
	function preventDefault(e) {
		e.preventDefault();
	}
	// Разрешить прокрутку
	function enableScroll() {
		window.removeEventListener("wheel", preventDefault);
		window.removeEventListener("touchmove", preventDefault);
	}

	/*-----------------------------------------------------------------------------------------------------------------------------------------------------------
SWIPER6 SLIDER
-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

	SwiperCore.use([Navigation, Pagination]);

	const swiper = new Swiper("#applySwiper", {
		slidesPerView: 3,
		spaceBetween: 22,
		loop: true,

		navigation: {
			nextEl: "#apply_next",
			prevEl: "#apply_prev",
		},

		pagination: {
			el: "#apply_pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			520: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
});
