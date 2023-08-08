

// const num = prompt("Enter a num");
// num - Number.parseInt(num);
// let fact = 1;

// for(let i=1;i<=num;i++){
//     fact = fact*i;
    
// }
// console.log(fact);


let obj = {
    "Ahsan": 30,
    "huzaifa": 50,
    "Rashid": 41,
    "Asfand": 37,
}

for (let a in obj){
    console.log(obj[a]);

}

for(let b of "huzaifa"){
    console.log(b);
}