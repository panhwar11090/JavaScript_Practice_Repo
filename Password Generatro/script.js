class Password{
    constructor(){
        console.log("Welcom to password generator");
        this.pass = ""
    }
    generatePassword(len){
        let chars = "absbdgfsjhglopiyeuiuqewzzxmnchgfyt";
        let numbers = "1234567890";
        let special = "!@#$%^&*()_<>?:'{}[]|";

        if(len < 3){
            console.log("your pass word should atleast 3 char long");
        }
        else{
            let i = 0;
            while(i < len){
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special[Math.floor(Math.random() * special.length)];
                i += 3;
            }
            this.pass = this.pass.substring(0,len)
            return this.pass;
        }
    }
}

let p = new Password();

console.log(p.generatePassword(5));