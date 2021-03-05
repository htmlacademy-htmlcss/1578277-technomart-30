const cartLinks = document.querySelectorAll(".card-good__button--buy");
const cartPopup = document.querySelector(".modal-window--cart");
const cartCloses = cartPopup.querySelectorAll(".js--close");



for (let cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-window--show");
});

for (let cartClose of cartCloses) {
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-window--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-window--show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-window--show");
    }
  }
});
};
