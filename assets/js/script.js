// LOADER

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded")
});


// NAV_BAR

const menu_bar = document.querySelector(".menu-bar")
const overlay = document.querySelector(".overlay")
const close_btn = document.querySelector(".close-btn")
const nav_slider = document.querySelector(".nav-slider")
const background = document.querySelector(".background")

menu_bar.addEventListener("click", function(){
    document.body.classList.add("nav-active");
    overlay.classList.add("open")
    nav_slider.classList.add("open")
});

close_btn.addEventListener("click", function(){
    document.body.classList.remove("nav-active");
    overlay.classList.remove("open")
    nav_slider.classList.remove("open")
});


// NAVBAR

const navBar = document.querySelector(".nav-bar");
const topbar = document.querySelector(".topbar")

let lastScrollPos = 0;

const hideNav = function () {
    const isScroll = lastScrollPos < window.scrollY;
    if (isScroll){
        navBar.classList.add("hide")
    }else{
        navBar.classList.remove("hide")
    }
    lastScrollPos = window.scrollY
};

window.addEventListener ("scroll", function(){
    if (window.scrollY >= 50) {
        topbar.classList.add("act");
        navBar.classList.add("act");
        hideNav();
    }else{
        topbar.classList.remove("act");
        navBar.classList.remove("act");
    }
});

// HERO SLIDER

const sliders = document.querySelectorAll(".slider")
const nextbtn = document.querySelector(".next-btn")
const prevbtn = document.querySelector(".prev-btn")
const viewbtn = document.querySelector(".btn-secondary")

let currentSlidePos = 0;
let lastActiveSliders = sliders[0]; 

const updateSliderPos = function () {
    lastActiveSliders.classList.remove("active")
    sliders[currentSlidePos].classList.add("active")
    lastActiveSliders = sliders[currentSlidePos]
}

const nextSlide = function () {
    if (currentSlidePos >= sliders.length-1) {
        currentSlidePos = 0
    } else {
        currentSlidePos++
    }
    updateSliderPos()
}

nextbtn.addEventListener("click", nextSlide);

const prevSlide = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = sliders.length -1
    } else {
        currentSlidePos--
    }
    updateSliderPos()
}

prevbtn.addEventListener("click", prevSlide);

// Auto Slide
let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(nextSlide, 7000);
}

const stopSlide = function () {
    clearInterval(autoSlideInterval)
  }

nextbtn.addEventListener( "mouseover", stopSlide);
nextbtn.addEventListener( "mouseout", autoSlide);

prevbtn.addEventListener( "mouseover", stopSlide);
prevbtn.addEventListener( "mouseout", autoSlide);

viewbtn.addEventListener( "mouseover", stopSlide);
viewbtn.addEventListener( "mouseout", autoSlide);

window.addEventListener("load", autoSlide);

