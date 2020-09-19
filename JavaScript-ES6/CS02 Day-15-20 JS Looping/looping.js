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

//var numbers_array = [10, 20, 30, 40];

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

/*
    for (var val of numbers_array) {
        console.log(val) // 10
    }

*/


/* Day 20: Infinite loop */

function myApplication() {

    var user_choice; //undefined
    var message = `1: Get railway ticket booking information. 
                    \n2: Get Bus ticket booking infirmation
                    \n3: Flight ticket booking info
                    \n4: Connecting with customer care
                    \n5: Exit`;

    var flag = true;

    while (flag) {

        user_choice = prompt(message);

        if (user_choice == null) {
            break;
        }

        switch (user_choice) {
            case "1":
                alert("Getting railway ticket booking information");
                break;
            case "2":
                alert("Getting Bus ticket booking information");
                break;
            case "3":
                alert("Getting Fligh ticket booking information");
                break;
            case "4":
                alert("Connecting with customer care");
                break;
            case "5":
                flag = false;
                break;
            default:
                alert("Please enter correct choice");
        }

    }

}