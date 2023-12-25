// for is array specific loop
// ye objects pr work nhi krega

// const arr = ["ali",2,3,4,]

// for (const num of arr) {
//     console.log(num)
// }


// const greeting = "Hello World";
// for (const greet of greeting) {
//     console.log(greet)
// }

//Maps

const map = new Map()
map.set('PK', "Pakistan");
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('USA', "United States Of America")

for (const [key, value] of map) {
    console.log(key , value)
}