function makeBigger(){
    document.getElementById("Text").style.fontSize = "24pt";
    alert("Hello, world!");
}

function moo(){
    makeUpperCase();
    addingMooToSentences();
}

function makeUpperCase(){
    var userText = document.getElementById("Text").value;
    userText = userText.toUpperCase();
    document.getElementById("Text").value = userText;
}

function addingMooToSentences(){
    var userText = document.getElementById("Text").value;
    var parts = userText.split(".");
    userText = parts.join("-Moo.")
    document.getElementById("Text").value = userText;
}

function handleChange(style){
    giveAlert(style);
    editText(style);
}

function giveAlert(style){
    if(style.value == "fancy"){
        alert("Making fancy");
    } else if (style.value == "boring"){
        alert("Making boring");
    }
}

function editText(style){
    if(style.value == "fancy"){
        document.getElementById("Text").style.fontWeight = "bold";
        document.getElementById("Text").style.color = "blue";
        document.getElementById("Text").style.textDecoration = "underline";
    } else if (style.value == "boring"){
        document.getElementById("Text").style.fontWeight = "normal";
        document.getElementById("Text").style.color = "black";
        document.getElementById("Text").style.textDecoration = "initial";
    }
}