let randomNum = Math.round(Math.random()*10);
// console.log(randomNum)
let guessedNum;
do {
    guessedNum = prompt("Guess the Number: ");
    if(guessedNum == randomNum){
        console.log("You have guessed correctly!");
    }
    else{
        console.log("Take other guess answer is" + randomNum);
    }
}while(guessedNum != randomNum);