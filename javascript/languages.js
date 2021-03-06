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


//ამ კოდით სიტყვაზე დაჭერისას ამოდის popup note და ჰაერში კლიკზე იკეცება

[...document.querySelectorAll(".note-word")].forEach(eachword => {
  eachword.addEventListener(
    "click",
    () => {
      eachword.querySelector(".note").style.display = "block";
      eachword.querySelector(".noted-x").style.display = "inline";
    },
    true
  );
  eachword.querySelector(".noted-x").addEventListener("click", () => {
    eachword.querySelector(".note").style.display = "none";
    eachword.querySelector(".noted-x").style.display = "none";
  });

  window.addEventListener(
    "click",
    e => {
      eachword.querySelector(".note").style.display = "none";
      eachword.querySelector(".noted-x").style.display = "none";
    },
    true
  );
});
