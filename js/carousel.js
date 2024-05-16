const splide = new Splide(".splide", {
  focus: "center",
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
  rewind: true,
  type: "fade",
});

splide.mount();

// attach events to custom buttons
const btnNext = document.querySelector(".splide__arrow--next");
const btnPrev = document.querySelector(".splide__arrow--prev");
btnNext.addEventListener("click", (e) => {
  splide.go();
});

btnPrev.addEventListener("click", (e) => {
  splide.go();
});

const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  const splideContent = slide.querySelector(".content");

  if (!slide.classList.contains("is-active")) {
    splideContent.classList.remove("expanded");
  } else if (slide.classList.contains("is-active")) {
    splideContent.classList.add("expanded");
  }
  console.log(slide);

  console.log(splideContent);
});
