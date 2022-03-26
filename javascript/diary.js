// document.querySelector('.diary-img-cont img').onclick = () => {
//     document.querySelector('.popup-diary').style.display = 'block';
//   }
  
//   document.querySelector('.diary-popup-img').onclick = () => {
//     document.querySelector('.popup-diary').style.display = 'none';
//   }


document.querySelectorAll('.diary-img-cont').forEach((image, index) => {
  image.onclick = () => {
    [...document.querySelectorAll('.popup-diary')][index].style.display = 'block';
    let item = document.querySelectorAll('.popup-diary');
    for (let i = 0; i < item.length; i++) {
      i.src = image.getAttribute('src');
    }
  }
});

document.querySelectorAll('.diary-popup-img').forEach((image, index) => {
  image.onclick = () => {
    [...document.querySelectorAll('.popup-diary')][index].style.display = 'none';
  }
})
