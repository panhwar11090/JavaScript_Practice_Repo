// const obj = {
//     name:'huzaifa',
//     age:23,
//     // address:{
//     //     city:'Karachi',
//     //     country:'Pakisan'
//     // }
// }
// console.log("huza")
// console.log(obj?.address?.city);

let arr = ['Huzaifa','Ali','ahsan','asfand'];
arr = arr.map((v,i)=> `${v.charAt(0)?.toUpperCase()}${v?.slice(1)?.toLowerCase()}`);
console.log(arr)
// console.log(arr.filter(v => v?.toLocaleLowerCase() === 'ali' || v?.toLocaleLowerCase() === 'huzaifa'));

// console.log(arr.indexOf('asfand'))

var sen = 'My name is Huzaifa and ahsan is my freind';
console.log(sen.slice(sen.indexOf('Huzaifa') !== -1 ? sen.indexOf('huzaifa'):0 ));