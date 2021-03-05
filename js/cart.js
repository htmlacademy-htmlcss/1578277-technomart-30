const cartLink = document.querySelectorAll(".card-good__button--buy");
const cartPopup = document.querySelector(".modal-window--cart");
const cartClose = cartPopup.querySelector(".modal-window__close");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-window--show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-window--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-window--show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-window--show");
    }
  }
});
