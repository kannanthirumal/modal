const OpenModelBtn = document.getElementById("open-button");
const modal = document.getElementById("basic-modal");
const closeModalBtn = document.getElementById("close-button");

OpenModelBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickedOutsideModal);

function openModal(e) {
  modal.style.display = "block";
}
function closeModal(e) {
  modal.style.display = "none";
}
function clickedOutsideModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
