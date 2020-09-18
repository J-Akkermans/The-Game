//Start
var startPrompt = prompt("Ben jij klaar om het avontuur aan te gaan?\n beantwoord dit met Ja of Nee");

if (startPrompt === "Ja") {
    alert("Je bent aangespoeld op het strand nadat je op een boot zat die gezonken is");
    var question = prompt("Wat ga je doen? Zoeken naar Levensmiddelen of Overlevenden \n bantwoord met levensmiddelen of overlevenden");
    question.toLowerCase();
    if (question === "levensmiddelen") {
        alert("Je hebt 10 levensmiddelen gevonden");
        question = prompt("Je bedenkt een volgende stap. Ga je zoeken naar overlevenden of ga je rusten? \n Beantwoord met overlevenden of uitrusten");
        question.toLowerCase();
        if (question == "overlevenden") {
            alert("Je hebt een vriend gemaakt op het eiland");
            question = prompt("hij ziet dat je 10 levensmiddelen heeft en vraagt of je deze wilt delen \n Beantwoord met hoeveel jij er wilt delen");
            parseInt(question);
            if (question <= 4) {
                alert("je vriend is boos op je geworden en heeft je vermoord om niet de helft te delen \n Try again");
                location.reload;
            } else {
                alert("je vriend is blij en deelt zijn eten met jou!");
                question = prompt("Je gaat eten je hebt 3 bananen hoeveel eet je er? \n Beantwoord met een cijfer tussen 0-3");
                parseInt(question);
                if (question != 1) {
                    alert("je hebt teveel eten op \n Try again");
                    location.reload;
                } else {
                    alert('Je hebt genoeg eten over');
                    question = prompt("Je gaat een sos teken maken in het zand. Pak je 100 kleine stenen of 50 grote? \n Beantwoord met 50 of 100");
                    parseInt(question);
                    if (question < 100) {
                        alert("Omdat je grote stenen koos heb je niet genoeg voor een sos teken ook heb je geen energie meer om verder te gaan \n Try again");

                    } else {

                        alert("je hebt succesvol een sos teken gemaakt!");
                        question = prompt("Je komt erachter dat je vriend loog tegen je en ook levensmiddelen heeft wat doe je? \n Beantwoord met vechten of negeren");
                        question.toLowerCase();
                        if (question == "vechten") {
                            alert("Je hebt te veel energie verspilt aan het gevecht jullie zijn beide uigeput en overleden \n Try again");
                        } else if (question == "negeren") {
                            //final
                            alert("Final");
                        }
                    }
                }
            }
        } else if (question == "uitrusten") {
            alert("Je bent uitgerust om op onderzoek te gaan!");
            question = prompt("Ga je zoeken naar een grot of overlevenden \n Beantwoord met Overlevenden of Grot \n Beantwoord met grot of overlevenden");
            question.toLowerCase();
            if (question !== "grot") {
                alert('Je hebt een vriend gevonden die veel spullen heeft en deelt met jou!');
               question = prompt("Je vertrouwt je gemaakte vriend niet helemaal en besluit zijn spullen te bekijken hij betrapt je. Wat zeg je? \n Beantwoord met leugenaar of zoeken");
                question.toLowerCase()
               if(question == "leugenaar"){
                   alert("je vriend is boos op je en loopt weg met zijn spullen. \n Try again");

               }
               else if(question == "zoeken"){
                   alert("je vriend helpt je zoeken naar iets");
                   //FINAL
                   alert("Final");
               }

            } else {
                alert("je bent in de grot gevallen \n Try again");
                location.reload;
            }
        }
    } else if (question === "overlevenden") {
        alert("Je hebt een vriend gemaakt op het eiland");
        question = prompt("Ga je zoeken naar levensmiddelen of ga je uitrusten? \n Beantwoord met levensmiddelen of uitrusten");
        question.toLowerCase();
        if (question == "levensmiddelen") {
            alert("Je hebt 10 levensmiddelen gevonden!");
            question = prompt("Je gemaakte vriend wilt dat je dit deelt, deel jij? \n Beantwoord met hoeveel jij er deelt");
            parseInt(question);
            if (question >= 5) {
                alert("je vriend is blij en deelt zijn eten met jou!");
                question = prompt("Je gaat een sos teken maken in het zand. Pak je 100 kleine stenen of 50 grote? \n Beantwoord met 50 of 100");
                parseInt(question);
                if (question < 99) {
                    alert("Je hebt te veel energie verspilt aan de grote rotsen \n Try again");
                    location.reload;
                } else {
                    alert("Je vriend komt niet meer terug van zijn onderzoek.");
                    question = prompt("Ga jij je vriend zoeken of blijf je je zitten \n Beantwoord met zoeken of zitten");
                    question.toLowerCase();
                    if(question == "zoeken"){
                        alert("je bent opgegeten door een canibaal die in het bos zat \n Try again");
                        location.reload();
                    }
                    else if(question == "zitten"){
                    //FINAL
                   alert("Final");
                    }
                }
            } else {
                alert("je vriend is boos op je geworden en heeft je vermoord om niet de genoeg gedeeld heb \n Try again");
                location.reload;
            }
        } else if (question == "uitrusten") {
            alert("Je vriend heeft je vermoord in je slaap omdat je hem niet wou helpen. \n Try again");
            location.reload;
        }
    }




} else {
    location.reload();
}