// // let nams = ["huzaifa",12,"Ahsan",13,"asfand",45,"furqan",65,"ayesha"]


// // nams[2]= "Dost";




// // console.log(nams);
// // for(let i=0; i<nams.length;i++){
// //     console.log(nams[i]);
// // }



// // Array Methods

// const n =[7,8,5,46,2];
// // to string

// let c=n.toString();
// console.log(typeof c);

// // to join

// let b =n.join(" and ");

// console.log(b);

// // pop 

// let m = [1,"ali", "wasi",45,'$']
// console.log(m.pop());
// console.log(m);

// // push
// m.push("asfand", 100);
// console.log(m);


// // shift

// console.log(m.shift(), m);

// // unshit

// m.unshift("asma");
// console.log(m);


// // delete

// let d = [7,8,9,10]



// More methods of Arrays
// delete or concat
let num = [1,2,3,4,5,5,6,7,8,9,45,12,36];
let num_more = [100,120,130,450,500,600];
let a = num.concat(num_more);
console.log(a);
delete num[2];
console.log(num.length);



// sort function
let campare = (a,b)=>{
    return a-b;

}

let a1 =[1,12,13,2,3,38,7,9,8];
console.log(a1.sort(campare));


// splice 

let a2 = [1,2,3,4,5,6,];
// let deleteval = a2.splice(3,5,1021,1022,1023,1024)
// console.log(a2);
// console.log(deleteval);

// slice 
// let a3 = a2.slice(3)
let a3 = a2.slice(2,4)
console.log(a2);
console.log(a3);
// console.log(a2);



// array with loops

let ha = [3,4,56,7,8,9];
//for each loop

ha.forEach((element)=>{
    console.log(element*element);
})

// Array.from

let ha1 = "HUZAIFA AHMED";

let arr1 = Array.from(ha1);
console.log(arr1);


// for of
for (const item of ha) {
    console.log(item);
}


// for in
//example 1
for(let i in ha){
    console.log(i);
}
//example 2

for(let i in ha){
    console.log(ha[i]);
}

// Map function

let array1=[45,23,21]
let m = array1.map((value, index, array)=>{
    return value+2;
})
console.log(array1,m);

// Filter function
let array8 = [1,2,3,4,5,6]
let afind = array8.filter((a)=>{
        return a == 5;
}) 
console.log(afind);


// reduce function


let array9 = [1,5,64,3,8,78,36];
let arrr5 = array9.reduce((h1,h2,h3)=>{
    return h1+h2+h3;
})

console.log(arrr5);

