console.log("Jaden WIltshire")
// select element by class name
let desc = document.querySelector(".description")
console.log(desc)
// select element by id name "title"
let titlenode = document.querySelector("#title")
console.log(titlenode)
// select element/s by tag name, "p"
let par = document.querySelectorAll("p")
console.log(par)
// select all elements with class name "methods"
let methods = document.querySelectorAll(".methods")
console.log(methods)
// loop through each elements in a node list
console.log("\n------ example 2: loop through each elements in a node")
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

console.log("\n ------- example 3: CLICK EVENT ------ ")
// select the button
let btn = document.querySelector(".btnclick")
// add an event (click) to btn
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n ------ example 4: click event to change text container")
// select the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// add an event to 'msg' that changes the text node to "prof wu"
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good afternoon <b> Prof. Wu <b> "
})

console.log("\n ------- Example 4: changing shapes mini app -=-----")
// select elements
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button
btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.classname = "square"
})
