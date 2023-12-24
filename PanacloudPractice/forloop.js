let num = 7;

for(let i = 1; i<=10;i++){

   let mul = num *i;
    if(mul % 2 ==0){
        
        console.log(`${num} * ${i} = ${num * i} even`);
    }else{
        console.log(`${num} * ${i} = ${num * i} odd`);
    }

}


for(let i =0 ; i<= 5 ; i++){
    for(let j=1 ; j<=7; j++ ){
        let spaces = j - 2;
        
        console.log(spaces + "*" + spaces);
    }
    for(let k = 1 ; k<=7 ;k++){
        console.log("*")
    }
}


for(let i=0; i<=100 ; i++){
    if(i % 3 === 0  && i % 5 === 0  ){
        console.log(i + " " + "FizzBuzz")
    }else if(i % 3 === 0 ){
        console.log(i + " " + " Fizz ")
    }else if(i % 5 === 0 ){
        console.log(i + " " + "Buzz")
    }else{
        console.log(i)
    }
}



let num = 10;
let fact=1;

for(let i =1 ; i<= num; i++){
      fact *= i; 
     
}
console.log(fact)


for(let i =0 ; i<=100 ; i++){
    if(i % 1 ===0 || i % i ===0){
        console.log(i + "prime")
    }else{
        console.log(i + "not prime")
    }
}