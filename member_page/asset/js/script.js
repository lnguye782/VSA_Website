//merch slider
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".slider-dots");

if (slides && images.length && prevBtn && nextBtn && dotsContainer) {
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

    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    startAutoSlide();
}