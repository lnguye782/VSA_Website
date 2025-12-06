const hamburger = document.querySelector('.hamburger-menu');
const headerLinks = document.getElementById('header-links');

hamburger.addEventListener('click', () => {
    headerLinks.classList.toggle('active');
});

const albums = {
    "2025_interest": {
        title: "Gold Rush + Interest",
        caterogy: "GBM",
        description: "Kicking off the semester with our new members!",
        count: 139,
        year: "2025_2026"
    },
    
    "2025_moon_festival": {
        title: "Moon Festival",
        caterogy: "GBM",
        description: "Beneath the full moon, we celebrate connection, gratitude, and light!",
        count: 576,
        year:"2025_2026"
    },

    "2024_viet_night": {
        title: "Lanterns of Legacy",
        caterogy: "VietNight",
        description: "Enjoy a spectacular night and magnificent performances, food, raffle prizes, Vietnamese culture, and much more!!!",
        count: 397,
        year: "2024_2025"
    },

    "2024_interest": {
        title: "Interest",
        caterogy: "GBM",
        description: "A little bit more about our WONDERFUL Eboard and our AMAZING organization!",
        count: 152,
        year: "2024_2025"
    },

    "2024_night_market": {
        title: "Night Market",
        caterogy: "GBM",
        description: "A BIG shoutout to all of the vendors to help make it possible, especially NC Nails Esthetics Academy!",
        count: 98,
        year: "2024_2025"
    },

    "2024_maid_cafe": {
        title: "Maid Cafe",
        caterogy: "GBM",
        description: "Sweet treats served by our maids, while also watching them do a series of funny Dares!",
        count: 106,
        year:"2024_2025"
    },

    "2024_tet": {
        title: "New Year",
        caterogy: "GBM",
        description: "Feelin’ lucky with red envelopes and big smiles with good luck come our way !! Vsa wants to wish you a Happy Lunar New Year with good fortune and good vibes !!!",
        count: 559,
        year:"2024_2025"
    },

    "2024_valentine": {
        title: "Valentine",
        caterogy: "GBM",
        description: "Bring your friends or that special someone to play our fun compatibility games and test your relationship!!",
        count: 201,
        year:"2024_2025"
    },

    "2024_che_and_paint": {
        title: "Che and Paint",
        caterogy: "GBM",
        description: "Enjoying a Vietnamese dessert/snack called chè thái and painting canvases, fans, and lanterns!!!",
        count: 307,
        year:"2024_2025"
    },

    "2023_viet_night": {
        title: "Yêu Lành",
        caterogy: "VietNight",
        description: "An amazing night filled with amazing people, food, performances, and more!!!",
        count: 0,
        year:"2023_2024"
    },

    "2023_interest": {
        title: "Interest",
        caterogy: "GBM",
        description: "It’s that time for the eboard members & members to meet each other. Giveaways, snacks, games, and lots more!",
        count: 465,
        year:"2023_2024"
    },

    "2023_casino_night": {
        title: "Casino Night",
        caterogy: "GBM",
        description: "Join VSA for some EXCITING fun at our Casino Night gbm!! Learn a variety of traditional Vietnamese games like tiến lên, bầu cua tôm cá, and much more!",
        count: 468,
        year:"2023_2024"
    },

    "2023_moon_festival": {
        title: "Moon Festival",
        caterogy: "GBM",
        description: "A special performance featuring Lion Dancers, games with special prizes, and Moon Cake tasting!",
        count: 442,
        year:"2023_2024"
    },

    "2023_vsa_by_night": {
        title: "VSA By Night",
        caterogy: "GBM",
        description: "An amazing time listening to all of the talented performers. Shout out to all of the people who stepped up and sang their heart out!",
        count: 722,
        year:"2023_2024"
    },

    "2023_xin_chao_vietnam": {
        title: "Xin Chào Vietnam",
        caterogy: "GBM",
        description: "Come learn about Vietnamese culture with dessert, games, dancing, fashion, and more!",
        count: 113,
        year:"2023_2024"
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

const searchIndex = [
    {
        title: "About Us", 
        url: "/vsa_page/index.html", 
        keywords: "home vsa welcome main about mission history culture" 
    },

    { 
        title: "Gallery", 
        url: "/gallery_page/index.html", 
        keywords: "photos pictures images gallery memories albums" 
    },

    { 
        title: "E-Board", 
        url: "/eboard_page/index.html", 
        keywords: "leaders team president eboard executive media event intern" 
    },

    { 
        title: "Sponsors", 
        url: "/sponsor_page/index.html", 
        keywords: "sponsors partners business donations support community" 
    },
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        searchResults.innerHTML = '';

        if (query.length === 0) {
            searchResults.classList.remove('show');
            return;
        }

        const results = searchIndex.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.keywords.includes(query)
        );

        if (results.length > 0) {
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
            searchResults.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
        }

        searchResults.classList.add('show');
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });
}