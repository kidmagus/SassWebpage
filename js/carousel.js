const splide = new Splide(".splide", {
  focus: "center",
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
  rewind: true,
  perPage: 1,
  autoplay: true,
  interval: 5000,
  type: "fade",
});

splide.mount();

// attach events to custom buttons
const btnNext = document.querySelector(".splide__arrow--next");
const btnPrev = document.querySelector(".splide__arrow--prev");

btnNext.addEventListener("click", () => {
  splide.go();
});

btnPrev.addEventListener("click", () => {
  splide.go();
});

document.addEventListener("DOMContentLoaded", function () {
  splide.on("active", function (e) {
    const element = document.querySelectorAll(".content");
    element[e.index].classList.add("animate");
  });

  splide.on("inactive", function (e) {
    const element = document.querySelectorAll(".content");
    element[e.index].classList.remove("animate");
  });
});
