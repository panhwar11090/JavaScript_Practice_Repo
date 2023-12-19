// console.log("huzaifa");

// const arr1 = [0,1,2,3,4,"huzaifa"];

// console.log(arr1)

// arr1.push(6);
// arr1.push(7)
// arr1.pop()
// // console.log(arr1)

// arr1.unshift("ali");
// arr1.shift();
// console.log(arr1)

// const arr2 = arr1.join()
// console.log(arr1)
// console.log(arr2)




// slice and splice

const ar1 = [1,2,3,4,5,6,"ali","asfand"];
console.log("a" , ar1);
console.log("do slice" , ar1.slice(0,3))

console.log("do splice", ar1.splice(0,3))
console.log(ar1)


const marvel_heros = ["thor", "spiderman", "Ironman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

const allHeros = [...marvel_heros,...dc_heros];
console.log(allHeros)

const anotherAray = [1,2,3,4,[5,6,7],8,9,[10,11,12,[13,14]]]

const real = anotherAray.flat(Infinity);

console.log(real)

const name = "huzifa"

console.log(Array.isArray(name));
// ye string ko array me krega 
console.log(Array.from("huzaif"))

// isme kch nhi hoga print ye emptye array dega or ye interwiew me bhi ata he
console.log(Array.from({name:"Ahsan"})) // intersting

let scr1 = 100;
let scr2 = 200;
let scr3 = 300;
console.log(Array.of(scr1,scr2,scr3))