const myNumbers = [1,2,34,5,6,7,8];

const newNums = myNumbers.map((num)=>{
    return num +num
})
// console.log(newNums);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const chainN= myNumers
        .map((num)=>{
            return num *10
        })
        .map((num)=>num+1)
        .filter((num)=> num >= 40)
        console.log(chainN)



const myNumbers1 = [1,2,34,5,6,7,8];

const newNums1 = myNumbers.map((num)=>{
    return num * 2
})
console.log(newNums);


let strs = ["ali","ahmed","huziafa"]
const capTalize = strs.map((value)=>{
    return value.toUpperCase();
})

console.log(capTalize)


// Multiplying of indexs
let nums2 = [2,4,5,6,7,8,9]

const mulT = nums2.map((num, index)=>{
        return num * index
})
console.log(mulT)


// check even and then squre it 

const ceven = [1,2,3,4,5,6,7,8,9,10,11,12]

const checking = ceven
                .filter((num)=>{
                    if(num % 2 === 0){
                        return num
                    }
                })
                .map((num)=>{
                    return num * num
                })

                console.log(checking)