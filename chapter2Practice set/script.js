//Q1 
const age1 = 11;
if(age1<=9){
    console.log("child");
}else if(age1>=10 && age1<20){
    console.log("age is between 10 to 19");
}else if(age1>=20 ){
    console.log("age is greater than 20 or equal to 20");
}

//Q2

const age = 19;

switch(age){
    case 21:
        console.log("huzaifa");
        break;
    case 19:
        console.log("ahsan");   
        break;
    default:
        console.log("all boys");
}

//Q3

let num = 29;

if(num % 2 ==0){
    console.log("number is divisible by 2");
}else if(num % 3 == 0){
    console.log("Number is divisible by 3");
}else{
    console.log("dimagh shart hoaya he");
}


//Q4
const num1 = 25;
if(num1%2 ==0 || num1 % 3 == 0 ){
    console.log("number is divisible");
}
else{
    console.log("its not divisible");
}

//Q5

const age2 = 16;

if (age2 > 18) {
    console.log("you can drive");
    
} else {
    console.log("you cant");
    
}