const hamburger = document.querySelector('.hamburger-menu');
const headerLinks = document.getElementById('header-links');

hamburger.addEventListener('click', () => {
    headerLinks.classList.toggle('active');
});

const albums = {
    "gold_rush_interest": {
        title: "Gold Rush Interest",
        caterogy: "GBM",
        description: "Kicking off the semester with our new members!",
        count: 139,
        year: "2025_2026"
    },
    "moon_festival": {
        title: "Moon Festival",
        caterogy: "GBM",
        description: "Beneath the full moon, we celebrate connection, gratitude, and light!",
        count: 576,
        year:"2025_2026"
    },
    "maid_cafe": {
        title: "Maid Cafe",
        caterogy: "GBM",
        description: "Sweet treats served by our maids, while also watching them do a series of funny Dares!!!",
        count: 106,
        year:"2024_2025"
    },
};

const galleryContainer = document.getElementById('pinterest-gallery');
const eventTitle = document.getElementById('event-title');

if (galleryContainer && eventTitle) {
    
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    const album = albums[albumId];

    if (album) {
        document.getElementById('breadcrumb-current').textContent = album.title;
        document.getElementById('event-title').textContent = album.title;
        document.getElementById('event-desc').textContent = album.description;

        const imagesToShow = Math.floor(album.count / 4);

        let imageNumbers = [];
        for (let i = 1; i <= album.count; i++) {
            imageNumbers.push(i);
        }
    
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const randomNumbers = shuffle(imageNumbers);
        const selectedNumbers = randomNumbers.slice(0, imagesToShow);

        selectedNumbers.forEach(num => {
            const div = document.createElement('div');
            div.classList.add('pin-item');
        
            div.innerHTML = `
                <img
                    src="/gallery_page/asset/images/gallery/${album.year}/${albumId}/${num}.jpg"
                    alt="${album.title} photo ${num}"
                    loading="lazy"
                >
            `;

            galleryContainer.appendChild(div);
        });
    } else {
        document.getElementById('event-title').textContent = "Gallery not found";
    }   
}