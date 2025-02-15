// Lab 4: Introduction to Functions

// Part 1: Declaring and Invoking Functions
function greet(name = "Luanna") { 
    return `Hello, how are you ${name}?`;
}

console.log(greet("Luanna")); 
console.log(greet());         

// Part 2: Working with Parameters and Returning Values
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(6, 3)); 

// Part 3: Function Scope
let x = 10;

function changeValue() {
    x = 15;  
    console.log("Inside function:", x); 
}

console.log("Before function call:", x); 
changeValue();
console.log("After function call:", x);  

// Part 4: Closures
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Count:", count);
    };
}

const counter = outerFunction(); 
counter(); 
counter(); 
counter(); 
