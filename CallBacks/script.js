// callbacks

function loadScript(src , callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("load scxript with src " + src);
        callback(null,src);
    }
    script.onerror = function () {
        console.log("this is the error" + src);   
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);

}

function helloWorld(error,src){
    if(error){
        console.log(error);
        return
    }
    alert("hello world" + src);
}

function goodMorning(){
    alert("good mornig");
}


loadScript("https://cdn.jsdelivrdsf.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", helloWorld);