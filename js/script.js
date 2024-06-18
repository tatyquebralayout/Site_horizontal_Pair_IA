document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const container = document.querySelector('.container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    let currentIndex = 0;

    function updateSection(index) {
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });
        currentIndex = index;
        sections[currentIndex].classList.remove('hidden');
        sections[currentIndex].classList.add('active');
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function navigate(dir) {
        if (dir === 'left' && currentIndex > 0) {
            updateSection(currentIndex - 1);
        } else if (dir === 'right' && currentIndex < sections.length - 1) {
            updateSection(currentIndex + 1);
        }
    }

    leftBtn.addEventListener('click', function() {
        navigate('left');
    });

    rightBtn.addEventListener('click', function() {
        navigate('right');
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            navigate('left');
        } else if (event.key === 'ArrowRight') {
            navigate('right');
        }
    });

    window.onload = function() {
        updateSection(0);
    };

    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
    });
});