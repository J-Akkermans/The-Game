var startPrompt = prompt("Ben je klaar om de game te spelen? \n Beantwoord met ja of nee").toLowerCase();

if(startPrompt === "ja"){
    console.log("Level 1"); //LEVEL 1.0
    alert("Je bent aangespoeld op het strand nadat je op een boot zat die gezonken is");
    var question = prompt("Wat ga je doen? Zoeken naar Levensmiddelen of Overlevenden \n bantwoord met levensmiddelen of overlevenden").toLowerCase();
    if(question == "levensmiddelen"){
        console.log("Level 2.0");  //LEVEL 2
        alert("Je hebt 10 levensmiddelen gevonden");
        question = prompt("Je bedenkt een volgende stap. Ga je zoeken naar overlevenden of ga je rusten? \n Beantwoord met overlevenden of uitrusten").toLowerCase();
        if(question == "uitrusten"){
            console.log("LEVEL 3.0"); //LEVEL 3
            alert("Je bent levensmiddelen kwijtgeraakt tijdens het rusten.");
            question = prompt("Je hebt er meerdere verloren, je in het begin vond je er 10. Hoeveel heb je er nog?");
            question = parseInt(question);
            if(question => 7){
                console.log("Level 4.0 (FINAL)");//Level 4.0 (FINAL)
                alert("Je wilt van het eiland af, en maakt een sos teken");
                if(question != 50){
                    console.log("//Level 5.0 (WON)") //Level 5.0 (WON)
                    alert("Je hebt gewonnen");
                } else{
                    console.log("//Level 5.0 (LOST)") //Level 5.0 (LOST)
                    alert("Je hebt verloren! \n Try again")
                    location.reload()
                }
            }else if(question < 7){
                //Level 4.0 (END).
                alert("Helaas heb je te weinig over om te overleven. \n Try again.");
                location.reload();
            }
            
        }else if (question == "overlevenden"){
            console.log("LEVEL 3.0"); //LEVEL 3
            alert("Je hebt een vriend gemaakt op het eiland.");
            question = prompt("Hij wilt graag dat jij je levensmiddelen deelt. Hoeveel deel jij? \n Je hebt 10 levensmiddelen.");
            if(question <= 4){
                console.log("Level 4.0 (END)"); //Level 4 (END).
                alert("Helaas heb je te weinig over om te overleven. \n Try again.");
                location.reload();
            }else if(question > 4){
                //Level 4.0 (FINAL)
               question =  prompt("Je wilt van het eiland af, en maakt een sos teken \n Kies aantal stenen dat je gebruikt! 25, 50, 75 of 100.");
                question = parseInt(question);
                if(question != 50){
                    console.log("//Level 5.0 (WON)") //Level 5.0 (WON)
                    alert("Je hebt gewonnen");
                } else{
                    console.log("//Level 5.0 (LOST)") //Level 5.0 (LOST)
                    alert("Je hebt verloren! \n Try again")
                    location.reload()
                }
            }
        }
    } else if(question == "overlevenden"){
        console.log("Level 2.1"); //Level 2.1
        alert("Je hebt een vriend gemaakt op het eiland");
        question = prompt("Ga je zoeken naar levensmiddelen of ga je uitrusten? \n Beantwoord met levensmiddelen of uitrusten").toLowerCase();
        if(question == "levensmiddelen"){
            console.log("Level 3");//LEVEL 3
            alert("Je vind levensmiddelen samen met je vriend vinden jullie 16 levensmiddelen.");
            question = prompt("Je wilt zelf meer hebben omdat jij hem heb geholpen hij denkt er anders over. \n Hij gaat rusten, jij steelt van zijn 10 pillen hoeveel pak je er?");
            question = parseInt(question);
            if(question => 5){
                console.log("Level 4"); //LEVEL 4 (END).
                alert("Je hebt teveel gestollen en hij merkt het en is boos. Je raakt in een gevecht en verliest. \n Try again");
                location.reload();
            } else if (question < 5){
               console.log("level 4 FINAL") //Level 4.0 (FINAL)
                alert("Je wilt van het eiland af, en maakt een sos teken");
                question = prompt("Wil je gebruik maken van 50 kleine stenen of 25 grote?");
                question = parseInt(question);
                if(question != 50){
                    console.log("//Level 5.0 (WON)") //Level 5.0 (WON)
                    alert("Je hebt gewonnen");
                } else{
                    console.log("//Level 5.0 (LOST)") //Level 5.0 (LOST)
                    alert("Je hebt verloren! \n Try again")
                    location.reload()
                }
            }
            }else if(question == "uitrusten"){
            console.log("Level 3 END");//LEVEL 3 (END).
            alert("Helaas heb je vriend wilt niet dat je zo lui bent!. \n Try again.");
            location.reload();
        }
    }else if(startPrompt === "nee"){
        location.reload();
    }

}




