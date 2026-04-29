const boardData = {
    "2025-2026": {
        sponsor: [
            {
                name: "Bánh Mì Brothers",
                image: "asset/images/banh_mi_brothers.png",
                link: "https://banhmibrothers.com/"
            },

            {
                name: "Crispy Bánh Mì",
                image: "asset/images/crispy_banh_mi.png",
                link: "https://www.crispybanhmi.com/"
            },

            {
                name: "NC Nails Academy",
                image: "asset/images/nc_nails_academy.png",
                link: "https://www.ncnailsesthetics.com/"
            },

            {
                name: "ShareTea University",
                image: "asset/images/sharetea_uni.png",
                link: "https://www.shareteaclt.com/"
            },

            {
                name: "Pho University",
                image: "asset/images/pho_university.png",
                link: "https://www.phoatuni.com/"
            },

            {
                name: "Vietnamese Association of Charlotte",
                image: "asset/images/vietnamese_association_of_charlotte.png",
                link: "https://www.vietcharlotte.org/"
            },

            {
                name: "Project SOL",
                image:"asset/images/project_sol.png",
                link: "https://projectsol.org/"
            },

            {
                name: "Nail Tek",
                image:"asset/images/nail_tek.png",
                link: "https://nailtekspacharlotte.com/"
            },

            {
                name: "Royal Nail",
                image: "asset/images/royal_nail.png",
                link: "#"
            }
        ],

        family: [

        ],
    },
}

function loadBoard(year) {
    const sponsorGrid = document.getElementById('sponsor-grid');
    const familyGrid = document.getElementById('family-grid');
    const buttons = document.querySelectorAll('.year-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');

        const btnTextClean = btn.innerText.replace(/\s/g, '');
        const yearClean = year.replace(/\s/g, '');

        if(btnTextClear === yearClean) {
            btn.classList.add('active');
        }
    });

    if(sponsorGrid) sponsorGrid.innerHTML = '';
    if(familyGrid) familyGrid.innerHTML = '';

    const data = boardData[year];

    if(!data) {
        if(sponsorGrid) sponsorGrid.innerHTML = '<p>No data found for this year</p>';
        return;
    }

    if(data.sponsor && data.sponsor.length > 0) {
        data.event.forEach(partner => {
            const card = document.createElement('div');
            card.classList.add('sponsor-card');

            const targetAttr = partner.link === '#' ? '' : 'target="_blank" rel="noopener noreferrer"';
            
            card.innerHTML = `
                <a href="${partner.link}" class="sponsor-link" ${targetAttr}>
                    <img src="${partner.image}" alt="${partner.name}" loading="lazy">
                </a>
            `;

            sponsorGrid.appendChild(card);
        });
    } else {
        if(sponsorGrid) sponsorGrid.innerHTML = '<p>No sponsor listed</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadBoard('2025-2026');
});