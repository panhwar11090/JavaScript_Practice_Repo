const user={
    username : "Huzaifa",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMsg()
// console.log(this)


const chai = () =>{
    let username = "Huzaifa";
    console.log(this)
}
// chai()

const addTwo = (num1 , num2) => num1+num2


const user1 = () => ({username: "Practice"})

console.log(user1())