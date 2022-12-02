var etat = "hidden";

var depistage = function (event) {
    if (event.key == 'd') {
        if(etat == "hidden") {
            document.getElementById('depistage').style.visibility='inherit';
            etat = "show";
        } else {
            document.getElementById('depistage').style.visibility='hidden';
            etat = "hidden";
        }
        var data="<p>vous avez un VIH </p>";
        document.getElementById('depistage').innerHTML=data;
    }
};

document.addEventListener('keypress', depistage, false);