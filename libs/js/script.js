// Menu toggle
let nav = document.querySelector("nav");
let navBtn = document.querySelector(".nav-btn");
let navCloseBtn = document.querySelector(".nav-close-btn");

navBtn.onclick = () => {
    nav.classList.add("nav-toggle");
}

navCloseBtn.onclick = () => {
    nav.classList.remove("nav-toggle");
}

// Scroll top
let scrollUpIcon = document.querySelector(".scroll-up");

window.onscroll = () => {
    scrollUpIcon.style.display = document.documentElement.scrollTop > 400 ? "flex" : "none";
}

scrollUpIcon.onclick = () => {
    $("html").animate({
        scrollTop: 0
    }, 800);
}