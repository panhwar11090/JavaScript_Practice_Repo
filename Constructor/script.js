class RailwayForm{
    constructor(givenname, traino, address){
        console.log("Constructor called..." + givenname + " " + traino);
        this.name = givenname;
        this.traino = traino;
        this.address = address;
    }
    preview(){
        alert(this.name+ "your form is for train no" + this.traino + "and your address" + this.address);
    }

    submit(){
        alert(this.name + "your form is submited for train no" + this.traino);
    }

    cancel(){
        alert(this.name + "your form is canceled for train no" + this.traino);
        this.traino = 0;
    }
}

let huzaifaForm = new RailwayForm("huzaifa", 11090, "Karachi");

huzaifaForm.preview();
huzaifaForm.submit();
huzaifaForm.cancel();
huzaifaForm.preview();