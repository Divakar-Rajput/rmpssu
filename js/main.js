// Optional JavaScript for enhanced functionality
document.querySelectorAll('.dropdown-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const checkbox = this.closest('.dropdown-menu').previousElementSibling;
        checkbox.checked = false;
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
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
marquee.addEventListener("mouseover", function () {
    marquee.stop();
});

// Resume marquee on mouseout
marquee.addEventListener("mouseout", function () {
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

let btn = document.getElementById('topnavbtn');
let submenubtn = document.getElementById('subnavbtn');

btn.addEventListener('click', function() {
    // Toggle the topnav menu
    document.getElementById('topnav-list').classList.toggle('show-class');
    
    // Ensure submenu is hidden
    document.getElementById('submenu-list').classList.remove('show-class');
});

submenubtn.addEventListener('click', function() {
    // Toggle the submenu
    document.getElementById('submenu-list').classList.toggle('show-class');
    
    // Ensure topnav menu is hidden
    document.getElementById('topnav-list').classList.remove('show-class');
});


function updateClock() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Date
    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const dateString = `${day}, ${month} ${date}, ${year},`;

    // Display time and date
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call to display immediately
updateClock();