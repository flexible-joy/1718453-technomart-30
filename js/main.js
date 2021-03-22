const formBtn = document.querySelector(".address-button");
const modalWindow = document.querySelector(".modal-window");
const commentClose = modalWindow.querySelector(".modal-close-comment");
const modalForm = modalWindow.querySelector(".modal-form");
const commentName = modalWindow.querySelector(".enter-name");
const commentMail = modalWindow.querySelector(".enter-mail");

formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("active");
  commentName.focus();

});

commentClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("active");
  modalWindow.classList.remove("error");
});


modalForm.addEventListener("submit", function (evt) {
  if (!commentName.value || !commentMail.value) {
    evt.preventDefault();
    modalWindow.classList.remove("error");
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add("error");

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("active")) {
      evt.preventDefault();
      modalWindow.classList.remove("active");
      modalWindow.classList.add("error");
    }
  }
});
