const box1 = document.getElementById('box-1');
const boxes = document.getElementsByClassName('box');

box1.style.backgroundColor='blue';
box1.style.color='white';

for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');

//creating new element
const newParagraph = document.createElement('p');
newParagraph.innerText="this is the new para graph";
newParagraph.classList.add('box');


const container = document.getElementById('container');
container.appendChild(newParagraph);