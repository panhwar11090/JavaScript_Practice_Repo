document.write("hello");

const sum = (a,b,c)=>{
    console.log("yes iam runing" + (a+b+c));
    
}


let f = setInterval(() => {
    alert("setinterval");
}, 5000);

console.log(f);


let b = prompt("plzz enter a number");
if(b == "y"){
    setInterval(sum,5000,1,2,7);
}else{
    alert("dafa hoja");
}


// let a = setTimeout(()=>{
//     alert("i am inside setimout")
// }, 5000)

// let b = prompt("Do you want run the settime");

// if(b == "y"){
//     setTimeout(sum,5000,1,2,7);
// }
// else{
//     alert("ouut");
// }