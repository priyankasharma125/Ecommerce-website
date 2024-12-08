// js for back to top button
let btn = document.getElementById("mybtn");
window.onscroll = function () { scrollfunction() }
function scrollfunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
}
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// js for humburger menu

let bars = document.getElementById("bars");
let nav = document.getElementById("navbar");
let close = document.querySelector(".close");
if (bars) {
    bars.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}
// js for loading function

let loader = document.getElementById("loader");
function myfunction() {
    loader.style.display = "none";
}

// js for clickable images

var mainimg = document.getElementById("main-img");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
}