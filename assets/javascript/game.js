// INPUT

var answers = ["annika", "spot", "picard", "pike", "bones", "roddenberry", "futile", "baseball", "doctor", "coffee"];
var questions = ["What is Seven-of-Nine's human name?", "What does Data name his cat?", "What is the last name of the Captain of the USS Enterprise-D?", "Who was the first Captain to appear in The Original Series (hint: he's on Discovery)", "What is Dr. McCoy's nickname?", "Creator of Star Trek: Gene ______________", " 'We are Borg! Resistance is ________' ", "What is Captain Sisko's favorite sport", "Name of Voyager's doctor", "Janeway's famous line: 'there's ________ in that nebula!'"];

var computerGuess = "";
var letters = [];
var totalBlanks = 0;
var underscore = [];
var lettersPlayed = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//start game
function wordGuess() {
    //answer chosen at random from answers array
    computerGuess = answers[Math.floor(Math.random() * answers.length)];

    //create a new array for letters
    letters = computerGuess.split("");

    totalBlanks = letters.length;

    //for loop so underscores match word length
    for (var i = 0; i < totalBlanks; i++) {
        underscore.push("_");
    }
    //updating DOM with correct underscores
    document.getElementById("underscores").innerHTML = " " + underscore.join(" ");

    //if/else statements for questions with pictures

    //annika
    if (computerGuess === answers[0]) {
        document.getElementById("questions").innerHTML = " " + questions[0];
    }

    //spot
    else if (computerGuess === answers[1]) {
        document.getElementById("questions").innerHTML = " " + questions[1];
    }

    //picard
    else if (computerGuess === answers[2]) {
        document.getElementById("questions").innerHTML = " " + questions[2];
        }

    //pike
    else if (computerGuess === answers[3]) {
        document.getElementById("questions").innerHTML = " " + questions[3];
        }

    //bones
    else if (computerGuess === answers[4]) {
        document.getElementById("questions").innerHTML = " " + questions[4];
        }

    //roddenberry
    else if (computerGuess === answers[5]) {
        document.getElementById("questions").innerHTML = " " + questions[5];
       }

    //futile
    else if (computerGuess === answers[6]) {
        document.getElementById("questions").innerHTML = " " + questions[6];
        }

    //baseball
    else if (computerGuess === answers[7]) {
        document.getElementById("questions").innerHTML = " " + questions[7];
        }

    //doctor
    else if (computerGuess === answers[8]) {
        document.getElementById("questions").innerHTML = " " + questions[8];
        }

    //coffee
    else if (computerGuess === answers[9]) {
        document.getElementById("questions").innerHTML = " " + questions[9];
        }
}

//call game function
wordGuess()

document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    end();
}

//if/else to check if letter appears in the computerGuess
function checkLetters(letter){
    var letterInWord = false;

    //win 
    for (var i =0; i<totalBlanks; i++){
        if (computerGuess[i] == letter){
            letterInWord = true;
        }
    }
    //lose
    if (letterInWord){
        for (var i=0; i<totalBlanks; i++){
            if(computerGuess[i] == letter){
                underscore[i] = letter;
            }
        }
    }  

    //wrong letter choices get added to wrong guess array and will show letters guessed on the screen.
    //decrease the guesses remaining each time the user guesses.
    else {
        letter.push(lettersPlayed);
        guessesRemaining--;
    }
}

//game completion function

function end(){
    if (letters.toString() == underscore.toString()){
        wins++;
        alert ("You really know your Trek!");
        Reset();
        document.getElementById("rightGuess").innerHTML = wins;
    } else if (guessesRemaining === 0){
        losses++;
        alert ("Mr Spock says: This is highly illogical");
        Reset();
        document.getElementById("losses").innerHTML = losses;
    }

//game reset

function Reset() {
    wrongGuesses = [];
    underscore = [];
    guessesRemaining = 10;
    wordGuess()
}


//adding to the DOM
    document.getElementById("underscores").innerHTML = underscore.join(" ");
    document.getElementById("numberofGuesses").innerHTML = " " + guessesRemaining;
    document.getElementById("wrongGuess").innerHTML = " " + wrongGuess.join(" ");

}