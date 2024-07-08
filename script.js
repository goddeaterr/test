document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
    const heroText = document.querySelectorAll('.hero-text span');
    
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Hero text animation
    function animateHeroText() {
        heroText.forEach((letter, idx) => {
            setTimeout(() => {
                letter.classList.add('visible');
            }, idx * 100);
        });
    }

    animateHeroText();

    // Initialize chart.js for the interactive chart widget
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Ad Performance',
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: '#ff5722',
                backgroundColor: 'rgba(255, 87, 34, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Interactive counter widget
    let counter = 0;
    const counterElement = document.getElementById('counter');
    setInterval(() => {
        counter++;
        counterElement.textContent = counter;
    }, 1000);
});
