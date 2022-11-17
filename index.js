let score = 0;
let range = 2;
console.log("welcome to Vinnies guessing game");
console.log("Please enter your name");
const input = prompt();
console.log("Welcome to the game", input);
function random(range) {
  let randomNumber = Math.floor(Math.random()* range) + 1;
  return randomNumber
};
let randomNum = 1;
let userNumber = 0;
do {
  randomNum = random(range);
  //console.log(randomNum)
  console.log("Guess a number between 1 and ", range.toString());
  userNumber = parseInt(prompt());
  while (userNumber !== userNumber || userNumber>range){
    console.log("Please!!! Guess a number between 1 and ", range.toString());
    userNumber = parseInt(prompt());
  }
  if(userNumber === randomNum){
    console.log("Correct guess, you have gained a point")
    console.log("moving to stage ", range.toString())
    range += 1
    score += 1
  } else {
    console.log("Wrong Guess!!!!!")
    console.log("Your Score is ", score.toString())
    console.log("Thanks for playing")
  }
} while (userNumber === randomNum)