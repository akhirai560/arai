document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    const themeToggle = document.getElementById('theme-toggle');
    const navToggle = document.getElementById('nav-toggle');
    const header = document.querySelector('header');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);
    });

    navToggle.addEventListener('click', () => {
        header.classList.toggle('open');
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out!');
        form.reset();
    });
});
