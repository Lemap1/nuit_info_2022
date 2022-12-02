/**
 * L'ensemble des tuiles du jeu
 */
events = {
        "konami" : {
            "age" : 15,
            "desc" : "Bienvenue dans The Rainbow Life ! Vous incarnez une personnes qui va vivre sa vie et faire des choix qui auront un impact sur celle-ci. Vos choix vont colorer l'arc-en-ciel de votre vie, ils seront centrés sur les relations amoureuses et la santé sexuelle. N'oubliez pas de faire attention au MST et IST.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/konami.gif",
            
            "titre":"KONAMICODE", 
            "risque" : 0
        },
        "0" : {
            "age" : 15,
            "desc" : "Bienvenue dans The Rainbow Life ! Vous incarnez une personnes qui va vivre sa vie et faire des choix qui auront un impact sur celle-ci. Vos choix vont colorer l'arc-en-ciel de votre vie, ils seront centré sur les relations amoureuses et la santé sexuelle. N'oubliez pas de faire attention au MST et IST.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/logoPlatyPus.png",
            
            "titre":"Introduction", 
            "risque" : 0
        },

        "1" : {
            "age" : 15,
            "desc" : "Vous êtes au collège et vous commencez à être atiré par un type de personnes. Lequel ?",
            "propal1" : "1.1",
            "propal2" : "1.2",
            "descL" : "homme",
            "descR" : "femme",
            "image" : "img/carte1.jpg",
            
            "titre":"Départ", 
            "risque" : 0
        },
    
        "1.1" : {
            "age" : 15,
            "desc" : "Vous rencontrez un camarade au collège. Voulez-vous sortir avec cette personne ?",
            "propal1" : "1.3",
            "propal2" : "2",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte1.1.jpg",
            "titre" : "Première interaction" ,
            "risque" : 0
        },
    
        "1.2" : {
            "age" : 15,
            "desc" : "Vous rencontrez une camarade au collège. Voulez-vous sortir avec cette personne ?",
            "propal1" : "1.3",
            "propal2" : "2",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte1.2.jpg",
            "titre":" Premier amour ?", 
            "risque" : 0 
        },
    
        "1.3" : {
            "age" : 15,
            "desc" : "Vous êtes en couple depuis plusieurs mois. Voulez-vous faire votre première fois.",
            "propal1" : "1.4",
            "propal2" : "1.9",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte1.3.jpg",
            "titre":" Première relation",
            "risque" : 0 
        },
    
        "1.4" : {
            "age" : 15,
            "desc" : "Vous faites votre première fois, comptez vous utiliser des préservatifs ?",
            "propal1" : "1.9",
            "propal2" : "1.9bis",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte1.4.jpg",
            "titre":"Première fois", 
            "risque" : 0
        },
    
        "1.9" : {
            "age" : 15,
            "desc" : "La personne avec qui vous sortez ne vous trouve pas assez entreprenant. Elle met un terme à votre relation..",
            "propal1" : "2",
            "propal2" : "2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte1.9.jpg",
            "intégrité": 0 ,
            "titre":" Rupture", 
            "risque" : 0
        },

        "1.9bis" : {
            "age" : 15,
            "desc" : "La personne avec qui vous sortez ne vous trouve pas assez entreprenant. Elle met un terme à votre relation..",
            "propal1" : "2",
            "propal2" : "2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte1.9.jpg",
            "titre":" Rupture", 
            "risque" : 1
        },
    
        "2" : {
            "age" : 18,
            "desc" : "Vous venez de finir votre lycée et rentrez maintenant à l'université. ",
            "propal1" : "2.1",
            "propal2" : "2.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte2.jpg",
            "titre":" Fin du lycée", 
            "risque" : 0
        },

        "2.1" : {
            "age" : 18,
            "desc" : "Sur le chemin du retour, vous rencontrez quelqu'un. Cette personne vous propose de sortir en boite ou d'aller au restaurant.",
            "propal1" : "2.r",
            "propal2" : "2.b",
            "descL" : "aller au restaurant",
            "descR" : "aller au bar",
            "image" : "img/carte2.1.jpg",
            "titre":" Rendez-vous", 
            "risque" : 0
        },

        "2.r" : {
            "age" : 18,
            "desc" : "Vous en apprenez un peu plus sur cette personne. Votre échange est très fructuant. A la fin de votre repas vous partez chacun de votre coté. Cela restera une nouvelle connaissance tout au plus.",
            "propal1" : "3.1",
            "propal2" : "3.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte2.r.jpg",
            "titre":" Bonne rencontre", 
            "risque" : 0
        },

        "2.b" : {
            "age" : 18,
            "desc" : "Vous allez ensemble en boite et dansez pendant plusieurs heures. Vous rentrez tout les deux ensembles tout en échangeant sur vos passions.",
            "propal1" : "2.b.1",
            "propal2" : "2.b.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte2.b.jpg",
            
            "titre":" Soirée", 
            "risque" : 0
        },

        "2.b.1" : {
            "age" : 18,
            "desc" : "Une fois arrivé chez vous, la discussion devient plus torride et vous commencez à vous diriger vers le lit.",
            "propal1" : "2.b.2",
            "propal2" : "2.b.2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte2.b.1.jpg",
            "titre": "Un moment torride",
            "risque" : 0
        },

        "2.b.2" : {
            "age" : 18,
            "desc" : "Votre partenaire vous informe qu'elle n'est pas à l'aise avec les moyens de contraceptions et propose de faire sans.",
            "propal1" : "2.b.3",
            "propal2" : "2.b.4",
            "descL" : "accepter de faire sans",
            "descR" : "insister pour en utiliser",
            "image" : "img/carte2.b.2.jpg",
            
            "titre":" Contraception ?", 
            "risque" : 0
        },

        "2.b.3" : {
            "age" : 18,
            "desc" : "Vous passez une chaude et bonne nuit ensemble, sans utiliser de moyens de contraceptions.",
            "propal1" : "3.1",
            "propal2" : "3.1",
            "descL" : "aller au restaurant",
            "descR" : "aller au bar",
            "image" : "img/carte2.b.3.jpg",
              "titre":"Sans protection", 
          "risque" : 1
        },

        "2.b.4" : {
            "age" : 18,
            "desc" : "Vous passez une chaude et bonne nuit emsemble tout en étant bien protégés.",
            "propal1" : "3.1",
            "propal2" : "3.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte2.b.3.jpg",
            "titre":" Bien protégés", 
            "risque" : 0
        },
    
        "3.1" : {
            "age" : 20,
            "desc" : "La soirée d'intégration a lieu ce soir. Vous avez le choix d'y aller afin de découvrir les personnes qui font parti de votre promo et peut être de faire de nouvelles rencontres. Ou vous pouvez passer une soirée tranquillement chez vous.",
            "propal1" : "3.2",
            "propal2" : "4",
            "descL" : "Soirée d'intégration.",
            "descR" : "Rester tranquillement chez vous.",
            "image" : "img/carte.3.1.jpg",
            
            "titre":" Soirée d'intégration ?", 
            "risque" : 0
        },
    
        "3.2" : {
            "age" : 20,
            "desc" : "Vous êtes à la soirée d'intégration, d'autres étudiants qui vous semblent amicaux vous proposent des shots. Les prenez vous ?",
            "propal1" : "3.3",
            "propal2" : "3.9",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte.3.2.jpg",
            
            "titre":"Alcool", 
            "risque" : 0
        },
    
        "3.3" : {
            "age" : 20,
            "desc" : "Votre tête commence à tourner, vous commencez à etre un peu soul. Les mêmes personnes vous proposent de reprendre d'autres shots. Les prenez vous ?",
            "propal1" : "3.4",
            "propal2" : "3.9",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte.3.2.jpg",
            "titre":" Continuer ?", 
            "risque" : 0
        },
    
        "3.4" : {
            "age" : 20,
            "desc" : "Vous êtes completement soul. Le black out est assuré. Ces personnes que vous considérez comme des amis maintenant, vous tendent de nouveaux shots. Voulez-vous continuer de boire ?",
            "propal1" : "3.5",
            "propal2" : "3.6",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte.3.2.jpg",
            "titre":" Au delà de soul ?", 
            "risque" : 0
        },
    
        "3.5" : {
            "age" : 20,
            "desc" : "Vous avez tellement bu que vous vous effondrez. Vos amis sont dans le même état.",
            "propal1" : "-1.alcool",
            "propal2" : "-1.alcool",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.3.2.jpg",
            "titre":" Coma éthylique", 
            "risque" : 0
        },
    
        "3.6" : {
            "age" : 20,
            "desc" : "Vous vous levez le lendemain matin sans vous souvenir de ce qu'il s'est passé. En tournant la tête vous remarque que vous êtes à coté de quelqu'un que vous ne connaissez pas. Du moins vous ne vous souvenez pas avoir rencontré cette personne. Vous partez sans rien dire.",
            "propal1" : "3.9",
            "propal2" : "3.9",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.3.6.jpg",
            "titre":" Blackout", 
            "risque" : 1
        },
    
        "3.9" : {
            "age" : 20,
            "desc" : "Vous rentrer chez vous après la soirée d'intégration.",
            "propal1" : "4",
            "propal2" : "4",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.3.9.jpg",
            "titre":" Fin de soirée tranquille",
            "risque" : 0
        },
    
        "4" : {
            "age" : 25,
            "desc" : "Vous avez fini vos études, et vous recherchez la personne avec qui vous voulez passer votre vie. Vous avez le choix entre aller au parc ou bien installer une application de rencontre.",
            "propal1" : "4.P",
            "propal2" : "4.A",
            "descL" : "aller au parc",
            "descR" : "installer l'application",
            "image" : "img/carte.4.jpg",      
            "titre":" Fin d'études",
            "risque" : 0
        },

        "4.P" : {
            "age" : 25,
            "desc" : "Miracle ou non, vous tombez sur la personne que vous cherchiez. Vous apprenez à vous connaitre et commencer à vivre ensemble",
            "propal1" : "4.P.1",
            "propal2" : "4.P.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.P.jpg",
            "titre":"Ame soeur", 
            "risque" : 0
        },
        

        "4.P.1" : {
            "age" : 25,
            "desc" : "Vous passez beaucoup de temps à faire des tendres calins avec votre partenaires. Vous protégez-vous ?",
            "propal1" : "4.P.2",
            "propal2" : "4.P.3",
            "descL" : "se protéger",
            "descR" : "Ne pas se protéger",
            "image" : "img/carte.4.P.1.jpg",
            "titre": "Protections ?", 
            "risque" : 0
        },

        "4.P.2" : {
            "age" : 25,
            "desc" : "Vous continuez à passer du temps avec votre partenaire. Une idée traverse votre esprit à tous les deux: former une famille.",
            "propal1" : "5",
            "propal2" : "5",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.P.2.jpg",
            
            "titre":" Famille", 
            "risque" : 0
        },
        
        "4.P.3" : {
            "age" : 25,
            "desc" : "Vous continuez à passer du temps avec votre partenaire. Une idée traverse votre esprit à tous les deux: former une famille.",
            "propal1" : "5",
            "propal2" : "5",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.P.3.jpg",
            
            "titre":"Famille", 
            "risque" : 1
        },
    
        "4.A" : {
            "age" : 25,
            "desc" : "Vous errez sur des applications de rencontres et ne trouvez pas votre âme soeur",
            "propal1" : "4.A.1",
            "propal2" : "4.A.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.A.jpg",
            
            "titre":"Appli de rencontres", 
            "risque" : 0
        },

        "4.A.1" : {
            "age" : 25,
            "desc" : "Vous passez souvent du temps avec des personnes que vous avez rencontré. Comptez-vous vous protéger si vous avez des rapports avec ces personnes ?",
            "propal1" : "4.A.2",
            "propal2" : "4.A.3",
            "descL" : "oui",
            "descR" : "non",
            "image" : "img/carte.4.a.1.jpeg",
            
            "titre":"Protections ?", 
            "risque" : 0
        },

        "4.A.2" : {
            "age" : 25,
            "desc" : "Vous avez passé du bon temps sur les réseaux mais vous comptez arreter afin de trouver quelqu'un dans votre vie",
            "propal1" : "5",
            "propal2" : "5",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.A.2.jpg",
            
            "titre":"Stop réseaux", 
            "risque" : 0
        },
        
        "4.A.3" : {
            "age" : 25,
            "desc" : "vous avez passé du bon temps sur les reseaux mais vous comptez arreter afin de trouver quelqu'un dans votre vie",
            "propal1" : "5",
            "propal2" : "5",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.4.A.3.jpg",
            
            "titre":" Stop réseaux", 
            "risque" : 1
        },

        "5" : {
            "age" : 30,
            "desc" : "Vous avez maintenant 30 ans et votre vie devient plus stable",
            "propal1" : "f",
            "propal2" : "f",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "img/carte.5.jpg",  
            "titre":" La trentaine", 
            "risque" : 1
        },
        "-1.alcool" : {
            "age" : 20,
            "desc" : "Vous faites un coma éthylique sans même vous en apercevoir. La vie vous quitte... Pour recommencer faîtes f5",
            "propal1" : "end",
            "propal2" : "end",
            "descL" : "",
            "descR" : "",
            "image" : "img/carte.-1.alcool.jpg",
            "titre":" Mort", 
            "risque" : 0
        },

        "f" : {
            "age" : 50,
            "desc" : "",
            "propal1" : "f",
            "propal2" : "f",
            "descL" : "Fin",
            "descR" : "Fin",
            "image" : "img/carte.5.jpg",
            "titre":"Fin", 
            "risque" : 0
        }
    }
data = {
        listIST : [],
        currentEvent : "0",
    }

/**
 * Permet de changer de tuile en détectant la touche
 * @param event la touche appuyée(gauche ou droit)
 */
function changeEvent(event){
        data.currentEvent = event;
        
        console.log(events[data.currentEvent].risque);

        if(events[data.currentEvent].risque == 1){
            getMst();
        }

        if(event == "f"){
            description = "Malheureusement vous avez attrapé     : "
            if(data.listIST.length == 0){
                description = "Bravo vous vous êtes bien occupé de vous !";
            }else{
                data.listIST.forEach(IST => {
                    description += IST;
                });
            }
            events["f"].desc = description + "<br> Si vous n'aviez pas remarqué 'd' permet de se faire dépister et vous permet de prendre conscience des IST que vous avez obtenu au cours de votre vie. Pour recommencer faîtes f5"
        }

        document.getElementById('desc').innerHTML = "<p>" + events[data.currentEvent].desc + "</p>";
        document.getElementById('gauche').innerHTML = "<p>" + events[data.currentEvent].descL + "</p>";
        document.getElementById('droite').innerHTML = "<p>" + events[data.currentEvent].descR + "</p>";
        document.getElementById("img").innerHTML = "<img src='" + events[data.currentEvent].image+"'>" ;
        document.getElementById("titre").innerHTML = "<h1>" + events[data.currentEvent].titre+"</h1>" ;
}

function getMst(){
    if(Math.random()> 0.2){
        mst = {"VIH"  : 0.1, "Hépatite B" : 0.3, "Syphilis" : 0.2, "Chlamydiae" : 0.1, "Herpès génital" : 0.1, "Papillomavirus" : 0.1, "Gonococcie" : 0.1};
        pick = Math.random();
        if(pick <= 0.1 && !data.listIST.includes("VIH")){
            data.listIST.push("VIH");
        }else if(pick <= 0.4 && !data.listIST.includes("Hépatite B")){
            data.listIST.push("Hépatite B");
        }else if(pick <= 0,6 && !data.listIST.includes("Syphilis")){
            data.listIST.push("Syphilis");
        }else if(pick <= 0,7 && !data.listIST.includes("Chlamydiae")){
            data.listIST.push("Chlamydiae");
        }else if (pick <= 0,8 && !data.listIST.includes("Herpès génital")){
            data.listIST.push("Herpès génital");
        }else if(pick <= 0,9 && !data.listIST.includes("Papillomavirus")){
            data.listIST.push("Papillomavirus");    
        }else if(!data.listIST.includes("Gonococcie")){
            data.listIST.push("Gonococcie");     
        }
    }
}

konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

konamiCodeCount = 0;

document.documentElement.addEventListener("keydown", (event) => {
    console.log(event.key);
    
    if(event.key == 'd'){
        depistage();
    }else if(konamiCode[konamiCodeCount] == event.key){
        konamiCodeCount ++;
        if(konamiCodeCount == 10){
            data.listIST = [];
            changeEvent("konami");
        }
    }else if(event.key == 'ArrowLeft'){
        changeEvent(events[data.currentEvent].propal1);            
    }else if(event.key == 'ArrowRight'){
        changeEvent(events[data.currentEvent].propal2);            
    }
})

etat = "hidden";

function depistage() {
    if(etat == "hidden") {
        document.getElementById('depistage').style.visibility='inherit';
        etat = "show";
    } else {
        document.getElementById('depistage').style.visibility='hidden';
        etat = "hidden";
    }
    description = "Malheureusement vous avez attrapé     :";

    if(data.listIST.length == 0){
        description = "Bravo vous vous êtes bien occupé de vous !";
    }else{
        data.listIST.forEach(IST => {
            description += " " + IST;
        });
    }
    
    data.listIST.forEach(IST => {
        description +=  "<li>" + IST + "</li>";
    });
    var txt="<p>" + description + "</p>";
    document.getElementById('depistage').innerHTML=txt;
};
