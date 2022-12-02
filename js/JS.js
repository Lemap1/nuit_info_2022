/**
 * L'ensemble des tuiles du jeu
 */
events = {
        "konami" : {
            "age" : 15,
            "desc" : "Bienvenue dans *insérer le nom du jeu*. Vous incarnez une personnes qui va vivre sa vie et faire des choix qui auront un impact sur celle-ci. Ces choix sauront centré sur les relations amoureuses et la santé sexuelles. N'oublier pas de faire attention au IST.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"KONAMICODE", 
            "risque" : 0
        },
        "0" : {
            "age" : 15,
            "desc" : "Bienvenue dans *insérer le nom du jeu*. Vous incarnez une personnes qui va vivre sa vie et faire des choix qui auront un impact sur celle-ci. Ces choix sauront centré sur les relations amoureuses et la santé sexuelles. N'oublier pas de faire attention au IST.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "1" : {
            "age" : 15,
            "desc" : "Vous etes au collège et vous commencez par être atirré par un type de personnes. Lequel ?",
            "propal1" : "1.1",
            "propal2" : "1.2",
            "descL" : "homme",
            "descR" : "femme",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "1.1" : {
            "age" : 15,
            "desc" : "Vous rencontrez un camarade au collège. Voulez-vous sortez sortir avec cette personne ?",
            "propal1" : "1.3",
            "propal2" : "2",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "1.2" : {
            "age" : 15,
            "desc" : "Vous rencontrez une camarade au collège. Voulez-vous sortez sortir avec cette personne ?",
            "propal1" : "1.3",
            "propal2" : "2",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0 
        },
    
        "1.3" : {
            "age" : 15,
            "desc" : "Vous sortez maintenant avec cette personne depuis plusieurs mois. Voulez-vous faire votre première fois.",
            "propal1" : "1.4",
            "propal2" : "1.9",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0 
        },
    
        "1.4" : {
            "age" : 15,
            "desc" : "Vous faites votre première fois, comptez vous utiliser des préservatifs ?",
            "propal1" : "1.9",
            "propal2" : "1.9bis",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "1.9" : {
            "age" : 15,
            "desc" : "La personne avec qui vous sortez ne vous trouve pas assez entreprenant. Vous vous faites larguer.",
            "propal1" : "2",
            "propal2" : "2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            "intégrité": 0 ,
            "titre":"UwU", 
            "risque" : 0
        },

        "1.9bis" : {
            "age" : 15,
            "desc" : "La personne avec qui vous sortez ne vous trouve pas assez entreprenant. Vous vous faites larguer.",
            "propal1" : "2",
            "propal2" : "2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            "intégrité": -10,
            "titre":"UwU", 
            "risque" : 0
        },
    
        "2" : {
            "age" : 18,
            "desc" : "Vous venez de finir votre lycée sans avoir et rentrez maintenant à l'université. ",
            "propal1" : "2.1",
            "propal2" : "2.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.1" : {
            "age" : 18,
            "desc" : "En rentrant vous rencontrez quelqu'un. Cette personne vous propose d'aller soit au bar, soit au restaurant ",
            "propal1" : "2.r",
            "propal2" : "2.b",
            "descL" : "aller au restaurant",
            "descR" : "aller au bar",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.r" : {
            "age" : 18,
            "desc" : "Vous en apprenez un peu plus sur cette personne. à la fin de votre repas vous partez chacun de votre coté. Cela restera une nouvelle connaissance au plus.",
            "propal1" : "3",
            "propal2" : "3",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.b" : {
            "age" : 18,
            "desc" : "Vous allez ensemble en boite et dansez pendant plusieurs heures. Vous rentrez tout les deux ensembles.",
            "propal1" : "2.b.1",
            "propal2" : "2.b.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.b.1" : {
            "age" : 18,
            "desc" : "Une fois arrivé chez vous, la discussion devient plus torride et vous commencez à vous diriger vers le lit.",
            "propal1" : "2.b.2",
            "propal2" : "2.b.2",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.b.2" : {
            "age" : 18,
            "desc" : "La personne vous informe qu'elle n'est pas à l'aise avec les moyens de contraceptions et propose de faire sans.",
            "propal1" : "2.b.3",
            "propal2" : "2.b.4",
            "descL" : "accepter de faire sans",
            "descR" : "insister pour en utiliser",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "2.b.3" : {
            "age" : 18,
            "desc" : "Vous passez une bonne nuit ensemble mais sans utiliser de moyens de contraceptions.",
            "propal1" : "3.1",
            "propal2" : "3.1",
            "descL" : "aller au restaurant",
            "descR" : "aller au bar",
            "image" : "/media/image0.png",
            "intégrité": -25,
            "titre":"UwU", 
            "risque" : 0
        },

        "2.b.4" : {
            "age" : 18,
            "desc" : "Vous passez une bonne nuit emsemble tout en étant bien protégés.",
            "propal1" : "3.1",
            "propal2" : "3.1",
            "descL" : "aller au restaurant",
            "descR" : "aller au bar",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.1" : {
            "age" : 20,
            "desc" : "La soirée d'intégration a lieu ce soir. Vous avez le choix d'y aller afin de découvrir les personnes qui font parti de votre promo et peut de faire de nouvelles rencontres. Ou vous pouvez passer une soirée tranquillement chez vous.",
            "propal1" : "2.2",
            "propal2" : "4",
            "descL" : "Aller à la soirée d'intégration.",
            "descR" : "Rester tranquillement chez vous.",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.2" : {
            "age" : 20,
            "desc" : "Vous êtes à la soirée d'intégration et d'autres étudiants vous proposent des shots. Les prenez vous ?",
            "propal1" : "3.3",
            "propal2" : "",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.3" : {
            "age" : 20,
            "desc" : "vous commencez à etre un peu soul et vous pouvez reprendre d'autres shots. Les prenez vous ?",
            "propal1" : "3.4",
            "propal2" : "3.9",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            "intégrité": -5,
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.4" : {
            "age" : 20,
            "desc" : "Vous êtes completement soul. Le black out est assuré. Voulez-vous continuer de boire ?",
            "propal1" : "3.5",
            "propal2" : "3.6",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            "intégrité": -5,
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.5" : {
            "age" : 20,
            "desc" : "Vous avez tellement bu que vous faites un coma éthilique.",
            "propal1" : "-1.alcool",
            "propal2" : "-1.alcool",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.6" : {
            "age" : 20,
            "desc" : "Vous vous levez le lendemain matin sans vous souvenir de ce qu'il c'est passé. En tournant la tête vous vous trouvez à coté de quelqu'un que vous ne connaissez pas ou du moins vous ne vous souvenez pas avoir rencontré cette personne. Vous partez sans rien dire.",
            "propal1" : "3.9",
            "propal2" : "3.9",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "3.9" : {
            "age" : 20,
            "desc" : "Vous rentrer chez vous après la soirée d'intégration.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "4" : {
            "age" : 25,
            "desc" : "Vous avez finit vos études, et vous rechercher la personne avec qui vous voulez passer votre vie.",
            "propal1" : "4.P",
            "propal2" : "4.A",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
    
        "4.P" : {
            "age" : 25,
            "desc" : "Vous tombez sur la personne avec qui vous souhaitez passer votre vie. vous apprenez à vous connaitre et commencer à vivre ensemble",
            "propal1" : "4.P.1",
            "propal2" : "4.P.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
        
        "4.P" : {
            "age" : 25,
            "desc" : "Vous tombez sur la personne avec qui vous souhaitez passer votre vie. vous apprenez à vous connaitre et commencer à vivre ensemble",
            "propal1" : "4.P.1",
            "propal2" : "4.P.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "4.P.1" : {
            "age" : 25,
            "desc" : "Vous passez beaucoup de temps à faire des gros calins avec votre partenaires. Vous protégez-vous ?",
            "propal1" : "4.P.2",
            "propal2" : "4.P.3",
            "descL" : "se protéger",
            "descR" : "Ne pas se protéger",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "4.P.2" : {
            "age" : 25,
            "desc" : "Vous Continuer à passer du temps avec votre partenaire et pensez à former une famille.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
        
        "4.P.3" : {
            "age" : 25,
            "desc" : "Vous Continuer à passer du temps avec votre partenaire et pensez à former une famille.",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 1
        },
    
        "4.A" : {
            "age" : 25,
            "desc" : "Vous errez sur des applications de rencontres et ne trouvez pas votre âme soeur",
            "propal1" : "4.A.1",
            "propal2" : "4.A.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "4.A.1" : {
            "age" : 25,
            "desc" : "Vous passez souvent du temps avec des personnes que vous avez rencontrer. Comptez-vous vos protéger si vous avez des rapports avec ces personnes ?",
            "propal1" : "4.A.2",
            "propal2" : "4.A.3",
            "descL" : "oui",
            "descR" : "non",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "4.A.2" : {
            "age" : 25,
            "desc" : "vous avez passer du bon temps sur les reseaux mais vous comptez arreter afin de trouver quelqu'un d'en votre vie",
            "propal1" : "4.A.1",
            "propal2" : "4.A.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },
        
        "4.A.3" : {
            "age" : 25,
            "desc" : "vous avez passer du bon temps sur les reseaux mais vous comptez arreter afin de trouver quelqu'un d'en votre vie",
            "propal1" : "4.A.1",
            "propal2" : "4.A.1",
            "descL" : "suivant",
            "descR" : "suivant",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 1
        },
    
        
        
        "-1.alcool" : {
            "age" : 20,
            "desc" : "Personne ne vous voit faire un Coma éthilique. Vous mourrez.",
            "propal1" : "end",
            "propal2" : "end",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        //les fins possibles
        //c'est rien passé (bonne santé)
        //choppé héppatite b
        //héppatite b + autre
        //sida
        //
        // 
        "f1" : {
            "age" : 50,
            "desc" : "Votre état de santé est parfait, vous n'avez pas attrapé aucune IST et MST, vous vous êtes bien protégé, felicitation !",
            "propal1" : "end",
            "propal2" : "end",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
            "risque" : 0
        },

        "f2" : {
            "age" : 50,
            "desc" : "",
            "propal1" : "end",
            "propal2" : "end",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png",
            
            "titre":"UwU", 
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
        
        if(events[data.currentEvent].risque == 1){
            getMst();
        }

        if(event == "f2"){
            description = "Malheureusement vous avez attrapé     : "
            listIST.forEach(IST => {
                description += " " + IST;
            });
            events["f2"].desc = description
        }

        document.getElementById('desc').innerHTML = "<p>" + events[data.currentEvent].desc + "</p>";
        document.getElementById('gauche').innerHTML = "<p>" + events[data.currentEvent].descL + "</p>";
        document.getElementById('droite').innerHTML = "<p>" + events[data.currentEvent].descR + "</p>";
        document.getElementById("img").innerHTML = "<img src='" + events[data.currentEvent].image+"'>" ;
        document.getElementById("titre").innerHTML = "<h1>" + events[data.currentEvent].titre+"</h1>" ;
}

function getMst(){
    if(Math.random()> 0.5){
        mst = {"VIH"  : 0.1, "Hépatite B" : 0.3, "Syphilis" : 0.2, "Chlamydiae" : 0.1, "Herpès génital" : 0.1, "Papillomavirus" : 0.1, "Gonococcie" : 0.1};
        pick = Math.random();
        if(pick <= 0.1){
            data.listIST.push("VIH");
        }else if(pick <= 0.4){
            data.listIST.push("Hépatite B");
        }else if(pick <= 0,6){
            data.listIST.push("Syphilis");
        }else if(pick <= 0,7){
            data.listIST.push("Chlamydiae");
        }else if (pick <= 0,8){
            data.listIST.push("Herpès génital");
        }else if(pick <= 0,9){
            data.listIST.push("Papillomavirus");    
        }else{
            data.listIST.push("Gonococcie");     
        }
    }
}

konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

konamiCodeCount = 0;

document.documentElement.addEventListener("keydown", (event) => {
    console.log(event.key);
    
    if(konamiCode[konamiCodeCount] == event.key){
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