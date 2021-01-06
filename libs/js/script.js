// Menu toggle
let nav = document.querySelector("nav");
let navBtn = document.querySelector(".nav-btn");
let navCloseBtn = document.querySelector(".nav-close-btn");

navBtn.onclick = () => {
    //console.log("klikk")
    nav.classList.add("nav-toggle");
}

navCloseBtn.onclick = () => {
    //console.log("klikk")
    nav.classList.remove("nav-toggle");
}