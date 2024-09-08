document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('foodtypes');
    const slideLeftButton = document.getElementById('but_ton1');
    const slideRightButton = document.getElementById('but_ton2');

    // Amount of pixels to slide
    const slideAmount = 100;

    slideLeftButton.addEventListener('click', () => {
        container.scrollBy({
            top: 0,
            left: -slideAmount,
            behavior: 'smooth'
        });
    });

    slideRightButton.addEventListener('click', () => {
        container.scrollBy({
            top: 0,
            left: slideAmount,
            behavior: 'smooth'
        });
    });
})