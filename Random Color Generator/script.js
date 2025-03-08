let div = document.createElement('div');
let h1 = document.createElement('h2');
let gBtn = document.createElement('button');

h1.innerText = 'RGB Color Value';
h1.classList.add('heading');
document.querySelector('body').appendChild(h1);

div.classList.add('box');
div.innerText = 'click the button to generate color';

gBtn.addEventListener('click', () => {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    h1.innerText = `RGB (${R}, ${G}, ${B})`;
    div.style.backgroundColor = `rgba(${R+1}, ${G+1}, ${B+1},1)`;
    h1.style.color = `rgb(${R}, ${G}, ${B})`;
    div.style.border = 'none';
    div.innerText = 'your new color is ready';
})

gBtn.innerText = 'Generate Color';
gBtn.classList.add('btn');
document.querySelector('body').appendChild(gBtn);
document.querySelector('body').appendChild(div);