//import readline module
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// I hardcode the number to be guessed
let secretNumber = 27;

// A function to check if input tallies with secret number
const checkGuess = number => {
    if(number > secretNumber) {
        console.log("Too high");
        return false;
    } else if(number < secretNumber) {
        console.log("Too low");
        return false;
    } else {
        return true;
    }
}

//The function that helps to accept input question.
const askGuess = () => {
    rl.question("Enter a guess: ", handleResponse);
}

//A function that hepls to insert our input to the checkGuess Method.
function  handleResponse(answer) {
    const result = checkGuess(Number(answer));

    if(result === true) {
        console.log("You win!")
        rl.close();
    } else {
        askGuess();
    }
}

askGuess();
