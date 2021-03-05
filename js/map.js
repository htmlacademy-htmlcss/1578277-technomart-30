const mapLink = document.querySelector(".contacts__map-link");
const mapPopup = document.querySelector(".modal-window--map");
const mapClose = mapPopup.querySelector(".modal-window__close");

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
