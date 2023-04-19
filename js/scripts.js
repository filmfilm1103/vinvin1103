
const mainNav = document.getElementById('mainNav');
const headerHeight = mainNav.clientHeight;
let isNavFixed = false;
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        // Scrolling Up
        if (currentScrollPos > 0 && isNavFixed) {
            mainNav.classList.add('is-visible');
        } else {
            mainNav.classList.remove('is-visible', 'is-fixed');
            isNavFixed = false;
        }
    } else {
        // Scrolling Down
        mainNav.classList.remove('is-visible');
        if (currentScrollPos > headerHeight && !isNavFixed) {
            mainNav.classList.add('is-fixed');
            isNavFixed = true;
        }
    }
    prevScrollPos = currentScrollPos;
});
