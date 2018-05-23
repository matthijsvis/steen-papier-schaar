
var jouwkeuze = prompt("kies: steen, papier of schaar");
if (! jouwkeuze) {
    document.writeln("<p>Je hebt vals gespeeld, ververs het scherm! <br> <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></p>")
} else {
    document.writeln("<p>Je keuze is: " + jouwkeuze + "<p/>")
}

var pckeuze = Math.random();
if (pckeuze < 0.34){
    pckeuze = "steen";
} else if (pckeuze <= 0.67){
    pckeuze = "papier";
} else {
    pckeuze = "schaar";
}

document.writeln("<p>Computer: " + pckeuze + "</p>");

var vergelijk = function (keuze1, keuze2) {
    if (keuze1 === keuze2){
        return "<p> gelijk spel! <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i><p/>";
    }
    if (keuze1 === "steen"){
        if (keuze2 === "schaar"){
            return "<p> Je hebt gewonnen!<p/>";
        }else {
            return "<p> Je hebt verloren, probeer opnieuw<p/>";
        }
    }
    if (keuze1 === "papier"){
        if (keuze2 === "steen"){
            return "<p> Je hebt gewonnen!<p/>";
        }else{
            return "<p>Je hebt verloren, probeer opnieuw<p/>";
        }

    }
    if (keuze1 === "schaar"){
        if (keuze2 === "steen"){
            return "<p> Je hebt verloren, probeer opnieuw<p/>";
        } else {
            return "<p> Je hebt gewonnen!<p/>";
        }
    }
};

var resultaat = vergelijk(jouwkeuze, pckeuze);

document.write(resultaat);

