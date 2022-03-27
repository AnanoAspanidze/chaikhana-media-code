

const innerCont = document.getElementById("inner-page-container");
const popupDiary = document.createElement("div");
const popupImage = document.createElement("img");
popupDiary.className = "popup-diary";
popupImage.className = "diary-popup-img";
popupDiary.append(popupImage);

innerCont.addEventListener("click", e => {
  if (e.target.className === "diary-img") {
    popupImage.src = e.target.src;
    popupDiary.style.display = "block";
    e.target.after(popupDiary);
  }

  popupImage.onclick = e => {
    popupDiary.remove();

  };
});

/*innerCont.addEventListener("keydown", function (t) {
  console.log(t.key);
  if (t.key === "Escape") {
    popupDiary.remove();
  }
});*/

