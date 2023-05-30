function bgc(){
    document.body.style.backgroundColor = "green";
}
function vibing(){
    document.getElementById("demo").append("You are the best! keep it up!")
}
function time(){
    const date = new Date();
    document.getElementById("time").innerHTML=date;
}
function show(){
    document.getElementById("pic").src = "dice-6.png";
}
function hide(){
    document.getElementById("pic").style.visibility= "hidden";
}
function visible(){
    document.getElementById("pic").style.visibility= "visible";
}