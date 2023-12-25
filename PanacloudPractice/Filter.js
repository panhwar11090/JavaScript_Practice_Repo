const myNums = [1,2,3,,4,5,6,7,8,9];

// const myNums1 = myNums.filter((num) =>{
//     return num >= 7
// })
// console.log(myNums1)

const newNums = [];
const pushing = myNums.filter((num)=>{
    if(num> 4){
        newNums.push(7)
    }
})

console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook = books.filter((bk)=>
     bk.genre === "Science"
)

userBook= books.filter((bk) =>{
    return bk.publish >=2000 && bk.genre === "History"
})

console.log(userBook)
// console.log(userBook)



/// Practice Question

const userData = [
    {
        name : "Huzaifa",
        age: 23
    },
    {
        name : "Ali",
        age: 17
    },
    {
        name : "Ahsab",
        age: 22
    },
    {
        name : "Fahad",
        age: 11
    },
    {
        name : "Qasim",
        age: 18
    },
    {
        name : "Moiz",
        age: 25
    },
]

const filters = userData.filter((data)=>{
    if(data.age >= 18){
        return data;
    }
})
console.log(filters)




const strs = ["Huzaifa","ali", "Majid","farukh"]
const filterstrs = strs.filter((value)=>{
    if(value.length > 3){
        return value
    }
})
console.log(filterstrs)


