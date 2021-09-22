const names = [];
const names2 = [];
var nimiaViela = 10;

function namePrinter() {
    if (names.length < 10) {
        names.push(document.getElementById("uniqueID").value);
        nimiaViela -= 1;
        document.getElementById("nimia").innerHTML = "lisaa " + nimiaViela + " nimeä vielä";
    }
    else if (names.length == 10) {
        let text = "<ul>";
        names.forEach(spare);
        text += "</ul>";
        document.getElementById("a").innerHTML = text;
    
        function spare(value) {
            text += "<li>" + value + "</li>";
        }
        document.getElementById("nimia").innerHTML = "";
    }
}

function addName() {
    names2.push(document.getElementById("uniqueID2").value);
    let text = "<ul>";
    names2.forEach(spare);
    text += "</ul>";
    document.getElementById("b").innerHTML = text;

    function spare(value) {
        text += "<li>" + value + "</li>";
    }
}

function removeName() {
    var i = document.getElementById("uniqueID2").value;
    names2.splice(i-1, 1);
    let text = "<ul>";
    names2.forEach(spare);
    text += "</ul>";
    document.getElementById("b").innerHTML = text;

    function spare(value) {
        text += "<li>" + value + "</li>";
    }
}

function sortNames() {
    names2.sort();
    let text = "<ul>";
    names2.forEach(spare);
    text += "</ul>";
    document.getElementById("b").innerHTML = text;

    function spare(value) {
        text += "<li>" + value + "</li>";
    }
}

