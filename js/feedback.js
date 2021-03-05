const Feedback = document.querySelector(".contacts__btn");
const ModalFeedback = document.querySelector(".modal-window--feedback");
const ModalClose = ModalFeedback.querySelector(".modal-window__close");
const FeedbackForm = ModalFeedback.querySelector(".feedback");
const FeedbackName = ModalFeedback.querySelector(".feedback__item--name");
const FeedbackEmail = ModalFeedback.querySelector(".feedback__item--email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
} catch (err) {
  isStorageSupport = false;
}

Feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  ModalFeedback.classList.add("modal-window--show");

  if (storage) {
    loginLogin.value = storage;
    FeedbackEmail.focus();
  } else {
    FeedbackName.focus();
  }
});

ModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  ModalFeedback.classList.remove("modal-window--show");
  ModalFeedback.classList.remove("modal-window--error");
});

FeedbackForm.addEventListener("submit", function (evt) {
  if (!FeedbackName.value || !FeedbackEmail.value) {
    evt.preventDefault();
    ModalFeedback.classList.remove("modal-window-error");
    ModalFeedback.offsetWidth = ModalFeedback.offsetWidth;
    ModalFeedback.classList.add("modal-window--error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("user-name", FeedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (ModalFeedback.classList.contains("modal-window--show")) {
      evt.preventDefault();
      ModalFeedback.classList.remove("modal-window--show");
      ModalFeedback.classList.remove("modal-window--error");
    }
  }
});
