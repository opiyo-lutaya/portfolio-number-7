const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.intro-ul-el');
    const navLinks = document.querySelectorAll('.intro-ul-el li');

    burger.addEventListener('click', () => {
        // toggle 
        nav.classList.toggle('nav-active');
        // animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}


navSlide();