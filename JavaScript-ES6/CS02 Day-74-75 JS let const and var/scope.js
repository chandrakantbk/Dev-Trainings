// Day 75: 4-Jan-2020

var a = 10;
var b = 20;
var index = 1;

function fun() {
    // variable shadoing of variable b
    var b = 50; // local scope
    console.log(b) // 50
}


fun();
console.log(b) //20

//var d == 60; // SyntaxError: unexpected '=='

// console.log(c) // RefernceError
// console.log(a + c) // RefernceError

let i = 100;
for (let index = 100; index < 110; index++) {
    console.log(index);
}

console.log("================")
console.log(index); //1

function gun() {
    let g = 50;
    let g = 100; // SyntaxError: Identifier 'g' has already been declared

}