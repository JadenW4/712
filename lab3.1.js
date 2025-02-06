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

    