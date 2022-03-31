$(".slider-img").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 100,
  // adaptiveHeight: true,
  centerMode: true,
  arrows: false,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 768,
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
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: false,
        dots: false,
      },
    },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     infinite: false,
    //     dots: false,
    //   },
    // },
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
