var gameWords = ["letter","hangman","project", "internet", "university","human","programmer"];
var chosenGameWord;
var gameWordSplit;
var tries = 0;
var maxTry = 6;
var validGuess= 0;
var chCount = 0;
var elements;

function displayWord(){

chCount =  $('.wordChar').size();
if(chCount!=0){
return;
}
chosenGameWord = gameWords[getRandomNumber()];
var chars = chosenGameWord.split('');
gameWordSplit = chosenGameWord.split('');
for(i = 0; i < chars.length; i++)
  {
      var r = $('<div class="wordChar" value="'+ chars[i]+'"/>');
            $("#wordContainer").append(r);
          }
  elements = document.getElementsByClassName('wordChar');
}



function revealLetter(elem){

var value = elem.value;
var guess = false;
for(y = 0 ; y < chosenGameWord.length; y++)
{
if(gameWordSplit[y] == value.toLowerCase()){
  validateElement(y,value);
  guess = true;

}
}

if(guess == true) checkForWin();
else failed();
}

function failed(){
tries++;
drawMistake();
if (tries == maxTry){
var fConf = window.confirm("You have LOST the game!\nWould you like to try again ?");

if(fConf) reloadGame();
else return;
}
else return;
}

function validateElement(pos, value){
  var position = pos;

  var elements = document.getElementsByClassName('wordChar');
if(elements[position].innerHTML!=value){
    validGuess++;
    elements[position].innerHTML = value;
}
else return;

}

function checkForWin(){

  if(validGuess==chosenGameWord.length){
  var conf = window.confirm("You have WON the game!\nWould you like to try again ?");
  if(conf){
  reloadGame();
  }
  else return;
  }

}

function getRandomNumber(){
var number = Math.floor((Math.random() * gameWords.length));
return number;
}

function reloadGame(){
   tries = 0;
   validGuess= 0;
   chCount = 0;
   $('.wordChar').remove();
   displayWord();
   var ctx = $('#canvas')[0].getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   return
}

function drawHead(){
var ctx = $('#canvas')[0].getContext("2d");
ctx.beginPath();
ctx.arc(150,52,50,0,2*Math.PI);
ctx.stroke();
}

function drawMistake(){
  if(tries==1) drawHead();

//draw body
  else if (tries==2) {
    var ctx = $('#canvas')[0].getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 280);
    ctx.stroke();
  }
  //draw left hand
  else if(tries==3){
    var ctx = $('#canvas')[0].getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150, 120);
    ctx.lineTo(80, 200);
    ctx.stroke();
  }
  //draw right hand
  else if (tries==4) {
    var ctx = $('#canvas')[0].getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150, 120);
    ctx.lineTo(220, 200);
    ctx.stroke();

  }
//draw left leg
  else if (tries==5) {
    var ctx = $('#canvas')[0].getContext("2d");
    ctx.beginPath();
    ctx.moveTo(150, 280);
    ctx.lineTo(40, 280);
    ctx.stroke();

  }
    //draw right leg
    else if (tries==6) {
      var ctx = $('#canvas')[0].getContext("2d");
      ctx.beginPath();
      ctx.moveTo(150, 280);
      ctx.lineTo(600, 100);
      ctx.stroke();

    }

}
