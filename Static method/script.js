class Animal{
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        console.log(`Animal is ${ this.name } is walking`);
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let j = new Animal("donkey");
j.walk();