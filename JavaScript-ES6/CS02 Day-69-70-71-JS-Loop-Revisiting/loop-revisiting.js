// Date: 15-Dec-2020

var name = "Welcome";
console.log(name);

/*
for (var number = 1; number <= 5; number++) {
    // repeated task
    console.log(number); // 5
}

// for( assignment;  entry-condition; after-loop-body-excute-callback  )

// number ==> 6

*/

/*
var number = 10;
while (number <= 50) {
    console.log(number);
    number++;
}
*/

/*

var number = 10;

do {
    console.log("I am checking if there is any work to do");

    number = number + 8;

    console.log(number)

} while (number < 20);

*/

// Day-70: 17-Dec-2020 
// Exit Control Loop

/*
for (assignment; condition; callback-expression )
{
 // ------- 
}

*/

// type 1:
for (let index = 0; index < array.length; index++) {

}

for (const value of object) {

}


//Day 71: 21-Dec-2020

for (var index = 9; index < 10; index++) {
    console.log("Hello")
}


var index = 10;

for (; index < 50;) {
    console.log("Hello");
    index++; // 50
}

for (; ; index++) {
    console.log("Hello & Welcome") // infinite
}


for (var a = 20, b = 30; false; a++) {

    console.log("Infinite")
}


for (var i = 10; check(); callback_fun()) {
    console.log("I am executing")
}


function check() {

    // return (i == 0 && index == 50 && name == "Arushi");

    // Arushi 
    if (i == 0 && index == 50 && name == "Arushi") {

    }



    // Orginial

    if (i == 0 && index == 50 && name == "Arushi") { // true

        return true;

    } else {

        return false;

    }



}

function callback_fun() {

}

console.log(index) // 50

// statements