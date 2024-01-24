/**
 * @author Pablo Gonzalez Ruiz 
 * @gitHub https://github.com/Pabloglezr8/TareaTema5DIW.git
 */

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    mobileMenuButton.addEventListener('click', function () {
        hamburger.classList.toggle('show');
        mobileMenuButton.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            hamburger.classList.remove('show');
            mobileMenuButton.classList.remove('active');
        }
    });
});