function generateRandomChoice() {
    const choices = ['S','W','G'];
    const randomIndex= Math.floor(Math.random() * choices);
    return choices[randomIndex];
}


let i;
const coomputerch = generateRandomChoice();

// let userch= prompt("plzz enter your choice");
// if(userch == 's' || userch == 'w' || userch == 'g' || userch == 'S' || userch == 'W' || userch == 'G' ||){

//     if(userch == 'g' && coomputerch =='S' || userch == 'w' && coomputerch =='G'){
//         alert("YOU WIN");
//         break;
//     }else if(userch == 'g' && coomputerch =='G' || userch == 's' && coomputerch =='S' || userch == 'w' && coomputerch =='W' ){
//         alert("draw")
//         break;
//     }else{
//         alert("lose")
//     }
// }else{
//     alert("plz enter only w s g");
// }
do{
    let userch= prompt("plzz enter your choice");
    if(userch == 's' || userch == 'w' || userch == 'g' || userch == 'S' || userch == 'W' || userch == 'G' ){

        if(userch == 'g' || coomputerch =='S' || userch == 'w' && coomputerch =='G'){
            alert("YOU WIN");
            break;
        }else if(userch == 'g' && coomputerch =='G' || userch == 's' && coomputerch =='S' || userch == 'w' && coomputerch =='W' ){
            alert("draw")
            break;
        }else{
            alert("lose")
        }
    }else{
        alert("plz enter only w s g");
    }

}while(i<5)