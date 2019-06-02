//press any key to start
//define variables for selectedWord, userGuess,Wins,Number of Guesses Remaining,Letters Already Guessed
//var selectedWord; // Selected word
var userGuess; // Geusses
var geusses = []; // Stored geusses
var guessesLeft; // Number of Guesses Remaining
var answerArray = [];

//define list of available words to pick from
var wordsToSelect = ["zebra", "lion", "hipo", "panda", "gorilla", "giraffe", "elephant", "tiger", "monkey", "bear"];
//pick a random word from wordsToSelect
var selectedWord = wordsToSelect[Math.floor(Math.random() * wordsToSelect.length)];
console.log(selectedWord);
//display the number of letters in the word _ _ _ _ _

var wordArray = [];
for (var i = 0; i < selectedWord.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray);
}
var remainingLetters = selectedWord.length;
while (remainingLetters > 0) {

    for (var j = 0; j < selectedWord.length; j++) {
        if (selectedWord[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
            // console.log(answerArray);
        }
    }

}


//listen to the users clicks
//if user guessed correct letter
// find the letter placement in the word
//place the letter in the correct place
//number of available gueses is not changed
//update leletters guessed array
//if user guess is not in the word 
//reduce number of guesses remaining by 1
//update letters guessed array
//if user guessed the word
// increase wins by 1
//pick the next word
//if number of guesses remaining is smaller than 1
//pick the next random word
//display the number of letters in the new word
//losses increased by 1