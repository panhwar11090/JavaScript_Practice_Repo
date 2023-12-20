const mySym = Symbol("Key1")

const JsUser = {
    name:"Huzaifa",
    age : 23,
    [mySym]: "myKey1",
    "isfiler": "yes",
    location: "Karachi",
    isLoggedIn : false,
    lastLoginDat: ["Monday","Tuesday"]
}

// console.log(JsUser["name"]);
// console.log(JsUser.name);
// console.log(JsUser.isfiler);
// console.log(JsUser["isfiler"])
// console.log(typeof JsUser[mySym])

// JsUser.name = "Ahsan";
// console.log(JsUser.name)
// Object.freeze(JsUser);
// JsUser.age = 21;
// console.log(JsUser.age)

JsUser.greting= function(){
    console.log("Hello Js User")
}

JsUser.gretingTwo = function(){
    console.log(`Hello JS user, ${this.name} `)
}

// console.log(JsUser.greting());
// console.log(JsUser.gretingTwo());



// const careem = {}
// careem.id = "123abc"
// careem.name = "samy";
// careem.isLoggedInn = false;

// console.log(careem);

// const regularUser = {
//     email: "axampla@.com",
//     fullname:{
//         userfullname:{
//             fisrtname: "Huzaifa",
//             lastname: "Ahmed",
//             age: 24
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.age);

const obj1 = {1 : "a", 2:"b"}
const obj2 = {3 : "a", 4:"b"}
const obj3 = {5 : "a", 6:"b"}

// // const obj4 = {obj1,obj2}
const obj4 = Object.assign({},obj1,obj2)

// // const obj4 = {...obj1,...obj2}
// console.log(obj4)

const user =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com",
        "password" : "1234"
    },
    {
        id:3,
        email:"f@gmail.com"
    },
]
console.log(user[1].password)
// console.log(Object.keys(tinder));
console.log(Object.keys(user))
// console.log(Object.values(tinder));
console.log(Object.values(user))

const course = {
    coursename :  "Javascript",
    price: "100",
    teacher :" Fahad"
}

// const {coursename,price} = course
// console.log(price)