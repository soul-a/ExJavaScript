const colors = ['#f15025', 'green', 'red', 'rgba(133,122,200)'];

var btn = document.getElementById('btn-flip');
var color = document.querySelector('.color');

btn.onclick = function() {
    const colorId = randomNumber();
    document.body.style.backgroundColor = colors[colorId];
    color.textContent = colors[colorId];
};

function randomNumber() {
    return Math.floor(Math.random() * 4)
};

window.onload = function() {
    btn.click();
}