// class Complex{
//     constructor(real, imaginnary){
//         this.real = real;
//         this.imaginnary = imaginnary;
//     }
//     add(num){
//         this.real = this.real + num.real
//         this.imaginnary = this.imaginnary + num.imaginnary
//     }

//     get real(){
//         return this._real;
//     }

//     get imaginnary(){
//         return this._imaginary;
//     }

//     set real(newReal){
//         this._real = newReal;
//     }
//     set imaginnary(newImaginary){
//         this._imaginary = newImaginary;
//     }
// }

// let a = new Complex(2,4);
// console.log(a.real , a.imaginnary);
// a.real = 10;
// a.imaginnary = 10
// let b = new Complex(6,2);
// a.add(b);
// console.log(`${a.real}+${a.imaginnary}`);


class Human{
    constructor(name, favfood){
        this.name=name;
        this.favfood;
    }
    walk(){
        console.log(`${this.name} Human is walking`);
    }
}

class Student extends Human{
    walk(){
        console.log(`${this.name} student is walking`);
    }
}

let o = new Student("Harray","chicken")
o.walk();

console.log(o instanceof Human);