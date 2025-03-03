const menuBtn = document.querySelector(".header .header__menu");
const menu = document.querySelector(".header .nav");

if (menuBtn && menu) {
	menuBtn.addEventListener("click", (e) => {
		document.body.classList.toggle("scroll-stop");
		menu.classList.toggle("is-active");
	});
}
