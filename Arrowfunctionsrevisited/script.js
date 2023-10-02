
const sayHello = name => {
    console.log("good morn" + " " + name);

}

sayHello("huzaifa")


const x = {
    name:"ALI",
    role:"rect js developer",
    age: 25,
    show: function(){
        // let that = this;
        setTimeout(()=> {
            console.log(`name is${this.name} and role is ${this.role}`);    
        }, 2000);
        
    }
}

x.show();