const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector("menu-btn__burger");

let showNav = false;

menuBtn.addEventListener('click', addOpen);

function addOpen() {
    if(!showNav){
        hamburger.classList.add('open');

        showNav = true;
    } else {
        hamburger.classList.remove("open");

        showNav = false;
    }
}

