let btn = document.getElementById("btn");


let x  = function (e){
    // alert('hello1')
    console.log(e.target);
    console.log(e.target, e.clientX, e.clientY);
}

let y  = function (e){
    alert('hello2')
}

btn.addEventListener("click", x);

// btn.addEventListener("click", y);

// let a =  prompt("plzz uour number")

// if(a == "2"){
//     btn.removeEventListener("click", x)
// }