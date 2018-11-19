document.getElementById("Burger").onclick = function() {messageBox()};

function messageBox(){
    var desc;
    desc = "Insert description here"
    document.getElementById("Burger").innerHTML = desc;
}