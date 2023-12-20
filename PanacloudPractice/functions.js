function logginUserMsg (username = "default user"){
    if(!username){
        console.log("plzz enter a username")
        return;
    }else{
        return `${username} just logged in`
    }

}

// console.log(logginUserMsg(username = "Ali"))


function calculateCartPrice(val1,val2, ...num1){
    return`this is num1${num1} this val1${val1} this val2${val2}`;
}
// console.log(calculateCartPrice(200,300,400,500,600));

const user ={
    username : "huzaifa",
    price: 150
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleObject({
    username:"SAM",
    price: 399
})

const arr1 = [100,200,300,400,500];
function getSecend(val){
    return val[1]
}

console.log(getSecend(arr1));