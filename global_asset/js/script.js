async function loadPartial(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    
    const res = await fetch(url);
    if (!res.ok) {
        console.error(`Failed to load ${url}:`, res.status);
        return;
    }
    el.innerHTML = await res.text();
}

function initHeaderUI() {
    const hamburger = document.querySelector('.hamburger-menu');
    const headerLinks = document.getElementById('header-links');

    if (hamburger && headerLinks) {
        hamburger.addEventListener('click', () => {
            headerLinks.classList.toggle('active');
        });
    }

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
                item.title.toLowerCase().includes(query) || (item.keywords && item.keywords.toLowerCase().includes(query))
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

document.addEventListener("DOMContentLoaded", async () => {
    await loadPartial("header", "/global_asset/partials/header.html");
    await loadPartial("footer", "/global_asset/partials/footer.html");

    initHeaderUI();
});