async function huzaifa(){
    let karachiW = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("21 deg")
        }, 2000);
    })

    let lahoreW = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("27 deg");
        }, 5000);
    })
    console.log("karachi weather is fetching");
    let khiW = await karachiW;
    console.log("khi wa=eather is fetched " + khiW);
    console.log("karachi weather is fetching");
    let lhW = await lahoreW;
    console.log("lhr waeather is fetched " + lhW);
    return [lahoreW,karachiW];

}

const cherra = async ()=>{
    console.log("i am cherry");
}

const apnaF = async () =>{
    let a = await huzaifa();
    let b = await cherra();
    
}

let a1 = apnaF();

