
//Q1 AND Q2
let a1 = prompt("plzz enter ypur age");
a1  = Number.parseInt(a);
let retry1= true;
const checkDrivee = (a)=>{
    return a>=18?true:false;
}


do{
    let a = prompt("plzz enter ypur age");
    a  = Number.parseInt(a);
    if (checkDrivee(a)) {
        alert("you can drive");
    }else{
        alert("you can not drive");
    }
    retry1 = confirm("do you want play again")
}while(retry1==true)


//Q3

let a = prompt("plzz enter ypur age");
a  = Number.parseInt(a);
let retry= true;
const checkDrive = (a)=>{
    return a>=18?true:false;
}
do{
    let a = prompt("plzz enter ypur age");
    a  = Number.parseInt(a);
    if (checkDrive(a)) {
        alert("you can drive");
    }else{
        console.error("YOU CAN NOT DRIVE");
    }
    retry = confirm("do you want play again")
}while(retry==true)

//Q5:

let col = prompt("if you want yelow plz write yes");

if(col== 'yes'){
    document.body.style.backgroundColor = "yellow";
}else{
    alert("plz try again");
}

//q4


let num = prompt("plzz enter number grater than 4 ");
num = Number.parseInt(num);

if(num>4){
    location.href="https://google.com";
}else{
    console.log("plzz try agian");
}



