

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

//აქედან იწყება ფოტო-სლაიდერი

const articlesContainer1 = document.getElementById("inner-page-container");
const rightArrow1 = document.querySelector(".right");
const leftArrow1 = document.querySelector(".left");
const linearR1 = document.querySelector(".linear-reflextion-right");
const linearL1 = document.querySelector(".linear-reflextion-left");
let scrollToRightValue1 = 0;

function scrollToLeft() {
  scrollToRightValue1 -= 450; // 501px-ით ისქროლება onmousedown-ზე
  articlesContainer1.scrollLeft = scrollToRightValue1;
  if (scrollToRightValue1 === 0) {
    //თუ მარცხნივ არაფერია
    leftArrow1.style.display = "none"; // მარცხენა ისარი ქრება
    // linearL1.style.display = "none";
    rightArrow1.style.display = "block"; // მარჯვენა ჩანს
    // linearR1.style.display = "block";
    // } else if (window.innerWidth + scrollToRightValue1 < articlesContainer1.scrollWidth) {
  } else if (articlesContainer1.clientWidth + scrollToRightValue1 < articlesContainer1.scrollWidth) {
    //თუ ბოლომდე მარჯვნივ არა გასქროლილი
    rightArrow1.style.display = "block"; //მარჯვენა ისარი ჩანს
    // linearR1.style.display = "block";
  }
}

function scrollToRight() {
  scrollToRightValue1 += 450; //501px-ით ისქროლება onmousedown-ზე

  articlesContainer1.scrollLeft = scrollToRightValue1;


  console.log(articlesContainer1.clientWidth, articlesContainer1.scrollWidth);
  

  if (articlesContainer1.clientWidth + scrollToRightValue1 >= articlesContainer1.scrollWidth) {
    //თუ ბოლომდეა მარჯვნივ გასქროლილი
    //linear.style.display = 'none';

    rightArrow1.style.display = "none"; // მარჯვენა ისარიქრება
    leftArrow1.style.display = "block"; 
  } else {
    // თუ მარცხნივ არაა ბოლომდე გასქროლილი
    leftArrow1.style.display = "block"; //მარცხენა ისარი ჩანს
    // linearL1.style.display = "block";
  }
}
