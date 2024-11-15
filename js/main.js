document.querySelectorAll('.dropdown-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const checkbox = this.closest('.dropdown-menu').previousElementSibling;
        checkbox.checked = false;
    });
});

// only one dropdown menu open at a time
document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown-checkbox');
    dropdowns.forEach(dropdown => {
        if (!dropdown.closest('.dropdown').contains(event.target)) {
            dropdown.checked = false;
        }
    });
});



const marquee = document.getElementById("newsMarquee");
marquee.addEventListener("mouseover", function () {
    marquee.stop();
});
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
setInterval(() => {
    moveSlide(1);
}, 5000);



let showbtn = document.getElementById('topnavbtn');
let height = document.getElementById('topnav-list');
let showsubbtn = document.getElementById('subnavbtn');
let classsubheight = document.getElementById('submenu-list');
showbtn.addEventListener('click', function () {
    let a = height.offsetHeight;
    if (a === 0) {
        height.style.setProperty('--element-height', '550px');
        classsubheight.style.setProperty('--element-sub-height', '0px');
    } else {
        height.style.setProperty('--element-height', '0px');
    }
});
showsubbtn.addEventListener('click', function () {
    let b = classsubheight.offsetHeight;
    if (b === 0) {
        classsubheight.style.setProperty('--element-sub-height', '450px');
        classsubheight.style.overflow = 'auto';
        height.style.setProperty('--element-height', '0px');
    } else {
        classsubheight.style.setProperty('--element-sub-height', '0px');
    }
});
document.addEventListener('click', function (event) {
    const isClickInsideMenu = height.contains(event.target) || showbtn.contains(event.target);
    const isClickInsideSubMenu = classsubheight.contains(event.target) || showsubbtn.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideSubMenu) {
        height.style.setProperty('--element-height', '0px');
        classsubheight.style.setProperty('--element-sub-height', '0px');
    }
});



function getDeviceWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}
window.addEventListener('resize', function () {
    const deviceWidth = getDeviceWidth();
    if (deviceWidth > 768) {
        classsubheight.style.removeProperty('overflow');
    }
});




function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dateString = `${day}, ${month} ${date}, ${year},`;
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}
setInterval(updateClock, 1000);
updateClock();


window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    const loaderMask = document.querySelector('.loader-mask');
    loader.style.opacity = '1';
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    setTimeout(() => {
        loaderMask.style.opacity = '1';
        loaderMask.style.transition = 'opacity 0.5s ease';
        loaderMask.style.opacity = '0';
        setTimeout(() => {
            loaderMask.style.display = 'none';
        }, 500);
    }, 350);
});


document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
  });
document.getElementById('forwardButton').addEventListener('click', function() {
    window.history.forward();
  });
    