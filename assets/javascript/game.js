//Counters:
var wins = 0;
var losses = 0;
var guessesLeft = 10;
//Empty variables to store values
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0; //spaces based on selected word
var spaceSuccess = []; //array to hold spaces and guessed letters
var guessesSoFar = []; // stores wrong guesses


//define list of available words to pick from
var words = ["zebra", "lion", "hipo", "panda", "gorilla", "giraffe", "elephant", "tiger", "monkey", "bear"];
//pick a random word from wordsToSelect



function Game() {
    //computer generates random word from words array
    selectedWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersInWord = selectedWord.split("");

    //store length of word in blanks, for later use
    numBlanks = lettersInWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < numBlanks; i++) {
        spaceSuccess.push("_");
    }

    //showing the "_" within HTML
    // document.getElementById("selectedWord").innerHTML = "  " + numBlanks.join("  ");

    //console logging 
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(spaceSuccess);
}

function reset() {
    guessesLeft = 10;
    guessesSoFar = [];
    spaceSuccess = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    //if the generated word is equal to the letter entered... then variable is true
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                spaceSuccess[i] = letter;
            }
        }
    } else {
        guessesSoFar.push(letter);
        guessesLeft--;
    }
    console.log(spaceSuccess);
}

function endOfGame() {
    if (lettersInWord.toString() == spaceSuccess.toString()) {
        wins++;
        reset()
        document.getElementById('wins').innerHTML = "Wins: " + wins;

    } else if (guessesLeft === 0) {
        losses++;
        reset()

        document.getElementById('losses').innerHTML = "Losses: " + losses;
    }
    //display counters
    document.getElementById("selectedWord").innerHTML = "  " + spaceSuccess.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
}

Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function(event) {

    var userGuess = event.key;
    //check to see if guess entered matches value of selected word
    checkLetters(userGuess);

    console.log(userGuess);
    endOfGame();


    document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
}