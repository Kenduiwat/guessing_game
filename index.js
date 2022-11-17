// prompt user for their username
const userName = prompt(`What is your name?`)

// welcome user
alert(`Welcome ${userName}`);

// variables
let points = 0;
let level = 1;
let max = 2;

// game loop
for (let i = 2; i <= 10; i++) {
    // Generating Random Number
    let correctNumber = Math.floor(Math.random() * max) + 1;
    // Guessed Number
    let guess = parseInt(prompt(`Enter a number between 1 and ${max}`, ``));

    if (guess === correctNumber) {
        alert(`Amazing! ${guess} is the correct number!!`)
        max++;
        points++;
    } 
    else if (guess !== correctNumber) {
        alert("Wrong Answer! Try Again")
    }
}

alert(`The game has ended and you had ${points} points`); 
