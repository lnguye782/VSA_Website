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
            {
                name: "Family",
            }
        ],
    },

    "2023-2024": {
        sponsor: [
            {
                name: "Bánh Mì Brothers",
                image: "asset/images/banh_mi_brothers.png",
                link: "https://banhmibrothers.com/"
            },

            {
                name: "Central Tea House",
                image: "asset/images/central_tea_house.png",
                link: "https://www.instagram.com/central_tea_house/"
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
                name: "Milk Cha Cha",
                image: "asset/images/milk_cha_cha.png",
                link: "https://www.milkchachausa.com/"
            },

            {
                name: "Modish Nail Spa",
                image: "asset/images/modish_nail_spa.png",
                link: "https://modishnailsspa.com/"
            },

            {
                name: "Nails Esthetics Academy",
                image: "asset/images/nails_esthetics_academy.png",
                link: "https://www.ncnailsesthetics.com/",
            },

            {
                name: "North Carolina Asian Americans Together",
                image: "asset/images/ncaat.png",
                link: "https://www.nccat.org/home"
            },

            {
                name: "Ocha Time",
                image: "asset/images/ocha_time.png",
                link: "https://www.ochatimetea.com/"
            },

            {
                name: "Phở Hòa",
                image: "asset/images/pho_hoa.png",
                link: "https://phohoa.com/"
            },

            {
                name: "Phở @ Noda",
                image: "asset/images/pho_noda.png",
                link: "https://www.phoatnoda.com/"
            },

            {
                name: "Project Sol",
                image: "asset/images/project_sol.png",
                link: "https://projectsol.org/"
            },

            {
                name: "Seoul Poke Bowl",
                image: "asset/images/seoul_poke_bowl.png",
                link: "#"
            },

            {
                name: "Sweet Corner",
                image: "asset/images/sweet_corner.png",
                link: "https://www.1368sweetcornercafecharlotte.com/"
            },

            {
                name: "Tea Fusion Cafe",
                image: "asset/images/tea_fusion_cafe.png",
                link: "https://www.teafusioncafeuncc.com/"
            },

            {
                name: "Vietnamese Association of Charlotte",
                image: "asset/images/vietnamese_association_of_charlotte.png",
                link: "https://www.vietcharlotte.org/"
            },

            {
                name: "ViVi Bubble Tea",
                image: "asset/images/vivi_bubble_tea.png",
                link: "https://vivibubbleteaconcord.com/"
            },
        ],
    },

}

function loadBoard(year) {
    const sponsorGrid = document.getElementById('sponsor-grid');
    const buttons = document.querySelectorAll('.year-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active');

        const btnTextClean = btn.innerText.replace(/\s/g, '');
        const yearClean = year.replace(/\s/g, '');

        if(btnTextClean === yearClean) {
            btn.classList.add('active');
        }
    });

    if(sponsorGrid) sponsorGrid.innerHTML = '';

    const data = boardData[year];

    if(!data) {
        if(sponsorGrid) sponsorGrid.innerHTML = '<p>No data found for this year</p>';
        return;
    }

    const allPartners = [
        ...(data.sponsor || []),
        ...(data.family || [])
    ];

    if(allPartners.length > 0) {
        allPartners.forEach(partner => {
            const card = document.createElement('div');
            card.classList.add('sponsor-card');

            if(partner.image) {
                const targetAttr = partner.link === '#' ? '' : 'target="_blank" rel="noopener noreferrer"';
                card.innerHTML = `
                    <a href="${partner.link}" class="sponsor-link" ${targetAttr}>
                        <img src="${partner.image}" alt="${partner.name}" loading="lazy">
                    </a>
                `;
            } else {
                card.classList.add('family-card');
                card.innerHTML = `
                    <div class="sponsor-link">
                        <span class="family-name">${partner.name}</span>
                    </div>
                `;
            }
            
            sponsorGrid.appendChild(card);
        });
    } else {
        if(sponsorGrid) sponsorGrid.innerHTML = '<p>No partners listed for this year</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadBoard('2025-2026');
});