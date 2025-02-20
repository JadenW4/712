console.log("Jaden Wiltshire")
console.log("\n---------- Example 1: function in a variable-------")
const sum = function(num1,num2){
    return num1+num2
}
// calling function
console.log(sum(5,8))

console.log("\n-------- Example 2: function in a variable--------")
// function to return the square root of a number
let squarenumber = function(n){
    return Math.pow(n,2)
}
// call function
console.log(squarenumber(5))

console.log("\n--------- Example 3: arrow function ---------")
let greet = (username) => {
    console.log(`Welcome to JS ${username}`)
}

//call function
greet("Peter Pan")

console.log("\n--------- Example 4: function with default paragraph ")
function cubenumber(n){
    return Math.pow(n,3)
}
//call function
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log("\n--------- Example 5: spread syntax ... --------")
nums = [-2, 5, 9, 3, -8]
let maxnum = Math.max(nums)
console.log(maxnum)

console.log("\n-------- Example: 6 objects -------")
// create an object
const car = {
    type:"Fiat",
    model: 500,
    color:"White",
    price: 23000,

    //methods
    description:function(){
        return `${this.color} ${this.type} cost $ ${this.price}`
    }
}
// calling the object property 'model'
console.log(car.model)
// calling the object method 'description'
console.log(car.description())


console.log("\n-------- Example: 7: objects -------")
const hen = {
    //propertires
    name: "Helen",
    year: 2025,
    eggcount: 0,

    //method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    }
}
// calling the property 'eggcount'
console.log(`${hen.name} has ${hen.eggcount} eggs`)
// calling the method
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)

console.log("\n------- Example 8: try-except ------")
function yell(msg){
    console.log(msg.toUpperCase().repeat(3))
}
// calling the function
yell("help ")
