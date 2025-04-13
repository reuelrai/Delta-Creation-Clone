"use strict";
// Get the hamburger button and the navigation links container
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
    // Toggle the "active" class on click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
// Add event listener to each FAQ question
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const faq = btn.parentElement;
        faq.classList.toggle('open');
        // Toggle icon manually
        const icon = btn.querySelector('.faq-icon');
        if (icon) {
            icon.textContent = faq.classList.contains('open') ? '−' : '+';
        }
    });
});
