document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector('.hamburger-menu');
    const headerLinks = document.getElementById('header-links');

    if (hamburger && headerLinks) {
        hamburger.addEventListener('click', () => {
            headerLinks.classList.toggle('active');
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const searchIndex = [
        {
            title: "About Us",
            url: "../vsa_page/index.html",
            keywords: "home vsa welcome main about mission history culture"
        },
        {
            title: "Gallery",
            url: "../gallery_page/index.html",
            keywords: "photos pictures images gallery memories albums"
        },
        {
            title: "E-Board",
            url: "../eboard_page/index.html",
            keywords: "leaders team president eboard executive media event intern"
        },
        {
            title: "Sponsors",
            url: "../sponsor_page/index.html",
            keywords: "sponsors partners business donations support community"
        }
    ];

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (!query) {
                searchResults.classList.remove('show');
                return;
            }

            const results = searchIndex.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.keywords.includes(query)
            );

            if (results.length) {
                results.forEach(result => {
                    const link = document.createElement('a');
                    link.href = result.url;
                    link.classList.add('search-item');
                    link.innerHTML = `
                        ${result.title}
                        <small>${result.url}</small>
                    `;
                    searchResults.appendChild(link);
                });
            } else {
                searchResults.innerHTML =
                    `<div class="no-results">No results found for "${query}"</div>`;
            }

            searchResults.classList.add('show');
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) &&
                !searchResults.contains(e.target)) {
                searchResults.classList.remove('show');
            }
        });
    }

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

});
