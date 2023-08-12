const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'about';

window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop - sectionEl.offsetHeight / 2) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            const activeElement = document.querySelector('.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }
            navLinkEl.classList.add('active');
        } 
    });
});