// Add this JavaScript for the mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileNavElements = document.getElementById('mobile-nav-elements');

    menuIcon.addEventListener('click', function () {
        mobileNavElements.style.display = (mobileNavElements.style.display === 'block') ? 'none' : 'block';
    });
});
