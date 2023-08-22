const google = document.getElementById("go");
const fb = document.getElementById("fb");
const tw = document.getElementById("tw");


let g = () =>{
    window.location = "https://www.google.com";
}


let y = () =>{
    window.location = "https://www.facebook.com";
}


let z = () =>{
    window.location = "https://www.twitter.com";
}

google.addEventListener("click",g);
fb.addEventListener("click" ,y);
tw.addEventListener("click", z);


const fe = document.getElementById("fetch");
const main = document.getElementById("main");

async function getFetch(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user  = data.results[0];
    main. innerHTML = `<h2>${user.name.first}</h2>`;


}



fe.addEventListener("click" , setInterval(() => {
    getFetch();
}, 6000));

const bulb = document.getElementById('bulb');


setInterval( async function()  {
    document.querySelector(".bulb").classList.toggle("bulbtoggle")
}, 300);