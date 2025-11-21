const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const introVideo1 = document.getElementById('intro-video-1');
const introVideo2 = document.getElementById('intro-video-2');

if (introVideo1 && introVideo2) {
    introVideo1.addEventListener('ended', () => {
        introVideo1.style.display = 'none';
        introVideo2.style.display = 'block';
        introVideo2.play();
    });
    introVideo2.addEventListener('ended', () => {
        introVideo2.style.display = 'none';
        introVideo1.style.display = 'block';
        introVideo1.play();
    });
}