// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!email.includes('@')) {
            alert('Please enter a valid email.');
            return;
        }

        alert('Message sent successfully!');
        form.reset();
    });

    // Simple carousel auto-slide
    const carousel = document.querySelector('.carousel');
    let position = 0;
    const itemWidth = 210; // width + margin
    const items = document.querySelectorAll('.carousel-item').length;

    setInterval(() => {
        position -= itemWidth;
        if (Math.abs(position) >= itemWidth * items) {
            position = 0;
        }
        carousel.style.transform = `translateX(${position}px)`;
    }, 3000);
});