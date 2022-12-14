var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

});

const menu = document.querySelector(".bars");
const close = document.querySelector(".times");
const nav = document.querySelector("nav");
const body = document.querySelector("body");


menu.addEventListener("click", () => {
  nav.classList.add("active");
  body.style.overflow = "hidden";
})

close.addEventListener("click", () => {
  nav.classList.remove("active");
  body.style.overflow = "auto";
})