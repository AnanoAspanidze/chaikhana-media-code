// ----------------------------------------------------------------------------------------------------------------------------------------------LANGUAGES

const ge = document.querySelector('.ge-cont');
const en = document.getElementById('en');
const ru = document.getElementById('ru');

ge.addEventListener('click', () =>  {  // კლიკზე ჩამოიშლება Eng და Rus
    en.classList.toggle('show');
    ru.classList.toggle('show');
})









// --------------------------------------------------------------------------------------------------------------------------------------------SEE MORE TEXT

const btn = document.querySelector('.read-more-btn');
const hidden = document.getElementById('hidden-txt');
const dots = document.getElementById('dots');
const img = document.getElementById('eu-undp');
const list = document.getElementById('hidden-list');
const deadlines = document.querySelector('.deadlines');

btn.addEventListener('click', () => {
    hidden.classList.toggle('show');
    btn.classList.toggle ('hide-btn');
    dots.classList.toggle('hide-dots');
    img.classList.toggle('show-img')
    list.classList.toggle('show-list');
    deadlines.classList.toggle('show-deadline');
});


// --------------------------------------------------------------------------------------------------------------------------------------------SCROLL ARTICLES


//აქ ვთიშავ ჰორიზონტალურ სქროლს მაუსით

const articlesContainer = document.getElementById('articles-container');

const enableMouseWheel = (disabled) => articlesContainer.onmousewheel = () => disabled; //mausis scrollis gachereba.

window.addEventListener('keydown', (e) => {
    e.charCode === 0 && enableMouseWheel(false)
});
window.addEventListener('keyup', () => {
    enableMouseWheel(true);
});


//აქედან იწყება სქროლი

const rightArrow = document.querySelector('.R');
const leftArrow = document.querySelector('.L');

if(articlesContainer.scrollWidth > window.innerWidth + 100) { //მარჯვენა ისრის გამოჩენა
    rightArrow.style.display = 'block';
}

function scrollToLeft() { 
    articlesContainer.scrollLeft -= 510; // 501px-ით ისქროლება onmousedown-ზე
    if(articlesContainer.scrollLeft === 0) { //თუ მარცხნივ არაფერია
        leftArrow.style.display = 'none'; // მარცხენა ისარი ქრება
        rightArrow.style.display = 'block'; // მარჯვენა ჩანს
    }
    else if (window.innerWidth + articlesContainer.scrollLeft < articlesContainer.scrollWidth) { //თუ ბოლომდე მარჯვნივ არა გასქროლილი
        rightArrow.style.display = 'block'; //მარჯვენა ისარი ჩანს
    }
}

function scrollToRight() {
    articlesContainer.scrollLeft += 510; //501px-ით ისქროლება onmousedown-ზე
    if (window.innerWidth + articlesContainer.scrollLeft >= articlesContainer.scrollWidth) { //თუ ბოლომდეა მარჯვნივ გასქროლილი
        rightArrow.style.display = 'none'; // მარჯვენა ისარიქრება
    }
    else if(articlesContainer.scrollLeft > 0) { // თუ მარცხნივ არაა ბოლომდე გასქროლილი
        leftArrow.style.display = 'block' //მარცხენა ისარი ჩანს
    }

}

