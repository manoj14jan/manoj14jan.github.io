window.onload = function () {
    "use strict";
    // put all of your code here

}

function bigger() {
    setInterval(() => {
        var el = document.getElementById("textid");
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        var fontSize = parseInt(style);
        el.style.fontSize = (fontSize + 2) + 'pt';
    }, 500)
}


function bling() {
    if (document.getElementById("bling").checked) {
        document.getElementById("textid").style.fontWeight = "bold";
        document.getElementById("textid").style.color = "green";
        document.getElementById("textid").style.textDecoration = "underline";
        document.getElementById("textid").style.backgroundImage = "url('hundred-dollar-bill.jpg')";
    } else {
        document.getElementById("textid").style.fontWeight = "normal";
        document.getElementById("textid").style.color = "black";
        document.getElementById("textid").style.textDecoration = "none";
        document.getElementById("textid").style.backgroundImage = "none";
    }

}


function pigLatin() {

    str = document.getElementById("textid").value.toLowerCase();

    var n = str.search(/[aeiuo]/);
    switch (n) {
        case 0: str = str + "way"; break;
        case -1: str = str + "ay"; break;
        default:
            str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    document.getElementById("textid").value = str;
}

function malkovich() {
    strArray = document.getElementById("textid").value.split(" ")
    let valueAarry = strArray.map(ele => ele.length >= 5 ?"Malkovich":ele)

    document.getElementById("textid").value =  valueAarry.toString();
}