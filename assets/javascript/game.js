$(document).ready(function(){

    var patient = 100;            // Original number for us to reach
    var patientHealth = "";       // Place holder for user input
    var bottle1 = "";             // bottle1 variable, will be randomized
    var bottle2 = "";             // bottle2 variable, will be randomized
    var bottle3 = "";             // bottle3 variable, will be randomized
    var bottle4 = "";             // bottle4 variable, will be randomized

    var losses = 0;               // number of losses in a game, will be labeled ingame as malpractice
    var wins = 0;                 // number of saved patients or game wins

    var gameStarted = false;      // flag to start the game 


    //Resets the status of the game 
    $(".clearbutton").click(function() {

        var patient = 100;           
        var patientHealth = "";       
        var bottle1 = "";         
        var bottle2 = "";        
        var bottle3 = "";   
        var bottle4 = "";  

    // Generate randomized numbers for Buttons
    // bottle1 
                // generate random number
            var bottle1 = Math.floor(Math.random() * 19) +1; 

                //define button as the random number

            //need to change this to .data later
     
        console.log(this);
    });

    $(".bottle1").click(function(){



    });


  //  var bottle1 = $(".bottle1"); 

 //   $("#button1")

    // Have buttons equal randomized numbers

    // Buttons .on("click") effect patient number

    // have patient health decrease with each click

    // create patient health threshold

    // check win and check losses / update

    // lose if Game reaches 10 losses / win if game reaches 10 wins 

    // Initializer (Starts that whole dang thang)

});