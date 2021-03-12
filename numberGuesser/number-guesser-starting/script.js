let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/**
 * Returns a random integer in [0..9].
 * @return {number} the integer the players are trying to guess.
 */
function generateTarget() {
    return Math.floor(Math.random() * (9 - (-1) + (-1)));
}

/**
 * 
 * @param {number} humanGuess 
 * @param {number} computerGuess 
 * @param {number} targetNumber 
 * 
 * @return {bool} true if human player wins, false if computer player wins
 */
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    var humanDiff = Math.abs(targetNumber - humanGuess);
    var computerDiff = Math.abs(targetNumber - computerGuess);
    return humanDiff <= computerDiff;
}

/**
 * 
 * @param {string} winner 
 */
function updateScore(winner) {
    if (winner == "human") {
        humanScore += 1;
    } else if (winner == "computer") {
        computerScore += 1;
    } else {
        throw "Winner must be either 'human' or 'computer'";
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}