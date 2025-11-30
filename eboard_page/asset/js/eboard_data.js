const boardData = {
    "2025-2026": {
        core: [
            {
                name: "Nhi Nguyen",
                role: "Co-President",
                image: "asset/images/eboard/2025_2026/nhi.jpg",
                intro: "Nhi is cute"
            },

            {
                name: "Lee Luu",
                role: "Co-President",
                image: "asset/images/eboard/2025_2026/lee.jpg",
                intro: "Lee is groovy"
            },

            {
                name: "Katie Huynh",
                role: "Internal Vice President",
                image: "asset/images/eboard/2025_2026/katie.jpg",
                intro: "Katie is goofy"
            },

            {
                name: "Cynthia Ngo",
                role: "External Vice President",
                image: "asset/images/eboard/2025_2026/cynthia.jpg",
                intro: "Cynthia is cheerful"
            },

            {
                name: "Khang Pham",
                role: "Secretary",
                image: "asset/images/eboard/2025_2026/khang.jpg",
                intro: "Khang is brave"
            },

            {
                name: "Angela Tran",
                role: "Tresurer",
                image: "asset/images/eboard/2025_2026/angela.jpg",
                intro: "Angela is ABG"
            },
        ],

        event: [
            {
                name: "Christina Nguyen",
                role: "Culture Chair",
                image: "asset/images/eboard/2025_2026/christina.jpg",
            },

            {
                name: "Eugene Nguyen",
                role: "VietNight Coordinator",
                image: "asset/images/eboard/2025_2026/eugene.jpg",
            },
        ],

        media: [
            {
                name: "Megan Dinh",
                role: "Co-Design Chair",
                image: "asset/images/eboard/2025_2026/megan.jpg",
            },

            {
                name: "Anne Pham",
                role: "Co-Design Chair",
                image: "asset/images/eboard/2025_2026/anne.jpg",
            },

            {
                name: "Nicole Nguyen",
                role: "Marketing Chair",
                image: "asset/images/eboard/2025_2026/nicole.jpg",
            },

            {
                name: "Chi Truong",
                role: "Photographer",
                image: "asset/images/eboard/2025_2026/chi.jpg",
            },

            {
                name: "Kevin Le",
                role: "Videographer",
                image: "asset/images/eboard/2025_2026/kevin.jpg",
            },
        ],
    },
    
    "2024-2025": {
        core: [
            {
                name: "Dylan Nguyen",
                role: "President",
                image: "asset/images/eboard/2024_2025/dylanng.jpg"
            },

            {
                name: "Dylan Truong",
                role: "Internal Vice President",
                image: "asset/images/eboard/2024_2025/dylantr.jpg"
            },

            {
                name: "Anh Nguyen",
                role: "External Vice President",
                image: "asset/images/eboard/2024_2025/anh.jpg"
            },

            {
                name: "Jon Sanchez",
                role: "Secretary",
                image: "asset/images/eboard/2024_2025/jon.jpg",
            },

            {
                name: "Steven Lang",
                role: "Treasurer",
                image: "asset/images/eboard/2024_2025/steven.jpg",
            },
        ],

        event: [
            {
                name: "Celina Truong",
                role: "Co-Culture Chair",
                image: "asset/images/eboard/2024_2025/celina.jpg",
            },

            {
                name: "Eugene Nguyen",
                role: "Co-Culture Chair",
                image: "asset/images/eboard/2024_2025/eugene.jpg",
            },

            {
                name: "Minh Nguyen",
                role: "Community Outreach Chair",
                image: "asset/images/eboard/2024_2025/minh.jpeg",
            },

            {
                name: "Long Nguyen",
                role: "Event Coordinator",
                image: "asset/images/eboard/2024_2025/long.jpeg",
            },
        ],

        media: [
            {
                name: "Jaden Luanglath",
                role: "Media Director",
                image: "asset/images/eboard/2024_2025/jae.jpg",
            },

            {
                name: "Angelica Calumba",
                role: "Co-Marketing Director",
                image: "asset/images/eboard/2024_2025/angelica.jpg",
            },

            {
                name: "Kayla Nguyen",
                role: "Co-Marketing Director",
                image: "asset/images/eboard/2024_2025/kayla.jpg",
            },

            {
                name: "Daisy ho",
                role: "Co-Design Chair",
                image: "asset/images/eboard/2024_2025/daisy.jpg",
            },

            {
                name: "Hy Nguyen",
                role: "Co-Design Chair",
                image: "asset/images/eboard/2024_2025/hy.jpg",
            },
        ],
    },

    "2023-2024": {

    },
}

function loadBoard(year) {
    const coreGrid = document.getElementById('core-grid');
    const eventGrid = document.getElementById('event-grid');
    const mediaGrid = document.getElementById('media-grid');
    const buttons = document.querySelectorAll('.year-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');

        const btnTextClean = btn.innerText.replace(/\s/g, '');
        const yearClean = year.replace(/\s/g, '');

        if(btnTextClean === yearClean) {
            btn.classList.add('active');
        }
    });

    if(coreGrid) coreGrid.innerHTML = '';
    if(eventGrid) eventGrid.innerHTML = '';
    if(mediaGrid) mediaGrid.innerHTML = '';

    const data = boardData[year];

    if (!data) {
        if(coreGrid) coreGrid.innerHTML = '<p>No data found for this year</p>';
        return;
    }

    if (data.core && data.core.length > 0) {
        data.core.forEach(member => {
            const card = createCard(member);
            if(coreGrid) coreGrid.appendChild(card);
        });
    } else {
        if(coreGrid) coreGrid.innerHTML = '<p>No core members listed</p>';
    }

    if (data.event && data.event.length > 0) {
        data.event.forEach(member => {
            const card = createCard(member);
            if(eventGrid) eventGrid.appendChild(card);
        });
    } else {
        if(eventGrid) eventGrid.innerHTML = '<p>No event members listed</p>';
    }

    if (data.media && data.media.length > 0) {
        data.media.forEach(member => {
            const card = createCard(member);
            if(mediaGrid) mediaGrid.appendChild(card);
        });
    } else {
        if(mediaGrid) mediaGrid.innerHTML = '<p>No media members listed</p>';
    }
}

function createCard(member) {
    const cardScene = document.createElement('div');
    cardScene.classList.add('member-card-scene');

    const cardInner = document.createElement('div');
    cardInner.classList.add('member-card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('member-card-face', 'member-card-front');
    cardFront.innerHTML = `
        <img
            src="${member.image}"
            alt="${member.name}"
            loading="lazy"
        >
    `;

    const cardBack = document.createElement('div');
    cardBack.classList.add('member-card-face', 'member-card-back');

    const introText = member.intro ? member.intro : "No bio available";

    cardBack.innerHTML = `
        <div class="back-content">
            <h3>${member.name}</h3>
            <h4>${member.role}</h4>
            <div class="divider"></div>
            <p>${introText}</p>
        </div>
    `;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardScene.appendChild(cardInner);

    return cardScene;
}

document.addEventListener('DOMContentLoaded', () => {
    loadBoard('2025-2026');
});