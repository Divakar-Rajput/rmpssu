    // Optional JavaScript for enhanced functionality
    document.querySelectorAll('.dropdown-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const checkbox = this.closest('.dropdown-menu').previousElementSibling;
            checkbox.checked = false;
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-checkbox');
        dropdowns.forEach(dropdown => {
            if (!dropdown.closest('.dropdown').contains(event.target)) {
                dropdown.checked = false;
            }
        });
    });

    // Select the marquee element by its ID
const marquee = document.getElementById("newsMarquee");

// Pause marquee on mouseover
marquee.addEventListener("mouseover", function() {
    marquee.stop();
});

// Resume marquee on mouseout
marquee.addEventListener("mouseout", function() {
    marquee.start();
});



let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelector('.slides');
            const totalSlides = document.querySelectorAll('.slide').length;
            currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Auto slide every 5 seconds
        setInterval(() => {
            moveSlide(1);
        }, 5000);