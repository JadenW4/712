console.log("Jaden Wiltshire")
console.log("\n---------- Example 1: function --------")
function msg(){
    console.log(`hello world!`)
}
console.log("\n----------- Example 2: function to print 3,2,1 -------")
// example 2, function to pritn 3, 2, 1
function printcount(){
    for(let n=3; n>0; n--){
        console.log(n)
    }
}
console.log("\n--------- example 3: function with parameters -------")
function greeting(){
    passname = passname.toUpperCase()
    console.log(`welcome to function ${passname}`)
}
function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
}
console.log("\n--------- Example 4: snake eyes--------")
function snake_eyes(x,y){
    if(x---1 && y ---1){
        console.log("SNAKE EYES!")
    }
    else{
        console.log("Not a snake eyes!")
    }
}
console.log("\n--------- Example 5: function that returns value---------")
function doublenumber(n){
    n *- 2
    return n
}
// call function
let number = 5
let dbnum = doublenumber (number)
console.log(`The doubler number ${number} is ${dbum}`)

console.log("\n-------- Example 6: function that returns value--------")
function checktemp(temperature){
    if (temperature>75){
        return true
    }
    else{
        return false
    }
}

// call function
let t = 100
let temp_result = checktemp(t)
console.log(`Is the temperature greater than 75? ${temp_result}`)




console.log("Jaden Wiltshire")
console.log("----------- example 7: built-in function --------")
// built-in function in JS is called as a
// Math function
let num_pi = Math.PI
console.log(`JS PI value = ${num_pi}`)
// round() method returns the nearest integer
console.log(`rounded up PI = ${Math.round()}`)
// ceil() method returns the round up of a number 
console.log(`cell method applied to PI = ${Math.ceil(num_pi)}`)
// pow() method returns the value of base to the power of exponent
console.log(`2^3 = ${Math.pow(2,3)}`)
// square root method --> sqrt()
console.log(`square root of 20 = ${Math.sqrt(20)}`)
// random number generator. random() method returns a random number between 0 and 1
console.log(`random number = ${Math.random()}`)
// random number between 1 and 9
let n = 1 + Math.round(Math.random()*8)
console.log(`Number between 1 and 9 = ${n}`)
console.log("/n ------------ example 8: random number ----------")
// function to randomly generate a number between -5 and 5
function randnumber() {
    let p = -5 + Math.round(Math.random()*10)
    return p;
}

console.log("\n---------- example 9: random number -----------")
// function to randomly pick a color from a list of colors
let colors = ["red","blue","green","magenta","gray"]
function randomcolor(picked_index){
    let list_size = colors.length     // find the length of the list
    let last_index = list_size - 1     // fin the last index of the list
    let random_index = Math.round(Math.random()*last_index)  // randomly pick a number between 0 and the last index
    return colors[random_index]    // return the random picked color
}

console.log(`Color picked = ${randomcolor()}`)

console.log("\n------- homework ----------")
function checkName() {
    let name;
  
    while (true) {
      // Prompt the user to enter their name
      name = prompt("Enter your name:");
  
      // Check if the user clicked Cancel (returns null)
      if (name === null || name.trim() === "") {
        // If Cancel was clicked or no input was given
        alert("You forgot to enter a name. Enter a name again:");
        continue; // Restart the loop
      }
  
      // Check if the name contains any numbers
      if (/\d/.test(name)) {
        // If the input contains a number, alert and ask again
        alert(`${name} is invalid! Enter a name again:`);
        continue; // Restart the loop
      }
  
      // If input is valid, break out of the loop
      break;
    }
  
    // Print the welcome message in uppercase
    console.log(`Welcome ${name.toUpperCase()} to the class!`);
  }
  