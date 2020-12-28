//Day 73: Understaning Functions and Scopes


var outsider = 0; // Global Scope
const pi = 3.14; // constant variable
var index = 50; // Global Scope
//var topic_name = prompt("Tell me your topic Name: ");
let topic_name = "Function and Scopes"; // Global Scope

for (let index = 1; index < 5; index++) {
    console.log(index) //local scope
}

console.log(index) // 50 var

let topic_name = 500; // Syntax Error

function fun() {
    var test = 500;
    outsider = test;

    alert("Fun is running");
}

console.log(test); // Reference Error

