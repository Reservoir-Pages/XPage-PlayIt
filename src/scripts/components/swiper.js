import Swiper from "swiper";

import { Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
	modules: [Pagination],

	pagination: {
		el: ".banner__swiper .swiper-pagination",
		renderBullet: function (index, className) {
			return '<span class="' + className + " " + className + "--" + (index + 1) + '"></span>';
		},
		clickable: true,
	},
});

const bullets = document.querySelectorAll(".banner__swiper .swiper-pagination-bullet");
bullets.forEach((bullet) => {
	bullet.addEventListener("mouseover", (e) => {
		bullet.click();
	});
});
