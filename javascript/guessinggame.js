//proptuser to enter a random number
let maxNo = parseInt(prompt("Enter a maximum number"));

//we confirm if the entered number is valid
while(!maxNo)
{
    maxNo = parseInt(prompt("Enter a maximum number"));
}

//generate a number from 0 to that number
const randomNo = Math.floor(Math.random() * maxNo) + 1;
let guessedNo = parseInt(prompt(`Guess a number ${randomNo}`));

//check condition
while (randomNo !== guessedNo)
{
    if (guessedNo > randomNo)
    {
        guessedNo= parseInt(prompt(`Number too high`));
    }
    else
    {
        guessedNo= parseInt(prompt(`Number too low`));
    }
}
alert("Correct");