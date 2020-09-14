/*
for (var num = 1; num <= 10; num++) {
    console.log("Welcome " + num)
}
*/

/*
for (var num = 10; num > 0; num--) {
    console.log(num)
}

*/

/*

var total_employess = 1000;

var count = total_employess * 0.30; // 300

var current_emp = total_employess; //1000

for (var current_emp = 1000; current_emp > 700; current_emp--) {
    console.log(current_emp);
}

*/

// Day 17 For loop varients

var numbers_array = [10, 20, 30, 40];

/*
    numbers_array = [];
    
    numbers_array.length;  // 4
                           // 3


    for (i = 0; i <= 3; i++) {
        console.log(i, numbers_array[i] )
    }

*/

/*
    for (var index in numbers_array) {

        //console.log(index) // string 

        console.log( numbers_array[index] );

        // console.log(numbers_array[Number(index) + 1])
        // console.log("--------------------")
    }

*/

// Angular 
//  numbers_array = [];

for (var val of numbers_array) {
    console.log(val) // 10
}