try {
    let age = prompt("plz ente ryour age");
    age = Number.parseInt(age);
    if(age>150){
        throw new ReferenceError("this probably not true")
    }
} catch (error) {
    console.log(error.name);
    console.log(error.messsage);
    console.log(error.stack);
}

console.log("the script is still runing");