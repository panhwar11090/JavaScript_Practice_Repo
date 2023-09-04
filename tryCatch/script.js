setTimeout(() => {
    console.log("statement 1");
}, 10);

let a = "huzaifa";
try {
    setTimeout(() => {
        console.log(a);
    }, 100);
} catch (error) {
    console.log("dekhle bharwe error agay he koi");
}



setTimeout(() => {
    console.log("statement 2");
}, 5000);


setTimeout(() => {
    console.log("statement 3");
}, 3000);

setTimeout(() => {
    console.log("statement 4");
}, 4000);


setTimeout(() => {
    console.log("statement 5");
}, 5000);