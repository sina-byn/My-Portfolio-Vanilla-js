const loader = document.querySelector('.loader-wrap');
const menu = document.querySelector('nav');
const cover = document.querySelector('.cover');
const showBtn = document.querySelector('.show-menu');
const closeBtn = document.querySelector('.close-btn');

showBtn.onclick = showMenu;
closeBtn.onclick = hideMenu;
cover.onclick = hideMenu;

function showMenu() {
    menu.style.transform = "translateX(0)";
    cover.style.transform = "translateX(0)";
}

function hideMenu() {
    menu.style.transform = "translateX(100%)";
    cover.style.transform = "translateX(-100%)";
}

document.onreadystatechange = () => {
    const state = document.readyState;

    if (state === "interactive") {
        let countDown = 3;

        const interval = setInterval(() => {
            countDown--;
            if (countDown == 0) {
                clearInterval(interval);
                loader.style.display = "none";
            }
        }, 1000);
    }

    if (state === "complete") {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }
}