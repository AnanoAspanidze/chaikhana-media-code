// ------------------------------------------------------------------------------------------------------------------LANGUAGES
document.querySelector(".ge-cont").addEventListener("click", () => {
  // კლიკზე ჩამოიშლება Eng და Rus
  document.getElementById("en").classList.toggle("show");
  document.getElementById("ru").classList.toggle("show");
});

window.addEventListener("click", e => {
  if (!e.target.className.includes("lang") && !e.target.className.includes("fa-solid fa-caret-down")) {
    document.getElementById("en").classList.remove("show");
    document.getElementById("ru").classList.remove("show");
    document.getElementById("ge").classList.remove("show");
  }
}); // აქ გარე კლიკის დროს ვკეცავ ენებს

function zoomimg(container) {
  const popupDiary = document.createElement("div");
  const popupImage = document.createElement("img");
  popupDiary.className = "popup-diary";
  popupImage.className = "diary-popup-img";
  popupDiary.append(popupImage);

  container.addEventListener("click", e => {
    if (e.target.className === "diary-img") {
      popupImage.src = e.target.src;
      popupDiary.style.display = "block";
      e.target.after(popupDiary);
    }

    popupImage.onclick = e => {
      popupDiary.remove();
    };
  });
}