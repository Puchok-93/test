const mainNavigation = document.querySelector('.main-navigation');
const menuList = mainNavigation.querySelector('ul');
const menuButton = document.querySelector('.main-navigation__toggle');

function openMenu() {
    if (mainNavigation.classList.contains('main-navigation--closed')) {
        mainNavigation.classList.remove('main-navigation--closed');
        mainNavigation.classList.add('main-navigation__toggle--opened');
    } else {
        mainNavigation.classList.add('main-navigation--closed');
        mainNavigation.classList.remove('main-navigation__toggle--opened');
    }
}

menuButton.addEventListener('click', openMenu);

/* Slider */ 

const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider-list');
const slides =  document.querySelectorAll('.slider-list__slide');
const nextSlideBtn = document.querySelector('.navigation-slider__button--next-slide');
const prevSlideBtn = document.querySelector('.navigation-slider__button--prev-slide');

let widthSlide = window.getComputedStyle(slider).width;
let slideIndex = 1;
let offset = 0;

sliderList.style.width = 100 * slides.length + '%';


function getWidthSlide() {
    widthSlide = window.getComputedStyle(slider).width;
    slides.forEach(slide => {
        slide.style.width = widthSlide;
    });
}

getWidthSlide();


function showNextSlide() {
    if (offset == +widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += +widthSlide.slice(0, widthSlide.length - 2);
    }

    sliderList.style.transform = `translateX(-${offset}px)`;
}

function showPrevSlide() {
    if (offset == 0) {
        offset = +widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1);
    } else {
        offset -= +widthSlide.slice(0, widthSlide.length - 2);
    }

    sliderList.style.transform = `translateX(-${offset}px)`;
}

window.addEventListener('resize', getWidthSlide);
nextSlideBtn.addEventListener('click', showNextSlide);  
prevSlideBtn.addEventListener('click', showPrevSlide);
