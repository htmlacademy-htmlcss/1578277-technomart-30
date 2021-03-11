const feedback = document.querySelector(".contacts__btn"),
      modalFeedback = document.querySelector(".modal-window--feedback"),
      modalClose = modalFeedback.querySelector(".modal-window__close"),
      feedbackForm = modalFeedback.querySelector(".feedback"),
      feedbackName = modalFeedback.querySelector(".feedback__item--name"),
      feedbackEmail = modalFeedback.querySelector(".feedback__item--email");

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
