const box1 = document.getElementById('box-1');

const box2 = document.getElementById('box-2');


const box3 = document.getElementById('box-3');

const container = document.getElementById('container');



container.addEventListener('click',()=>{
    console.log("click on container");
})

box3.addEventListener('click', ()=>{
    console.log("click on box3");
});




box2.addEventListener('mouseover',(e) =>{
    console.log("mouse over" ,e.clientX,e.clientY);
})


function myFunction(){
    console.log("click on box1");
}


const nameInput = document.getElementById('nameInput');

nameInput.addEventListener('keypress',(e)=>{
    console.log("key press" , e.key);
})


nameInput.addEventListener('keydown',(e)=>{
    console.log("key down",e);
})


nameInput.addEventListener('keyup',(e)=>{
    console.log("key up");
})