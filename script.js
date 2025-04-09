document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements when they come into view
    const animateElements = document.querySelectorAll('.card, .section-title, .benefit-item, .step, .bonus-item, .testimonial');
    
    const animateOnScroll = function() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run animation on page load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}); // Fechando o evento DOMContentLoaded