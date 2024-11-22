// Function to animate the counter
function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const speed = 200; // Lower value for faster animation
    const increment = target / speed;

    let count = 0;

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target; // Ensure exact value at the end
        }
    };

    updateCounter();
}

// Using Intersection Observer to trigger animation when visible
const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    },
    { threshold: 0.5 } // Adjust visibility threshold
);

counters.forEach(counter => observer.observe(counter));





























    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 3, // Number of items to display at a time

            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    });




    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 3, // Number of items to display at a time
            loop: true, // Enable looping
            margin: 10, // Margin between items
            nav: false, // Disable navigation arrows (< >)
            dots: true, // Enable dots at the bottom
            autoplay: true, // Enable auto-play
            autoplayTimeout: 3000, // Auto-play interval
            autoplayHoverPause: true // Pause auto-play on hover
        });
    });
    