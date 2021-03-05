const slides = document.querySelectorAll(".slider__container");
const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--prev");

const toggleClassForCollection = function (current, collection, className) {
  for (const element of collection) {
    if (element === current) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
};

let currentSlideIndex = 0;

prevButton.onclick = function () {
  const tempSlideIndex = currentSlideIndex - 1;
  currentSlideIndex = (tempSlideIndex < 0) ? slides.length - 1 : tempSlideIndex;
  const nextSlide = slides[currentSlideIndex];
  toggleClassForCollection(nextSlide, slides, "slider__container--hidden");
};

nextButton.onclick = function () {
  const tempSlideIndex = currentSlideIndex + 1;
  currentSlideIndex = (tempSlideIndex === slides.length) ? 0 : tempSlideIndex;
  const nextSlide = slides[currentSlideIndex];
  toggleClassForCollection(nextSlide, slides, "slider__container--hidden");
};
