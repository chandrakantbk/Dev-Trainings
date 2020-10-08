// Write a function which will return the value at given index;
//2D Array 


function getValue(indexNumber) { // Argument: indexNumber == 1
    var clinical_data = [
        [5, 50],
        [6, 70],
        [6, 80]
    ];

    var fist_val = clinical_data[0]

    fist_val[1]

    clinical_data[0][1]

    if (indexNumber == undefined) {
        return "Please provide index number"
    }

    if (indexNumber >= clinical_data.length) {
        return "Out of range index"
    }

    var value = clinical_data[indexNumber];

    return value;
}

var my_data = getValue(0); // Parameter value [6, 70]

//console.log(my_data)


function checkElementPresence() {
    // Day 23 includes() and indexOf() methods
    // tell me if "NE" is available, if available then tell me the index number.
    /* 
        Array.includes("NE") 
                ===> returns boolean true if element is present in the array. 
                else it will return false

        Array.indexOf("CK")
            ==> returns index no. of the given element, else it will return -1

    */
    var topers_list = ["CK", "TE", "NE", "LE", "PO"]
    var temp = topers_list.indexOf("NE");
    if (temp >= 0) {
        console.log("NE is available at " + temp);
    } else {
        console.log("NE is NOT available ")
    }


}

/* Day 25 */
// find a number in marks array where the number is less than 15, and return it's index 
/*
var marks = [70, 80, 25, 10, 30, 25, 12, 50, 60, 80, 90, 100];

for (var index = 0; index < marks.length; index++) {

    if (marks[index] < 15) {
        console.log(index)
        break;
    }

}

marks.findIndex(function(num) {})

console.log(marks.indexOf(30))

function getNumber(num) {

    if (num < 15) {
        return true
    } else {
        return false
    }

}
*/

/*  Day - 26 */

/*

var all_participants = ['Chandrakant', 'Jain Namrata', 'Arushi', 'Sanjay', 'Trupti', 'Kajal', 'SK', 'Kanchan']

var present_users = ['Chandrakant', 'Jain Namrata', 'Arushi', 'Sanjay', 'Trupti']

for (var index = 0; index < all_participants.length; index++) {
    // console.log(all_participants[index])
    var name = all_participants[index];

    if (present_users.includes(name)) {
        console.log(name + " is present");
    }

}


var cloud_data = ['AWS', 'Azure', 'Ocean tree', 'Google', 'Oracle', 'SAP'];
var developers = [
    { name: 'SK', works: 'TCS' },
    { name: 'Namrata', works: 'AWS' },
    { name: 'Trupti', works: 'Google' },
    { name: 'Sanjay', works: 'Oracle' },
    { name: 'CK', works: 'MS' },
]


for (var i = 0; i < developers.length; i++) {

    if (cloud_data.includes(developers[i].works)) {

        console.log(developers[i].name + " is working at " + developers[i].works);

        console.log("Index ", i)

        console.log("Your project has been assigned.")

        break;

    } else {
        console.log(developers[i].name + " is not working at cloud");
    }

}

*/

/*
// find an element which value is less than 30

var array = [50, 60, 14, 80, 90, 45, 20]

var compareVal = 30;

for (var item of array) {

    if (item < compareVal) {

        console.log(item);

        break;
    }

}

var topers_list = [45, 85, 95, 96, 40]

for (var item of topers_list) {

    if (item % 5 != 0) {
        console.log(item); //96
        break;
    }

}





function addition(a, b) {

    return a + b //30
}

var myresult = 30 // addition(20, 10)


var myresult = substract(50, 20)

function substract(a, b) {
    return a - b
}


// less than 30   // true / false 

var result = check(50);

var res = false //check(60)



//Annonymus function

    (function() {
    // to excute only once in his lifetime

})()


function check(val) {

    return val < 30;

    if (val < 30) {

        return true

    } else {

        return false

    }


}



var marks = [85, 95, 75, 24, 65];

var myresult = marks.find(function(item) { return item < 50; });

*/


/*
    var myval;
    for(var val of marks){
        if(val < 50){
            myval = val;
            break;
        }

    }

*/