const navSlide = () => {
    const menuToggle = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav')
    const navLinks = document.querySelectorAll('.nav__link')

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav--active');
        menuToggle.classList.toggle('hamburger--active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
                } else {
                    link.style.animation = `nav-Fade 0.5s ease forwards ${index / 7 + .1}s`;
                }
        })
    })
}

navSlide()