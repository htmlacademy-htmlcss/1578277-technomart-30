const slides = document.querySelectorAll(".slider__container"),
      prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      dots = document.querySelectorAll(".slider__dot");

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

prev.onclick = function () {
  const tempSlideIndex = currentSlideIndex - 1;
  currentSlideIndex = (tempSlideIndex < 0) ? slides.length - 1 : tempSlideIndex;
  const nextSlide = slides[currentSlideIndex];
  toggleClassForCollection(nextSlide, slides, "slider__container--active");
};

next.onclick = function () {
  const tempSlideIndex = currentSlideIndex + 1;
  currentSlideIndex = (tempSlideIndex === slides.length) ? 0 : tempSlideIndex;
  const nextSlide = slides[currentSlideIndex];
  toggleClassForCollection(nextSlide, slides, "slider__container--active");
};

