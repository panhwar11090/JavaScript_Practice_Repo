let students = [
    { id: "001", name: "Huzaifa", sports: "Cricket" },
    { id: "002", name: "Ahsan", sports: "Basketball" },
    { id: "003", name: "Asfand", sports: "Cricket" },
    { id: "004", name: "Rashid", sports: "Basketball" },
    { id: "005", name: "Fahad", sports: "Hockey" },
];


///Maps
const names = students
    .filter((curValue)=>curValue.sports === "Cricket")
    .map((curValue,index,array)=>{
        return `<li>${curValue.name}</li>`;
    });

    const div = document.getElementById('container');

    div.innerHTML = `<ul>${names.join("")}</ul>`;






// Filter
const newArray = students.filter((curValue) =>{
    if(curValue.id % 2 == 0) return true;
    else return false;
})

console.log(newArray);