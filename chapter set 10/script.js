


let n =  prompt("plz add your note")
localStorage.setItem("note", n)


let g =  localStorage.getItem("note")
alert("your note is  saved" + n)

let c = confirm("do you want to delete the note ");
if(c){
    localStorage.removeItem("note");
    alert("your note is delted succefully")
}

