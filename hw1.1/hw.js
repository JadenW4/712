/*
Homework 1: control flow and loops

Jaden Wiltshire

*/

// Program 1: conditional statement
console.log("\n------ Program 1: conditional statement -----");

let userInput = prompt("Please enter something:");

if (userInput === null) {
    console.log("Null and void!"); // If the user clicked Cancel
} else if (userInput === "") {
    console.log("Your answer was blank!"); // If the user clicked Ok but didn't type anything
} else {
    let numberInput = parseFloat(userInput); // Convert the input to a number

    // Check if the input is a number and handle accordingly
    if (!isNaN(numberInput)) {
        if (numberInput > 0) {
            console.log("Think positively!"); // If the number is positive
        } else if (numberInput < 0) {
            console.log("Never have negative balance!"); // If the number is negative
        } else {
            console.log("Yin and Yang!"); // If the number is zero
        }
    } else {
        console.log("Your answer was not a number!"); // If the input is not a number
    }
}

// Program 2: for loop and nested conditional statement
console.log("\n------ Program 2: for loop and nested conditional statement -----");

let numbers = [];
let multiplesOf3 = 0;
let multiplesOf5 = 0;
let multiplesOf7 = 0;

// Use a for loop to collect 10 numbers
for (let i = 0; i < 10; i++) {
    let numInput = prompt(`Enter number ${i + 1}:`);
    let num = parseFloat(numInput); // Convert the input to a number

    // Ensure the user entered a valid number
    if (!isNaN(num)) {
        numbers.push(num);

        // Check if the number is a multiple of 3, 5, or 7
        if (num % 3 === 0) {
            multiplesOf3++;
        }
        if (num % 5 === 0) {
            multiplesOf5++;
        }
        if (num % 7 === 0) {
            multiplesOf7++;
        }
    } else {
        console.log(`Invalid input at number ${i + 1}. Please enter a valid number.`);
        i--; // If input is invalid, repeat the same number entry
    }
}

// Display the results for multiples of 3, 5, and 7
console.log(`${multiplesOf3} numbers are multiples of 3`);
console.log(`${multiplesOf5} numbers are multiples of 5`);
console.log(`${multiplesOf7} numbers are multiples of 7`);