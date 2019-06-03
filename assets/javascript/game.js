var wins = 0;
var losses = 0;
var guessesLeft = 10;
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0; //spaces based on selected word
var spaceSuccess = []; //array to hold spaces and guessed letters
var guessesSoFar = []; // stores wrong guesses


//define list of available words to pick from
var words = ["zebra", "lion", "hipo", "panda", "gorilla", "giraffe", "elephant", "tiger", "monkey", "bear"];




function Game() {
    //pick a random word from words
    selectedWord = words[Math.floor(Math.random() * words.length)];

    //Split a string into an array of substrings (creates an array from the letters of the word)
    lettersInWord = selectedWord.split("");

    //store length of word in numBlanks - spaces will be according to the number of letters
    numBlanks = lettersInWord.length;

    //creating a loop to generate "_" for each letter 
    for (var i = 0; i < numBlanks; i++) {
        spaceSuccess.push("_");
    }



    //debug
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(spaceSuccess);
}
//reset counters before starting each game
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
        //check each letter to see if it matches letter in our word
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                spaceSuccess[i] = letter;
            }
        }
    } else {
        guessesSoFar.push(letter);
        guessesLeft--; // if false put it in guesses so far and update guesses left to -1
    }
    console.log(spaceSuccess);
}



Game()

//user click listener 
document.onkeyup = function(event) {

    var userGuess = event.key;
    //check to see if guess entered matches value of selected word
    checkLetters(userGuess);

    console.log(userGuess);
    endOfGame()


    document.getElementById('guessesSoFar').innerHTML = "Guesses So Far: " + guessesSoFar;
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

    document.getElementById("selectedWord").innerHTML = "  " + spaceSuccess.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + guessesLeft;
}