// ------------------------------------------------------------------------------------------------------------------LANGUAGES
document.querySelector(".ge-cont").addEventListener("click", () => {
  // კლიკზე ჩამოიშლება Eng და Rus
  document.getElementById("en").classList.toggle("show");
  document.getElementById("ru").classList.toggle("show");
});

window.addEventListener("click", e => {
  if (!e.target.className.includes("lang") && !e.target.className.includes("fa-solid fa-caret-down")) {
    en.classList.remove("show");
    ru.classList.remove("show");
    ge.classList.remove("show");
  }
}); // აქ გარე კლიკის დროს ვკეცავ ენებს
