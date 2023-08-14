//"Active" appearence corresponding to the section user scrolls to
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');
const landing = document.querySelector('#landing')

let currentSection = 'about';
window.addEventListener('scroll', () => {
    let assigned = false
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop - sectionEl.offsetHeight / 2) {
            currentSection = sectionEl.id;
            assigned = true
        }
    });

    if (window.scrollY <= landing.offsetHeight / 2) {
        currentSection = null
        const activeElement = document.querySelector('.active');
        if (activeElement) {
            activeElement.classList.remove('active');
        }
    }
    else {
        navLinkEls.forEach(navLinkEl => {
            if (navLinkEl.href.includes(currentSection)) {
                const activeElement = document.querySelector('.active');
                if (activeElement) {
                    activeElement.classList.remove('active');
                }
                navLinkEl.classList.add('active');
            } 
        });
    }
});


//Clear to opaque navbar on scroll
const navbar = document.querySelector('.navbar');
let clear = true
window.addEventListener('scroll', () => {
    if (clear && window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('bg-dark')
        clear = false
    }
    else if (!clear && window.scrollY <= navbar.offsetHeight) {
        navbar.classList.remove('bg-dark')
        clear = true
    }

});