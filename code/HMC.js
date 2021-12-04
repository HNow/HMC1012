function playRedirect(){
    window.location.href = "gamePage.html";
}
function aboutRedirect(){
    window.location.href = "aboutpage.html";

}
function homeRedirect(){
    window.location.href = "homepage.html";
}


var roundCount=0;
var result=0;
//
var playerScore=0;
//tracks player score
var serverScore=0;
//tracks server score
var countToWinner=0;
//this variable decides how many rounds the game will be out of ^

var url = "http://localhost:3000/post";

function processChoice(n){

    $.post(
        url+'?data='+JSON.stringify({
        
        'playChoice':n
        
        }),
        response);
    }

    function response(data){
//result value of 0 is a tie, -1 is a loss, 1 is a win

var response = JSON.parse(data);
    console.log(data);

    var win=response['result'];
    var playerCount=response['playerScore'];
    var serverCount=response['serverScore'];
    var roundCounter=response['roundCount'];
    var serverChoice=response['serverChoice'];
    var playerChoice=response['playerChoice'];
    var roundWinner=response['alertTextForWin'];
    var playerSB=response['playerSB'];
    var serverSB=response['serverSB'];


//alerts the user of who won the round and what each side chose
alert(roundWinner);

//alters the scoreboard on screen to reflect best of 3 match wins
document.getElementById("scoreTrack").innerHTML="Player: "+playerSB+" Server: "+serverSB;

    }


