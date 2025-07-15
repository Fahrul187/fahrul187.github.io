// toggle class active 
const navbarNav = document.querySelector('.navbar-nav');
const phHamburger = document.querySelector('.ph-hamburger');

document.querySelector('.ph-hamburger').onclick = () => {
    navbarNav.classList.toggle('active');
}

document.addEventListener('click', function (e) { 
    if (!phHamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});