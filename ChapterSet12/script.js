// // 1
// const a = async (text) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);
//     })
// }

// (
//     async () =>{
//         let text = await a("hello");
//         console.log(text);
//         text = await a("world");;
//         console.log(text);
//     }
// ) ()

//2
const sum = (a,b,c) =>{
    return a+b+c;
}

let x = [1,2,3];

console.log(sum(...x));


// 4
const simpleInterset = (a,b,c)=>{
    return (a*b*c) / 100;
};

console.log(simpleInterset(1000,5,1));



//3
const c = async (text,n=2) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(text)
        }, 2000 * n);
    })
}

(
    async () =>{
        let text = await c("iam resolving in 1 sec",1);
        console.log(text);
        text = await c("iam resolving in 4 sec", 4);
        console.log(text);
        text = await c("iam resolving in 2 sec", 2 );
        console.log(text);
    }
) ()