let p1 = new Promise ((resovle,reject)=>{
    setTimeout(() => {
        console.log("resolved after 2 sec");
        resovle(56)
    },2000);
})
p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000);
    })
    return p2;
}).then((value)=>{
    console.log(value);
    return 2 ;
}).then((value)=>{
    console.log("we are pakka done");
    console.log(value);
})