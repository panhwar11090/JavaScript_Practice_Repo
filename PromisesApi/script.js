let p1 = new Promise((resovle,reject)=>{
    setTimeout(() => {
        resovle("value 1");
    }, 11000);
});
let p2 = new Promise((resovle,reject)=>{
    setTimeout(() => {
        resovle("value 2");
    }, 2000);
    
});

let p3 = new Promise((resovle,reject)=>{
    setTimeout(() => {
        resovle("value 3");
    }, 3000);
});

p1.then((value) => {
        console.log(value)
})

p2.then((value) => {
        console.log(value)
})

p3.then((value) => {
        console.log(value)
})


// let promise_all = Promise.all([p1,p2,p3]);

// let promise_all = Promise.resolve(6);

let promise_all = Promise.reject(new Error("hey"))

promise_all.then((value)=>{
    console.log(value);
})