const loadScript = async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload=()=>{
            resolve(src + "done succesfully");
        }
        document.head.appendChild(script);
    })
}

//problem1
let a1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
a1.then((value)=>{
    console.log(value);
})

//problem2
const main1 = async () =>{
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js");
    console.log(a);
}
main1();



// Problem3
let p = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error("this is not acceptable"));
        }, 3000);
    })
}

let a = async()=>{
    try {
        let c = await p()
        console.log(c);
    } catch (error) {
        console.log("this is error has been handeld");
    }
}

a();



// Problem 4

let p1 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}

let p2 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}


let p3 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });
}


const run = async()=>{
    console.time("run");

    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let g = await Promise.all([a1,a2,a3]);
    console.log(g);
    console.timeEnd("run")
}

run();











