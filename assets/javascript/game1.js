$(document).ready(function(){

    //score that player must reach 
    var patientsHealth = Math.floor(Math.random()*100 +1); 

    //scoreboard
    var wins = 0;
    var lifesLeft = 4; 


    //value of the randomized buttons
    var bottle1 = Math.floor(Math.random() * 9 + 1);
    var bottle2 = Math.floor(Math.random() * 9 + 1);
    var bottle3 = Math.floor(Math.random() * 9 + 1);
    var bottle4 = Math.floor(Math.random() * 9 + 1);

    //Puts the score board up
    $("#health").text(patientsHealth);
    $("#saved").text(wins);
    $("#lost").text(lifesLeft);
});