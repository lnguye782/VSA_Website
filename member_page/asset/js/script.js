// Select elements
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-dots");
const sliderBg = document.querySelector(".slider-bg"); // blurred side bg

let currentIndex = 0;
let interval;

// Create dots
images.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

// Update slider
function updateSlider() {
    // Move slides
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update blurred side background
    sliderBg.style.backgroundImage = `url('${images[currentIndex].src}')`;

    // Update dots
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

// Next/Prev functions
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// Auto slide
function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

// Button listeners
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// Initialize
updateSlider();
startAutoSlide();

// LIGHTBOX ELEMENTS
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

// Thumbnail click → open lightbox
document.querySelectorAll(".thumbnails img").forEach(thumb => {
    thumb.addEventListener("click", () => {
        lightboxImg.src = thumb.src;
        lightbox.classList.add("active");
        clearInterval(interval); // pause slider
    });
});

// Close when clicking X
lightboxClose.addEventListener("click", closeLightbox);

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove("active");
    startAutoSlide(); // resume slider
}

