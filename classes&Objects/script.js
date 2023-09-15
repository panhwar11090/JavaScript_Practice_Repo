class RailwayForm{
    submit(){
        alert(this.givenname + ": your form is submitted for train no: " + this.trainno);
    }
    cancel(){
        alert(this.givenname + ": this form is canceld for train no: " + this.trainno);
    }
    fill(givenname, trainno){
        this.givenname= givenname;
        this.trainno = trainno;
    }
}

//create a form fro huzaifa
let huzaifaform = new RailwayForm();
// fil the form for huzaifa
huzaifaform.fill("huzaifa", 11090)

//create a form fro ahsan
let ahsanform = new RailwayForm();
let ahsanform1 = new RailwayForm();
// fil the form for ahsan details
ahsanform.fill("ahsan", 11091)
ahsanform1.fill("ahsan", 11092)

huzaifaform.submit();
ahsanform.submit();
ahsanform1.submit();
ahsanform.cancel();