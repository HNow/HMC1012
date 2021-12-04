



var winState=0;//tracks win state OF PLAYER for each round, -1=loss, 0=draw (round does not count for), 1=win
var playerScore=0;//tracks player score during rounds, resests after each match of 3 games
var roundCount=0;//tracks number of rounds
var serverScore=0;//tracks server score during rounds, resests after each match of 3 games
var playerSBDisplay=0;//tracks wins for matches of three for player
var serverSBDisplay=0;//tracks wins for matches of three for sever

const { request } = require('express')
var express = require('express');
var app = express();


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    //very important line of code which removes CORS error by allowing external server access 
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    //parsing data sent from POST request 
    var serverChoice=Math.floor(Math.random() * 3);
    //gernates random choice for servers move

    if (z['playChoice']== serverChoice){
        winState=0;
      //result value of 0 is a tie
    console.log(z);
    }
//all conditions below are for when the player wins
//if they are not met it is assumed that they lost
else if(z['playChoice']==0&&serverChoice==1){
    winState=1;
    playerScore++;
    roundCount++;
    console.log(z);
}


else if(z['playChoice']==2&&serverChoice==0){

    winState=1;
    playerScore++;
    roundCount++;
    console.log(z);
}


else if(z['playChoice']==1&&serverChoice==2){
    winState=1;
    playerScore++;
    roundCount++;
    console.log(z);
}

else{
//only runs if player win conditions are not met 
    winState=-1;
    //win state of -1 means a loss
serverScore++;
roundCount++;
console.log(z);
}

var serverChoiceText=toRPS(serverChoice);//stores the servers choice as text for displaying
var playerChoiceText=toRPS(z['playChoice']);//stores the players choice as text for displaying
var alertTextForWin=resultCheck(winState,playerChoiceText, serverChoiceText); //generates the string which alerts the user their choice, the servers choice, and the outcome of the round


//if statement only executes if the game has been decided by winning 2 rounds in a row or the 3 round limit is reached
if (roundCount%3==0||playerScore==2||serverScore==2){
bestOfThree(playerScore,serverScore);
roundCount=0;//resetting round count 

}

//creating array of server side data for return to client side
var jsontext = JSON.stringify({
    'result':winState, 
        'playerScore':playerScore,
        'roundCount':roundCount, 
        'serverScore': serverScore,
        'serverChoice': serverChoiceText,
        'playerChoice': playerChoiceText,
        'alertTextForWin': alertTextForWin,
        'playerSB': playerSBDisplay,
        'serverSB': serverSBDisplay
});
console.log(jsontext);//logging json text in the console for tracing any errors
res.end(jsontext);//sends back the data in jsontext

}).listen(3000);//port number
console.log("Server is running!");//logging to console that the server is running,look for this in the console if you arent sure that the server is actually working 

//converts a 0 to rock, 1 to scissors, and 2 to paper
function toRPS(a){

if(a==0){

    return("Rock");

}

else if(a==1){
    return("Scissors");

}

else {

    return("Paper");

}


}

//creates the strings for display to the user 
function resultCheck(a,playerChoice,serverChoice){


    if (a==-1){

        return("You picked "+playerChoice+ " and the server picked "+serverChoice+". You lose");
    }

    else if (a==1){

        return("You picked "+playerChoice+ " and the server picked "+serverChoice+". You Win!");

    }

    else{

        return("You picked "+playerChoice+ " and the server picked "+serverChoice+". Its a draw!");
    }

}

//logic for the best of three system which also resets the player scores and round tracker after a match win or loss
function bestOfThree(pScore,sScore){

    if(pScore>sScore){
playerSBDisplay++;
playerScore=0;
serverScore=0;
return(playerSBDisplay,serverSBDisplay);


    }

    else if(pScore<sScore){

        serverSBDisplay++;
        playerScore=0;
        serverScore=0;
        return(playerSBDisplay,serverSBDisplay);  
        
    }


}