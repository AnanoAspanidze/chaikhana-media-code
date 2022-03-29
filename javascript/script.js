// ------------------------------------------------------------------------------------------------------------------LANGUAGES

const ge = document.querySelector(".ge-cont");
const en = document.getElementById("en");
const ru = document.getElementById("ru");

ge.addEventListener("click", () => {
  // კლიკზე ჩამოიშლება Eng და Rus
  en.classList.toggle("show");
  ru.classList.toggle("show");
});

// -----------------------------------------------------------------------------------------------------------------SEE MORE TEXT

const btn = document.querySelector(".read-more-btn");
const hidden = document.getElementById("hidden-txt");
const dots = document.getElementById("dots");
const img = document.getElementById("eu-undp");
const list = document.getElementById("hidden-list");
const deadlines = document.querySelector(".deadlines");

const readMore = () => {
  hidden.classList.toggle("show");
  btn.classList.toggle("hide-btn");
  dots.classList.toggle("hide-dots");
  img.classList.toggle("show-img");
  list.classList.toggle("show-list");
  deadlines.classList.toggle("show-deadline");
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
  scrollToRightValue -= 349; // 501px-ით ისქროლება onmousedown-ზე
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
  scrollToRightValue += 349; //501px-ით ისქროლება onmousedown-ზე

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

//------------------------------------------------------------------------------------------personal-diary popup image

// --------------------------------------------------------------------------------------------------------------SLIDER

//შესაცვლელია ისრები
//დაკლიკვაზე სურათი მთელს ეკრანზე უნდა იშლებოდეს
//შესაცვლელია სურათების ზომა

$(".slider-img").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 100,
  adaptiveHeight: true,
  centerMode: true,
  arrows: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: false,
        dots: false,
        //აქ შესაცვლელია სურათების ზომა
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: false,
        dots: false,
      },
    },
  ],
});

//აქ შევქმენი ერთიცალი სურათის მთვლელი, რომელიც მოაქვს slickCurrentSlide იდან, ანუ კონკრეტულად რომელ სლაიდზე დგას სლაიდერი
let slideCounter = 1;

//აქ ვქმნი ელემენტს, რომელიც შემდეგ ამატებს ამ ელემენტს .popup-img კლასში ( 241-ე ხაზში აკეთებს დამატებას)
const imageItem = document.createElement("img");

$(".prev-arr").on("click", function () {
  $(".slider-img").slick("slickPrev");
  slideCounter = $(".slider-img").slick("slickCurrentSlide");
  imageItem.src = document.querySelectorAll(".slider-items img")[slideCounter].getAttribute("src");
});

$(".next-arr").on("click", function () {
  $(".slider-img").slick("slickNext");
  slideCounter = $(".slider-img").slick("slickCurrentSlide"); // აქ დაწოლისას მოაქვს კონკრეტული ინდექსი იმ ელემენტის რომელზეც სლაიდერი დგას
  imageItem.src = document.querySelectorAll(".slider-items img")[slideCounter].getAttribute("src"); // ეს ჩემს შექმნილ img ელემენტის src ში ამატებს იმ ინდექსზე მდგომ სლაიდს, რომელიც ზედა კოდიდან მომაქვს
});

// image-counter

let sliderItems = document.querySelectorAll(".slider-items");
let path5 = document.getElementById("Path_5");
let path6 = document.getElementById("Path_6");

let x = 1,
  y = sliderItems.length;
const text = document.getElementById("text");
text.innerHTML = `${x}/${y}`;

path5.style.fill = "#707070";
path6.style.fill = "#004FD8";

function sliderCounter(increase) {
  if (increase) {
    if (x < y) {
      x++;
      console.log(x, y);
      path5.style.fill = "#004FD8";
    }
    if (x === y) {
      path6.style.fill = "#707070";
    }
  } else if (x > 1) {
    x--;
    if (x === 1) {
      path5.style.fill = "#707070";
    }
    if (x === y - 1) {
      path6.style.fill = "#004FD8";
    }
  }

  text.innerHTML = `${x}/${y}`;
}

//აქ სლაიდერზე ფოტოს დაჭერისას ფოტო დიდდება

document.querySelectorAll(".slider-items img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";

    document.querySelector(".popup-image").append(imageItem); // აქ აფენდ ით ვამატემ იმ ელემენტს რაც მაღლა შევქმენი 148-ე ხაზში, იმიტომ ვამატებ დაკლიკვისას რომ მერე ისრებმა დაინახონ დამატებული ელემენტი და აღიქვან
    imageItem.src = image.getAttribute("src"); // აქ ის სორსი ჩავდე ახალ შექმნილი ელემენტის სორსში რომელიც დაკლიკვიდან მომაქვს
    // $('.slider-img').slick('unslick');
    // document.querySelector('.slider-img').style.display = 'none';
    // document.querySelector('.arrows').style.display = 'none';
  };
});

document.getElementById("close").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
