



var winState=0;
var playerScore=0;
var roundCount=0;
var serverScore=0;

const { request } = require('express')
var express = require('express');
var app = express();


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);
    var serverChoice=Math.floor(Math.random() * 3);

    if (z['playChoice']== serverChoice){
        winState=0;
      //result value of 0 is a tie
    roundCount++;
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

    winState=-1;
serverScore++;
roundCount++;
console.log(z);
}

var serverChoiceText=toRPS(serverChoice);
var playerChoiceText=toRPS(z['playChoice']);



var jsontext = JSON.stringify({
    'result':winState, 
        'playerScore':playerScore,
        'roundCount':roundCount, 
        'serverScore': serverScore,
        'serverChoice': serverChoiceText,
        'playerChoice': playerChoiceText
});
console.log(jsontext);
res.end(jsontext);

}).listen(3000);
console.log("Server is running!");

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


