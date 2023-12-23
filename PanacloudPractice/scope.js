let a = 300;
let b =200;
if(true){
    let a = 10;
    const b = 20
    
    var c = 30
    console.log(b)
}
// console.log(a)
// console.log(b)


function one(){
    const username = "huzaifa";
    function two(){
        const website = "Panacloud"
        console.log(username)
    }
    // console.log(website) this will give error this is scope concept
}
// one();

if(true){
    const username ="Huzaifa"
    if(username === 'Huzaifa'){
        const website = "Panacloud"
        console.log(username + website)
    }
    // console.log(website)// this will give error
}

/// another concepts with function
console.log(addone(10))
function addone(num1){
        return num1 +1 
}




// This code wil note execute
console.log(addtwo(12))
const addtwo = (num1)=>{
    return num1 + 1;
}