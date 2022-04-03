function mobileMenu() {
	document.querySelector('.mobile-menu').style.display = 'block'
	document.querySelector('.logo-burger').style.display = 'block'
	document.querySelector('.xmark').style.display = 'block'
	document.querySelector('.line').style.display = 'block'
	document.querySelector('.mobile-menu-cont').style.display = 'block'
	document.querySelector('.logo').style.display = 'none'
}

function removeMenu() {
	document.querySelector('.mobile-menu').style.display = 'none'
	document.querySelector('.logo-burger').style.display = 'none'
	document.querySelector('.xmark').style.display = 'none'
	document.querySelector('.line').style.display = 'none'
	document.querySelector('.mobile-menu-cont').style.display = 'none'
	document.querySelector('.logo').style.display = 'block';
}

//აქედან იწყება ფოტო-სლაიდერი

[...document.querySelectorAll('.full-slider-cont')].forEach((eachSlider) => {

  let firstChildElement = eachSlider.querySelector(".something") ?? eachSlider.querySelector(".diary-img");
  firstChildElement.classList.add("active-diary-img");

	const articlesContainer1 = eachSlider.querySelector('.inner-page-container')
	const rightArrow1 = eachSlider.querySelector('.right')
	const leftArrow1 = eachSlider.querySelector('.left')
	const linearR1 = eachSlider.querySelector('.image-linear-right')
	const linearL1 = eachSlider.querySelector('.image-linear-left')
	// const options = { scrollToRightValue1:0, articlesContainer1, leftArrow1, rightArrow1 };
	let scrollToRightValue1 = 0
	leftArrow1.addEventListener('click', () => {
		const currentActiveDiaryImg =
			eachSlider.querySelector('.active-diary-img')
    const leftActiveSibling = currentActiveDiaryImg.previousElementSibling
		const moveLeftValue = leftActiveSibling.offsetWidth + 20

		scrollToRightValue1 -= moveLeftValue // 501px-ით ისქროლება onmousedown-ზე
		articlesContainer1.scrollLeft = scrollToRightValue1
		if (scrollToRightValue1 === 0) {
			//თუ მარცხნივ არაფერია
			leftArrow1.style.display = 'none' // მარცხენა ისარი ქრება
			linearL1.style.display = 'none'
			rightArrow1.style.display = 'block' // მარჯვენა ჩანს
			linearR1.style.display = 'block'
			// } else if (window.innerWidth + scrollToRightValue1 < articlesContainer1.scrollWidth) {
		} else if (
			articlesContainer1.clientWidth + scrollToRightValue1 <
			articlesContainer1.scrollWidth
		) {
			//თუ ბოლომდე მარჯვნივ არა გასქროლილი
			rightArrow1.style.display = 'block' //მარჯვენა ისარი ჩანს
			linearR1.style.display = 'block'
		}

    leftActiveSibling.classList.add('active-diary-img')
    currentActiveDiaryImg.classList.remove('active-diary-img')
	});


	rightArrow1.addEventListener('click', () => {

		leftArrow1.style.display = "block"; //მარცხენა ისარი ჩანს
   		linearL1.style.display = "block";

		const currentActiveDiaryImg =
			eachSlider.querySelector('.active-diary-img')
		const moveRightValue = currentActiveDiaryImg.offsetWidth + 20
    	console.log(moveRightValue, currentActiveDiaryImg);
		scrollToRightValue1 += moveRightValue //501px-ით ისქროლება onmousedown-ზე
		articlesContainer1.scrollLeft = scrollToRightValue1
		if (
			articlesContainer1.clientWidth + scrollToRightValue1 >=
			articlesContainer1.scrollWidth
		) {
			//თუ ბოლომდეა მარჯვნივ გასქროლილი
			linearR1.style.display = 'none'
			rightArrow1.style.display = 'none' // მარჯვენა ისარიქრება
			leftArrow1.style.display = 'block'
		} else {
			// თუ მარცხნივ არაა ბოლომდე გასქროლილი
			leftArrow1.style.display = 'block' //მარცხენა ისარი ჩანს
			linearL1.style.display = 'block'
		}

		currentActiveDiaryImg.classList.remove('active-diary-img')
		currentActiveDiaryImg.nextElementSibling.classList.add(
			'active-diary-img'
		)
	})
})
