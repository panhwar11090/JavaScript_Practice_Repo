let arr = [1,2,3,4,10,50,100,200,5,6];
// let a  =prompt("plzz emter a number");
// a = Number.parseInt(a)
// arr.push(a);
// console.log(arr);


// practce 2

// let a;
// do{
//      a  =prompt("plzz emter a number");
//     a = Number.parseInt(a)
//     arr.push(a);
    
// }while(a!=0);

// console.log(arr);

//practice 3

let a1 = arr.filter((value)=>{
    return value % 10 ==0;

})
console.log(a1);

//pratcice 4;
let a2 = arr.map((value)=>{
    return value*value;
})

console.log(a2);

// pract 5

let b = [1,2,3,4,5,6,7,8];

let b1 = b.reduce((h1,h2)=>{
    return h1*h2;

})
console.log(b1);
