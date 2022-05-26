const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

var btn = document.getElementById('btn-flip');
var color = document.querySelector('.color');

btn.onclick = function() {
    const cor = `#${gerarHex()}`;
    document.body.style.backgroundColor = cor;
    color.textContent = cor;
}

function gerarHex() {
    let corHexa = '';
    for(let i = 0; i < 6; i++) {
        corHexa += hex[randomNumber()];
    }
    return corHexa.toUpperCase();
}

function randomNumber() {
    return Math.floor(Math.random() * 16);
}

window.onload = function() {
    btn.click();
}