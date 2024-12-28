
const image1 = document.getElementById('hoverImage');
const image2 = document.getElementById('hoverImage2');

image1.addEventListener('mouseenter', () => {
    image1.style.opacity = 0;
    image2.style.opacity = 1;
});

image1.addEventListener('mouseleave', () => {
    image1.style.opacity = 1;
    image2.style.opacity = 0;
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    const offsetPosition = targetElement.offsetTop - 75; 

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
    });
});