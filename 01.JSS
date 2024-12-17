// Get the navbar element
const navbar = document.getElementById('navbar');

// Add scroll event listener to change navbar style when scrolling
window.addEventListener('scroll', function() {
    // If the page is scrolled more than 50px, apply the "scrolled" class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
