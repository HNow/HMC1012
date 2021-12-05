function playRedirect(){
    window.location.href = "gamePage.html";
}
function aboutRedirect(){
    window.location.href = "aboutpage.html";

}
function homeRedirect(){
    window.location.href = "homepage.html";
}

function greenTheme(){
   document.body.style.backgroundImage = "url('images/greenBG.svg')" ;
   document.body.style.backgroundSize="cover";
   document.getElementById("rock").style.backgroundColor="#C3C57F";
   document.getElementById("scissors").style.backgroundColor="#C3C57F";
   document.getElementById("paper").style.backgroundColor="#C3C57F";
   document.getElementById("aboutPageRedirect").style.backgroundColor="#C3C57F";
}

function blueTheme(){
    document.body.style.backgroundImage = "url('images/blueBG.svg')" ;
    document.body.style.backgroundSize="cover";
    document.getElementById("rock").style.backgroundColor="#363636";
    document.getElementById("scissors").style.backgroundColor="#363636";
    document.getElementById("paper").style.backgroundColor="#363636";
    document.getElementById("aboutPageRedirect").style.backgroundColor="#363636";
}

function mochaTheme(){
    document.body.style.backgroundImage = "url('images/mochaBG.svg')" ;
    document.body.style.backgroundSize="cover";
    document.getElementById("rock").style.backgroundColor="#24141c";
    document.getElementById("scissors").style.backgroundColor="#24141c";
    document.getElementById("paper").style.backgroundColor="#24141c";
    document.getElementById("aboutPageRedirect").style.backgroundColor="#24141c";
}

var playMode;
//tracks single vs two player modes

function twoP(){

playMode=2;
document.getElementById("scoreTrack").innerHTML="Player One: 0 Player Two: 0";
console.log(playMode);
document.getElementById('twoPlayer').style.display="none";
document.getElementById('onePlayer').style.display="block";


}

function oneP(){

    playMode=1;
    document.getElementById("scoreTrack").innerHTML="Player One: 0 Server: 0";
    console.log(playMode);
    document.getElementById('twoPlayer').style.display="block";
    document.getElementById('onePlayer').style.display="none";

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

//if(playMode==1){


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



