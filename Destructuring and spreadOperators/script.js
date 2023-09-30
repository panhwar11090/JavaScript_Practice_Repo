let arr = [3,4,5,6,7,8,9,6];

 let [a,b,c, d, ...rest ] = arr
 console.log(a,b,c,d, rest);

// let [a, , b, ...rest] = arr
// console.log(a, b, rest)

let {f,g,h} = {f:45,g:12};
console.log(f,h,g);


// Spread Operator
let arr1 = [3,4,8];
let obj1 = { ...arr1}
console.log(obj1);

function sum (v1,v2,v3){
    return v1+v2+v3;
}

console.log(sum(...arr1));


let obj2 = {
    name: "Huzaifa",
    company : "xys",
    adress : "ccc"
}

console.log({...obj2 , name:"Ali"});

console.log({name:"Ali", ...obj2 ,});// dont do that warna spread operator result sahi nhi dega