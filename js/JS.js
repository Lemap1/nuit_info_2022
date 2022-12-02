new Personne({
    events : {
        "0" : {
            "age" : 15,
            "desc" : "Bienvenue dans *insérer le nom du jeu*. Vous incarnez une personnes qui va vivre sa vie et faire des choix qui auront un impact sur celle-ci. Ces choix sauront centré sur les relations amoureuses et la santé sexuelles. Il est possible d'ailleurs de se faire dépister en appuyant sur la touche D. N'oublier pas de faire attention au IST.",
            "propal1" : "1.1",
            "propal2" : "1.2",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "1.1" : {
            "age" : 15,
            "desc" : "Vous rencontrez un camarade au collège et tombés amoureux l'un de l'autre. Un soir vous dormez ensemble et ...",
            "propal1" : "1.3",
            "propal2" : "1.3",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "1.2" : {
            "age" : 15,
            "desc" : "Vous rencontrez une camarade au collège et tombés amoureux l'un de l'autre. Un soir vous dormez ensemble et ...",
            "propal1" : "1.3",
            "propal2" : "1.3",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "1.3" : {
            "age" : 15,
            "desc" : "Vous faites votre première fois, prenez-vous des protections ?",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "4" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "5" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "6" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "7" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "8" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "9" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "10" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "11" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "12" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "13" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "14" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "image" : "/media/image0.png"
        },
    
        "15" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "16" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "17" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "descL" : "",
            "descR" : "",
            "image" : "/media/image0.png"
        },
    
        "19" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "image" : "/media/image0.png"
        },
    
        "20" : {
            "age" : 0,
            "desc" : "",
            "propal1" : "1",
            "propal2" : "1",
            "image" : "/media/image0.png"
        }
    },
    data : {
        listISTC : [],
        listISTI : [],
        ratioHF : 50,
        intégrité : 100,
        currentEvent : "0",
        bodyCount : 0
    },
    methods:{
        keyEvent(event){

            if(event.key == 'ArrowRight'){    
                this.methods.changeEvent(events[this.data.currentEvent].propal1);            

            }else if(event.key == 'ArrowLeft'){
                this.methods.changeEvent(events[this.data.currentEvent].propal2);            

            }
        },
        changeEvent(event){
            this.currentEvent = event;
            this.intégrité -= event.intégrité;
            this.bodyCount += event.bodyCount;
        }
        
    }
});