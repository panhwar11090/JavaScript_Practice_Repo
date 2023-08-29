let p1 =new Promise((resolve, reject) =>{
    console.log("Promise is pending ");
    setTimeout(()=>{
        console.log("i am a proise and iam resolved");
        resolve(true)
    },3000)
})

let p2 =new Promise((resolve, reject) =>{
    console.log("Promise is pending ");
    setTimeout(()=>{
        reject(new Error("i am error"))
    },3000)
})



// to get the value
p1.then((value)=>{
    console.log(value + " han bhai samjh ai?");
    
})

// to catch the error
// p2.catch((error) =>{
//     console.log("some error ocurred");
// })

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error + "error ko samjh or har mat man");
})