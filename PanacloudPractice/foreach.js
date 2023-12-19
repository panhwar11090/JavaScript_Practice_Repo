const coding = ["js", "c#", "python","java" ,"cpp"]

// coding.forEach(function (value){
//     console.log(value)
// })

// const printMe = (item)=>{
//     console.log(item)
// }

// coding.forEach(printMe);

// const myData =[
//     {
//         name:"huzaifa",
//         age1:23
//     },
//     {
//         name:"ali",
//         age2:22
//     },
//     {
//         name:"ahsan",
//         age3:21
//     },
// ]

// myData.forEach((item) =>{
//     console.log(item.name)
// })


//1
const sentence = ["he", "is", "my ", "brother"];
let concat = "";
sentence.forEach((val)=>{
    concat += val + " ";
})
console.log(concat)

//2
let numbers = [1,2,3,4,5,6,7,8,9,10,12];
numbers.forEach((val)=>{
    if(val%2==0){
        console.log(val)
    }
})

//3

const names = [ "Ali", "Dost","Asfand","Uzair","Ashfaq", "Ahsan"]

names.forEach((val)=>{
    if(val == "Asfand"){
        console.log("Name Found")
    }
})

// 4
const productPrice = [100,200,300,500,1000];
const discountFunction = (item)=>{
    const disc = item / 10;
    console.log(disc)
}
productPrice.forEach(discountFunction);

//5
const a1 = ["ali","najam","waris","shafi"];
a1.forEach((item)=>{
    console.log(item.toUpperCase());
})

// 6
//2d array elemnets printing using nested foreach
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
matrix.forEach((r)=>{
    r.forEach((item)=>{
        console.log(item)
    })
})

const words = "i am practicing javascript";








// // Maps

const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('UK', "United Kingdom")

// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//map function question
let celciusTemp = [0,10,21,30,40]

const celToFar = (cel)=>{
        const farTemp = (cel* 9/5)+32
        return farTemp;
}

let farhentHeitTemp = celciusTemp.map(celToFar);
console.log(farhentHeitTemp)



// filter out even number and * with 2 alll

let n1 = [1,2,3,4,5,6,7,8,9,10];

const evenCheck = (val)=>{
    if(val % 2 ===0){
        const add = val*2;
        console.log(add)
    }
}

n1.map(evenCheck)
