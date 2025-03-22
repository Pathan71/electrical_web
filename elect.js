// sticky Nav-bar
window.addEventListener('scroll', function() {
    let nav = document.getElementById('navbar')

    if(window.pageYOffset > 43) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky')
    }
})

// menu bar
    const menuOpenButton = document.querySelector('#menu-open-button');
    const menuCloseButton = document.querySelector('#menu-close-button');

    menuOpenButton.addEventListener("click", () => {
        //Toggle mobile menu visibility
        document.body.classList.toggle("show-mobile-menu") 
    })

    //Close menu when the closs button is clicked
    menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// Image slider
let index = 0;
let slides = document.getElementsByClassName('slider');
let totalSlide = slides.length;

function moveSlide(step) {
    index += step;
    if (index >= totalSlide) {
        index = 0;
    }
    if (index < 0) {
        index = totalSlide - 1;
    }
    // Move slides
    document.querySelector(".slider-wrapper").style.transform = `translateX(-${index * 100}%)`;

    // Hide all captions
    let captions = document.querySelectorAll(".caption");
    captions.forEach(caption => caption.style.display = "none");

    // Show caption for the active slide
    slides[index].querySelector(".caption").style.display = "block";
}

// Ensure only the first caption is shown on page load
document.addEventListener("DOMContentLoaded", () => {
    let captions = document.querySelectorAll(".caption");
    captions.forEach(caption => caption.style.display = "none");
    slides[0].querySelector(".caption").style.display = "block";
});

// Slider Move with specific time Intervel
function autoSlide() {
    moveSlide(1)
}
setInterval(autoSlide, 3000)

// Caption Animation
document.addEventListener('DOMContentLoaded', function() {
    let text = document.querySelector('.caption')
    let image = document.querySelector('.slider img')

    setTimeout(() => {
        image.style.opacity = '1'
    }, 700);
})

// Letter Animation 
// let anim = new Typed('#heading',{
//     strings: ["RESIDENTIAL SERVICES"],
//     typeSpeed: 80,
//     backSpeed: 40,
//     backDelay: 1000,
//     loop: true
// })

// Paragragph slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    //   dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});