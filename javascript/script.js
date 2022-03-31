// -----------------------------------------------------------------------------------------------------------------SEE MORE TEXT

const readMore = () => {
  document.getElementById("hidden-txt").classList.toggle("show");
  document.querySelector(".read-more-btn").classList.toggle("hide-btn");
  document.getElementById("dots").classList.toggle("hide-dots");
  document.getElementById("eu-undp").classList.toggle("show-img");
  document.getElementById("hidden-list").classList.toggle("show-list");
  document.querySelector(".deadlines").classList.toggle("show-deadline");
};

// ----------------------------------------------------------------------------------------------------------------SCROLL ARTICLES

//აქ ვთიშავ ჰორიზონტალურ სქროლს მაუსით

const articlesContainer = document.getElementById("articles-container");

const enableMouseWheel = disabled => (articlesContainer.onmousewheel = () => disabled); //mausis scrollis gachereba.

window.addEventListener("keydown", e => {
  e.charCode === 0 && enableMouseWheel(false);
});
window.addEventListener("keyup", () => {
  enableMouseWheel(true);
});

//აქედან იწყება სქროლი

const rightArrow = document.querySelector(".R");
const leftArrow = document.querySelector(".L");
const linearR = document.querySelector(".linear-reflextion-right");
const linearL = document.querySelector(".linear-reflextion-left");
let scrollToRightValue = 0;

function scrollToLeft() {
  scrollToRightValue -= 350; // 501px-ით ისქროლება onmousedown-ზე
  articlesContainer.scrollLeft = scrollToRightValue;
  if (scrollToRightValue === 0) {
    //თუ მარცხნივ არაფერია
    leftArrow.style.display = "none"; // მარცხენა ისარი ქრება
    linearL.style.display = "none";
    rightArrow.style.display = "block"; // მარჯვენა ჩანს
    linearR.style.display = "block";
  } else if (window.innerWidth + scrollToRightValue < articlesContainer.scrollWidth) {
    //თუ ბოლომდე მარჯვნივ არა გასქროლილი
    rightArrow.style.display = "block"; //მარჯვენა ისარი ჩანს
    linearR.style.display = "block";
  }
}

function scrollToRight() {
  scrollToRightValue += 350; //501px-ით ისქროლება onmousedown-ზე

  articlesContainer.scrollLeft = scrollToRightValue;

  if (window.innerWidth + scrollToRightValue >= articlesContainer.scrollWidth) {
    //თუ ბოლომდეა მარჯვნივ გასქროლილი
    //linear.style.display = 'none';
    rightArrow.style.display = "none"; // მარჯვენა ისარიქრება
    linearR.style.display = "none";
  } else {
    // თუ მარცხნივ არაა ბოლომდე გასქროლილი
    leftArrow.style.display = "block"; //მარცხენა ისარი ჩანს
    linearL.style.display = "block";
  }
}

//burger-menu-popup

function mobileMenu() {
  document.querySelector(".mobile-menu").style.display = "block";
  document.querySelector(".logo-burger").style.display = "block";
  document.querySelector(".xmark").style.display = "block";
  document.querySelector(".line").style.display = "block";
  document.querySelector(".mobile-menu-cont").style.display = "block";
  document.querySelector(".logo").style.display = "none";
}

function removeMenu() {
  document.querySelector(".mobile-menu").style.display = "none";
  document.querySelector(".logo-burger").style.display = "none";
  document.querySelector(".xmark").style.display = "none";
  document.querySelector(".line").style.display = "none";
  document.querySelector(".mobile-menu-cont").style.display = "none";
}

//ფოტო-სლაიდერები
