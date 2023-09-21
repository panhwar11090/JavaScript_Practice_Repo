class Employee{
    constructor(name){
        console.log(`${name} - Employes constructor is here`);
        this.name = name;
    }
    login(){
        console.log("employee has loged in");
    }

    logout(){
        console.log("employee has loged out");
    }

    requestLeaves(leaves){
        console.log(`employe has requested ${leaves} leaves -auto aproved`);
    }
}

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log("this is newly written constructor");
    }
    requestCoffee(x){
        console.log(`Employe has request ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log("one extra is granted");
    }
}

let e = new Programmer("Harry");
e.login()

e.requestLeaves(3)