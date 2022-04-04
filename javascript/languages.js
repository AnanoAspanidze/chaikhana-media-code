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

[...document.querySelectorAll(".note-word")].forEach(eachword => {
  eachword.addEventListener("click", () => {
    eachword.querySelector(".note").style.display = "block";
    eachword.querySelector(".noted-x").style.display = "inline";
  });
  eachword.querySelector(".noted-x").addEventListener("click", () => {
      eachword.querySelector(".note").remove();
      eachword.querySelector(".noted-x").remove();
  });
});
