class Animal{
    constructor(name){
        this._name = name;
    }

    fly(){
        console.log("Mai ud raha ho");
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name= newName;
    }
}

class Rabbit extends Animal{
    eatCarrtot(){
        console.log("eacting carot");
    }
}
let a = new Rabbit("bruno")
a.fly();
console.log(a.name);
a.name = "hzuaifa";
console.log(a.name);
let c = 56;

console.log(a instanceof Animal);
console.log(a instanceof Rabbit);
console.log(c instanceof Animal);