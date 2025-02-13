console.log("Jaden Wiltshire")
console.log("\n------ Example 1: for loops -------")
// use a for loop to print from 0 to 4
for(let n = 0; n<=4 ; n++){
    console.log(`counting = ${n}`)
}

console.log("\n----- Example 2: for loop with conditional statement ------")
// collect the initial value from the user
// print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20 ;initialvalue++ ){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even numbers
    }
}

console.log("\n------- Example 3: for loop as decrement counter -------")
// for loop to print from 9 to 0 --> 9 8 7 6 5 4 3 2 1 0
for(let n = 9; n>=0 ; n-=3){
    console.log(n)
}

console.log("\n------- Example 4: for loop in an array(list) -------" )
// set up a list of animals
let animals = ["fish", "turtle", "dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}

// Set up a list of numbers
// Count how many negative numbers are in the list
let numbers = [5, -3, 10, -9, 2];
let counternegative = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0) {
        counternegative++;
    }
}
console.log(`There is/are ${counternegative} negative number/s in the list 'numbers'`);

console.log("\n-------- Example 5: for loop in a string -------");
let username = "Peter Pan, neverland";
let counter_e = 0;
for (let index = 0; index < username.length; index++) {
    // Find the total number of letter 'e' in username
    if (username[index] === 'e') {
        counter_e++;
    }
}
console.log(`The letter 'e' appears ${counter_e} times in the username.`);

console.log(`There is/are ${counter_e} letter e in 'username'`)
console.log("\n--------- Excercise for loop ---------")
let num = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1];

// Variables to store the sum of negative and positive numbers
let negativeSum = 0;
let positiveSum = 0;

// Loop through the array and check for negative and positive numbers
for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
        negativeSum += num[i]; // Add negative numbers to negativeSum
    } else if (num[i] > 0) {
        positiveSum += num[i]; // Add positive numbers to positiveSum
    }
}

console.log("Sum of all negative numbers = " + negativeSum);
console.log("Sum of all positive numbers = " + positiveSum);

console.log("------- Example 6: while loop as a counter ------")
// use a while loop to display number from 0 to 4 
console.log("\n--------- Example 7: while loop application -------")
//using while loop to check if the user number matches the secret number
const SECRET = 8
// collect a number from the user
let usernumber = parseInt(prompt("Enter a number: "))
let guesscounter = 0
// run a while to recollect the user number if the number doesn't match the secret number
while (usernumber != SECRET){
    guesscounter++
    usernumber = parseInt(prompt("Wrong guess! Enter another number: " ))
}
console.log(`${usernumber} is right! Total attempts ${guesscounter}`)

console.log("\n---------- Example 8: break in a while loop ------------")
// create an app to sum all even numbers . The app continuesly collects a positive and stops if a negative number is entered.
let sumeven = 0;

while(true){
    collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber<0){
        break
    }
    else{
        if(collectnumber%2===0){
            sumeven += collectnumber // sumeven = sumeven + collectnumber
        }
    }

}
console.log(`The sum of all even number is ${sumeven}`)

console.log("\n------- Example 9: continue in a for loop ------------")
// print number from -5 to 5 , -5 -4 -3 -2 -1 0 1 2 3 4 5
for(let n =-5; n<=5; n++){
    if(n%2===0){
        continue
    }
    console.log(n)
}

console.log("\n------- Exercise B ---------")
const VAR = 7783
let usernumbers = parseInt(prompt("Enter a 4 digit number:  "))
let counterguess = 0
while (usernumbers != VAR){
    counterguess++
    usernumbers = parseInt(prompt("Wrong password, try again:"))
}
console.log(`${usernumbers} is correct! Total attempts ${counterguess}`)

const correctPin = "7783"; 

// Variable to keep track of the number of attempts
let attempts = 0;

// While loop to allow 3 attempts
while (attempts < 3) {
    // Prompt the user to enter the PIN
    let enteredPin = prompt("Enter your 4-digit PIN:");

    // Check if the entered PIN matches the correct PIN
    if (enteredPin === correctPin) {
        console.log("Your pin number is correct");
        break; // Exit the loop if the correct PIN is entered
    } else {
        attempts++; // Increment the attempt count
        console.log("Incorrect PIN. Try again.");
    }
}

// If the user has attempted 3 times and still hasn't entered the correct PIN, lock the account
if (attempts === 3) {
    console.log("Account is locked!");
}   