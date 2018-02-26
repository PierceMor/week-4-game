$(document).ready(function(){

    var computerPatient = [
        "assets/images/anime.png", 
        "assets/images/bacta-tank1.jpg", 
        "assets/images/lego.png",
        "assets/images/otherPatient.jpg", 
        "assets/images/sickKid.png",
    ];

    //represents players input
    var player = 0;

    //scoreboard
    var wins = 0;
    var patientsKilled = 0; 

    function pictureTime() {
        //picks patients picture
        var thePatient = computerPatient[Math.floor(Math.random() * computerPatient.length)];
        $("#patient").html("<img class='img-fluid img-thumbnail' alt='Luke In Bacta Tank' src=" + thePatient + ">")

        
        //working text
        //    $("#patient").append("<img src=" + thePatient + ">");
        //$('#patient').html('<img src="assets/images/anime.png"/>')
        console.log(thePatient);
        console.log(this);
      //  document.patient.src = computerPatient[thePatient];
    }

    //gets a new game 
    function newGame() {
        
        pictureTime();


        // Zeroes out player score 
        player = 0; 

        //score that player must reach 
        var patientsHealth = Math.floor(Math.random()* 101 + 19); 

        //value of the randomized buttons
        var bottle1 = Math.floor(Math.random() * 11 + 1);
        var bottle2 = Math.floor(Math.random() * 11 + 1);
        var bottle3 = Math.floor(Math.random() * 11 + 1);
        var bottle4 = Math.floor(Math.random() * 11 + 1);

            //Puts the score board up
            $("#health").text(patientsHealth);
            $("#playerScore").text(player);
            $("#saved").text(wins);
            $("#lost").text(patientsKilled);

        //Atempt at simplifying the code and making less redundant
        //   $("#bottle1", "#bottle2", "#bottle3", "#bottle4").on('click', function(){
        //      player = player + bottle1, bottle2, bottle3, bottle4; 
        //      console.log("current score" + player);
        //      $("#playerscore").text(player + bottle1, bottle2, bottle3, bottle4);
        //   });
            


        //redundent code, has to be a simpler way 
        //function for first button
        $("#bottle1").click(function(){

            //adds the randomize number to players score upon button press
            //button will be logged onto console and added to HTML
            player = player + bottle1; 
            console.log(bottle1);
            $("#playerScore").text(player);

            if (player === patientsHealth){
                wins ++;
                newGame();
            } else if ( player > patientsHealth){
                patientsKilled++; 
                newGame();
            }

        });

        //function for 2nd button
        $("#bottle2").click(function(){

            player = player + bottle2;
            console.log(bottle2);
            $("#playerScore").text(player);

            if (player === patientsHealth){
                wins ++;
                newGame();
            } else if ( player > patientsHealth){
                patientsKilled++; 
                newGame();
            }
        });
        

        //function for 3rd button
        $("#bottle3").click(function(){

            player = player + bottle3;
            console.log(bottle3);
            $("#playerScore").text(player);

            if (player === patientsHealth){
                wins ++;
                newGame();
            } else if ( player > patientsHealth){
                patientsKilled++; 
                newGame();
            }

        });

        //function for the last button
        $("#bottle4").click(function(){

            player = player + bottle4;
            console.log(bottle4);
            $("#playerScore").text(player);

            if (player === patientsHealth){
                wins ++;
                newGame();
            } else if ( player > patientsHealth){
                patientsKilled++; 
                newGame();
            }

        });
            
    $("#clearButton").click(function(){
        newGame();
    });

        //have players score equal the patients "Health"
     //   if (player === patientsHealth){
     //       wins ++;
     //       newGame();
     //   } else if ( player > patientsHealth){
    //        patientsKilled++; 
     //       newGame();
   //     }
    }
    newGame();
});