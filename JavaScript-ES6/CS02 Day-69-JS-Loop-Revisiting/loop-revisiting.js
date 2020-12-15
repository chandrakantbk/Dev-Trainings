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

var number = 10;

do {
    console.log("I am checking if there is any work to do");

    number = number + 8;

    console.log(number)

} while (number < 20);