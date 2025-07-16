// toggle class active 
const navbarNav = document.querySelector('.navbar-nav');
const phHamburger = document.querySelector('.ph-hamburger');

document.querySelector('.ph-hamburger').onclick = () => {
    navbarNav.classList.toggle('hurung');
}

document.addEventListener('click', function (e) { 
    if (!phHamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('hurung');
    }
});

document.querySelectorAll('.navbar-nav a').forEach(link => {
    navbarNav.addEventListener('click', () => {
        navbarNav.classList.remove('hurung')
    })
})