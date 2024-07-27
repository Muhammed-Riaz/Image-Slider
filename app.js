let currentSlide = 0;
const slides = document.querySelectorAll('.slider');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function goNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function goPrevious() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide)

