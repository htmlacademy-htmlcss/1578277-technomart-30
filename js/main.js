const slides = document.querySelectorAll(".slider__container"),
      prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      dots = document.querySelectorAll(".slider__dot");

const cartLinks = document.querySelectorAll(".card-good__button--buy"),
      cartPopup = document.querySelector(".modal-window--cart"),
      cartCloses = cartPopup.querySelectorAll(".js--close");

const mapLink = document.querySelector(".contacts__map-link"),
      mapPopup = document.querySelector(".modal-window--map"),
      mapClose = mapPopup.querySelector(".modal-window__close");

const feedback = document.querySelector(".contacts__btn"),
      modalFeedback = document.querySelector(".modal-window--feedback"),
      modalClose = modalFeedback.querySelector(".modal-window__close"),
      feedbackForm = modalFeedback.querySelector(".feedback"),
      feedbackName = modalFeedback.querySelector(".feedback__item--name"),
      feedbackEmail = modalFeedback.querySelector(".feedback__item--email");

const menuDel = document.querySelector(".service-menu__link--del"),
      descDel = document.querySelector(".service__desc--delivery"),
      menuGuar = document.querySelector(".service-menu__link--gt"),
      descGuar = document.querySelector(".service__desc--guarantee"),
      menuCred = document.querySelector(".service-menu__link--cred"),
      descCred = document.querySelector(".service__desc--credit");

/*slider*/

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

/*cart*/

for (let cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-window--show");
 });
}

for (let cartClose of cartCloses) {
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-window--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.code === '27') {
    if (cartPopup.classList.contains("modal-window--show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-window--show");
    }
  }
});

/* map */

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-window--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-window--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-window--show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-window--show");
    }
  }
});

/*feedback*/

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-window--show");

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-window--show");
  modalFeedback.classList.remove("modal-window--error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-window-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-window--error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("user-name", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-window--show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-window--show");
      modalFeedback.classList.remove("modal-window--error");
    }
  }
});

/* service */

menuDel.addEventListener('click', function (evt) {
    evt.preventDefault();
    descDel.classList.add("service__desc--active");
    descGuar.classList.remove("service__desc--active");
    descCred.classList.remove("service__desc--active");
 });

menuGuar.addEventListener('click', function (evt) {
    evt.preventDefault();
    descGuar.classList.add("service__desc--active");
    descDel.classList.remove("service__desc--active");
    descCred.classList.remove("service__desc--active");
 });

menuCred.addEventListener('click', function (evt) {
    evt.preventDefault();
    descCred.classList.add("service__desc--active");
    descDel.classList.remove("service__desc--active");
    descGuar.classList.remove("service__desc--active");
 });
