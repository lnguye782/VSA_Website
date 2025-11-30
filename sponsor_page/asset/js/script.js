const hamburger = document.querySelector('.hamburger-menu');
const headerLinks = document.getElementById('header-links');

hamburger.addEventListener('click', () => {
    headerLinks.classList.toggle('active');
});