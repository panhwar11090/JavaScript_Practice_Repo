let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(4);
    }, 2000);
})
p1.then(()=>{
    console.log("hurray");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(5);
        }, 6000);
    })
}).then((value)=>{
    console.log(value);
}).then(()=>{
    console.log("promise is resolved");
})