//import readline module
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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
const handleResponse = (answer) => {
    const result = checkGuess(Number(answer));
    numAttempts--;
    if(numAttempts != 0) {
        if(result === true) {
            console.log("You win!")
            rl.close();
        } else {
            askGuess();
        }
    } else {
        console.log("You Lose");
        rl.close();
    } 
}

//setting my random function
const randomInRange = (min, max) => {
    minNum = Math.ceil(min);
    maxNum = Math.floor(max);

    return Math.floor((Math.random() * (maxNum - minNum)) + minNum);
}

//Defining user input function of askRange
const askRange = () => {
    rl.question("Enter a max number: ", max => {
        rl.question("Enter a min number: ", min => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);

            // I set my secret number to random number between 0 and 100
            secretNumber = randomInRange(min, max);
            
            //Start guessing
            askGuess();
        });
    });
};

const askLimit = () => {
    rl.question("Enter the number of attemps for this game: ", attempts => {
        numAttempts = Number(attempts);
        askRange()
    })
}

let numAttempts = 0;
let secretNumber = 0;

askLimit();