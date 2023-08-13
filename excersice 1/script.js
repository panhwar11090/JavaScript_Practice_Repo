function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min +1) + min;
}

let a;
let b;
do{
    a = prompt("plzz enter a number");
    a= Number.parseInt(a);
    b = Math.round(getRandomArbitrary(1,100));
    if(a==b){
    console.log("congo");
    }else{
        console.log("not matched");
    }
    console.log(b);
}while(a!=b)
    
