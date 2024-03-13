const logo = document.getElementById('dvd-logo');
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

function moveLogo() {
    logo.style.left = x + 'px';
    logo.style.top = y + 'px';
    x += dx;
    y += dy;
    if (x + logo.offsetWidth >= window.innerWidth || x <= 0) {
        dx = -dx;
    }
    if (y + logo.offsetHeight >= window.innerHeight || y <= 0) {
        dy = -dy;
    }
    requestAnimationFrame(moveLogo);
}
moveLogo();