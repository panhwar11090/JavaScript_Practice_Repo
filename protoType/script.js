let  a = {
    name1:"Huzaifa",
    language : "JavaScript",
    // run: () =>{
    //     alert("self run");
    // }
}
// console.log(a);

let p = {
    run:()=>{
        alert("run");
    }
}

p.__proto__ = {
    name2 : "Dost"
}

a.__proto__ = p
a.run();
console.log(a.name1);
