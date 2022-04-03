
const zoomerImg = container => {
  const popupDiary = document.createElement("div");
  const popupImage = document.createElement("img");
  popupDiary.className = "popup-diary";
  popupImage.className = "diary-popup-img";
  popupDiary.append(popupImage);

  container.addEventListener("click", e => {
    if (e.target.classList.contains("diary-img")) {
      popupImage.src = e.target.src;
      popupDiary.style.display = "block";
      e.target.after(popupDiary);
    }

    popupDiary.onclick = e => {
      popupDiary.remove();
    };
  });
};

[...document.querySelectorAll(".inner-page-container")].forEach(eachImgContainer => {
  zoomerImg(eachImgContainer);
});

window.addEventListener("keydown", function (t) {
  if (t.key === "Escape") {
    const popupDiary = document.querySelector(".popup-diary");

    if (!!popupDiary) {
      popupDiary.remove();
    }
  }
});
