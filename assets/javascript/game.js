//computer choices for words
var answers = ["annika", "spot", "picard", "pike", "bones", "roddenberry", "futile", "baseball", "doctor", "coffee", "vulcans", "sanfrancisco", "tiberius", "captainproton", "acquisition", "tribbles", "klingon", "chocolate", "quark", "trill"];

var questions = ["What is Seven of Nine's human name?", "What is Data name his cat?", "What is the last name of the Captain of the Enterprise-D?", "Who was the first captain to appear in the Star Trek franchise? (Hint: Currently on Discovery)", "What is Dr. Leonard McCoy's nickname?",
    "Star Trek creator: Gene _______________ ", "We are borg. Resistance is ___________. Prepare to be Assimilated.", "What is Benjamin Sisko's favorite sport?", "What is the name of the EMH (Emergency Medical Hologram) on Voyager?", "Famous quote by Kathryn Janeway: 'Theres ________ in that nebula!'",
    "Which alien race made first contact with Earth?", "In what city is Starfleet Command located?", "What does the 'T' in James T. Kirk stand for?", "Tom Paris writes a black and white superhero holonovel. Who is the protagonist?", "Ferengi abide by the 'Rule of ____________'", "Famous episode 'The Trouble with _________'",
    "Which Star Trek language is most popularly used IRL?", "What is Deanna Troi's comfort food?", "Who is the bartender on Deep Space Nine?", "Which human species lives symbiotically with a wise, long-lived creature called a symbiant?"];

//global variables
var computerGuess = "";
var letters = [];
var totalBlanks = 0;
var underscore = [];

//counter variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var lettersPlayed = [];


//start game function

function wordGuess() {
    //computer chooses random word 
    computerGuess = answers[Math.floor(Math.random() * answers.length)];

    //split and store words in separate array
    letters = computerGuess.split("");

    //word length = amount of spaces
    totalBlanks = letters.length;

    //for loop to match underscores to word length
    for (var i = 0; i < totalBlanks; i++) {
        underscore.push("_");
    }

    //updating the DOM with underscores matching length of words
    document.getElementById("underscores").innerHTML = " " + underscore.join(" ");


    //if/else statements to give hints to users. includes pictures

    //annika
    if (computerGuess === answers[0]) {
        document.getElementById("questions").innerHTML = " " + questions[0];
        document.getElementById("image").src = "assets/images/seven.jpg";
    }
    //spot
    else if (computerGuess === answers[1]) {
        document.getElementById("questions").innerHTML = " " + questions[1];
        document.getElementById("image").src = "assets/images/data-and-spot.jpg";
    }
    //picard
    else if (computerGuess === answers[2]) {
        document.getElementById("questions").innerHTML = " " + questions[2];
        document.getElementById("image").src = "assets/images/picard.jpg";
    }
    //pike
    else if (computerGuess === answers[3]) {
        document.getElementById("questions").innerHTML = " " + questions[3];
        document.getElementById("image").src = "assets/images/pike.png";
    }
    //bones
    else if (computerGuess === answers[4]) {
        document.getElementById("questions").innerHTML = " " + questions[4];
        document.getElementById("image").src = "assets/images/bones.jpg";
    }
    //roddenberry
    else if (computerGuess === answers[5]) {
        document.getElementById("questions").innerHTML = " " + questions[5];
        document.getElementById("image").src = "assets/images/roddenberry.jpg";
    }
    //futile
    else if (computerGuess === answers[6]) {
        document.getElementById("questions").innerHTML = " " + questions[6];
        document.getElementById("image").src = "assets/images/resistance-is-futile.jpg";
    }
    //baseball
    else if (computerGuess === answers[7]) {
        document.getElementById("questions").innerHTML = " " + questions[7];
        document.getElementById("image").src = "assets/images/sisko.jpg";
    }
    //doctor
    else if (computerGuess === answers[8]) {
        document.getElementById("questions").innerHTML = " " + questions[8];
        document.getElementById("image").src = "assets/images/doctor.jpg";
    }
    //coffee
    else if (computerGuess === answers[9]) {
        document.getElementById("questions").innerHTML = " " + questions[9];
        document.getElementById("image").src = "assets/images/janeway.jpg";
    }

    //vulcans
    else if (computerGuess === answers[10]) {
        document.getElementById("questions").innerHTML = " " + questions[10];
        document.getElementById("image").src = "assets/images/vulcan.jpg";
    }

    //san francisco
    else if (computerGuess === answers[11]) {
        document.getElementById("questions").innerHTML = " " + questions[11];
        document.getElementById("image").src = "assets/images/san-francisco.jpg";
    }

    //tiberius
    else if (computerGuess === answers[12]) {
        document.getElementById("questions").innerHTML = " " + questions[12];
        document.getElementById("image").src = "assets/images/kirk2.jpg";
    }

    //captain proton
    else if (computerGuess === answers[13]) {
        document.getElementById("questions").innerHTML = " " + questions[13];
        document.getElementById("image").src = "assets/images/captain-proton.jpg";
    }

    //acquisition
    else if (computerGuess === answers[14]) {
        document.getElementById("questions").innerHTML = " " + questions[14];
        document.getElementById("image").src = "assets/images/acquisition2.jpg";
    }

    //tribbles
    else if (computerGuess === answers[15]) {
        document.getElementById("questions").innerHTML = " " + questions[15];
        document.getElementById("image").src = "assets/images/tribbles.jpg";
    }

    //klingon
    else if (computerGuess === answers[16]) {
        document.getElementById("questions").innerHTML = " " + questions[16];
        document.getElementById("image").src = "assets/images/klingon.jpg";
    }

    //chocolate
    else if (computerGuess === answers[17]) {
        document.getElementById("questions").innerHTML = " " + questions[17];
        document.getElementById("image").src = "assets/images/troi.jpg";
    }

    //quark
    else if (computerGuess === answers[18]) {
        document.getElementById("questions").innerHTML = " " + questions[18];
        document.getElementById("image").src = "assets/images/quark.jpg";
    }

    //trill
    else if (computerGuess === answers[19]) {
        document.getElementById("questions").innerHTML = " " + questions[19];
        document.getElementById("image").src = "assets/images/dax.jpg";
    }

}
//call game function
wordGuess()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    end();
}

//if/else to check if letter appears in the computerGuess
function checkLetters(letter) {
    var letterInWord = false;

    //win if letter appears in the array
    for (var i = 0; i < totalBlanks; i++) {
        if (computerGuess[i] == letter) {
            letterInWord = true;
        }
    }
    //loss logic if letter does not appear in the array
    if (letterInWord) {
        for (var i = 0; i < totalBlanks; i++) {
            if (computerGuess[i] == letter) {
                underscore[i] = letter;
            }
        }
    }

    // wrong guess get added to lettersPlayed array
    //decrease guessesRemaining.
    else {
        lettersPlayed.push(letter);
        guessesRemaining--;
    }
}


//game end function

function end() {
    if (letters.toString() == underscore.toString()) {
        wins++;
        alert("You really know your Trek!");
        Reset();
        document.getElementById("wins").innerHTML = wins;
    } else if (guessesRemaining === 0) {
        losses++;
        alert("Mr. Spock says: This is highly illogical");
        Reset();
        document.getElementById("losses").innerHTML = losses;
    }

    //game reset after each word

    function Reset() {
        lettersPlayed = [];
        underscore = [];
        guessesRemaining = 10;
        wordGuess()
    }

    //console.log('Letters played', lettersPlayed);


    //adding to the DOM
    document.getElementById("underscores").innerHTML = underscore.join(" ");
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
    document.getElementById("lettersPlayed").innerHTML = " " + lettersPlayed.join(" ");

}

