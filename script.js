document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const darkModeToggle = document.querySelector('.dark-mode-toggle'); // This element is now removed from HTML
    const body = document.body;

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active'); // Close menu after clicking
            }
        });
    });

    // Dark Mode Toggle (Removed functionality as per request)
    // darkModeToggle.addEventListener('click', () => {
    //     body.dataset.theme = body.dataset.theme === 'dark' ? '' : 'dark';
    //     localStorage.setItem('theme', body.dataset.theme);
    // });

    // Apply saved theme on load (Removed as theme is now fixed to dark)
    // if (localStorage.getItem('theme') === 'dark') {
    //     body.dataset.theme = 'dark';
    // }

    // Contact Form Submission (Basic - no backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Basic Scroll animations (can be extended with AOS library)
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'scale(1) translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'scale(0.9) translateY(40px)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.transition = 'all 0.8s ease-out'; /* Slightly longer transition */
        section.style.opacity = 0;
        section.style.transform = 'scale(0.9) translateY(40px)'; /* Start smaller and slightly lower */
        observer.observe(section);
    });

}); 