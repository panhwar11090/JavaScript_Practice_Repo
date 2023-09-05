
const f = () =>{
    try {
        let a = 0;
        console.log("program ran suceccfulyy");
        return
    } catch (error) {
        console.log("this is an error");
        console.log(p);
    }
    finally{
        console.log("i am good boy");
    }
}

f()
console.log("End");