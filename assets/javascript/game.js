// INPUT

var answers = ["annika", "spot", "picard", "pike", "bones", "roddenberry", "futile", "baseball", "doctor", "coffee"];
var tricorder = ["Seven-of-Nine's human name.", "Data's cat", "Captain of the USS Enterprise-D?", "First Captain to appear in The Original Series", "McCoy's nickname", "Creator of Star Trek", " 'We are Borg! Resistance is ________' ", "Captain Sisko's favorite sport", "Name of Voyager's doctor", "Janeway's famous line - 'there's ________ in that nebula!'"];

var computerGuess = "";
var letters = [];
var totalBlanks = 0;
var underscore = [];
var redalert = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;

function wordGuess() {
    computerGuess = answers[Math.floor(Math.random() * answers.length)];

    letters = computerGuess.split("");

    totalBlanks = letters.length;

    for (var i=0; i < totalBlanks; i++){
        underscore.push("_");
    }

    document.getElementById("underscores").innerHTML = " " + underscore.join(" ");
        console.log(computerGuess);

        
}