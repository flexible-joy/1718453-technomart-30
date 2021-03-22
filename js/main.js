const formBtn = document.querySelector(".address-button");
const modalForm = document.querySelector(".modal-window");
const commentClose = modalForm.querySelector(".modal-close-comment");


formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.add("active");

});

commentClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.remove("active");
});
