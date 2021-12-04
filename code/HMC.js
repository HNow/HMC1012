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
var playerScore=0;
var serverScore=0;
var countToWinner=0;
//this variable decides how many rounds the game will be out of ^

var url = "http://localhost:3000/post";

function processChoice(n){

    $.post(
        url+'?data='+JSON.stringify({
        
        'playChoice':n, 
        'playerScore':playerScore, 
        'serverScore':serverScore,
        'result':result,
        'roundCount':roundCount
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


var roundWinner=resultCheck(win,playerChoice,serverChoice);
alert(roundWinner);

    }


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




















// var url = "http://localhost:3000/post";
// var boolT=true;
// function test(){

//     $.post(url+'?data='+JSON.stringify({
//         'val':"boolT" 
//         }),
// response);

// }

// function response(data){
//     var response = JSON.parse(data);

//     var keykey=response['key'];


//     if(keykey==false){

//         alert("FALSE");
//     }

//     else if (keykey==true){

//         alert("TRUE");
//     }

// }







