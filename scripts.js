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