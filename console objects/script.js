
console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err" !=false);
console.assert("err" ==true);


console.time("for loop");

for(let i=0;i<5;i++){
    console.log(233)
}

console.timeEnd("for loop");



console.time("while loop");
let a;
while(a<5){
    console.log(233)
    a++;
}

console.timeEnd("while loop");
