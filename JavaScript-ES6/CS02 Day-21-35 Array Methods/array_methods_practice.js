// Day 27 Filter method

var students_list = [
    { name: "CK", marks: 10 },
    { name: "Sanjay", marks: 100 },
    { name: "KK", marks: 60 },
    { name: "SK", marks: 90 },
    { name: "Namrata", marks: 80 },
    { name: "Arushi", marks: 95 },
    { name: "Kanchan", marks: 98 },
    { name: "Trupti", marks: 98 },
];

function searchStudent() {
    var inputBox = document.getElementById("search_item");
    var val = inputBox.value;

    var toppers_list = students_list.filter(function(item) { return item.marks >= val })

    /*
        var toppers_list = [];
        for (var item of students_list) {
            if (item.marks >= val) {
                toppers_list[toppers_list.length] = item.name;
            }
        }
    */

    document.getElementById("output").innerHTML = JSON.stringify(toppers_list);

}


/** another way but with some loopholes */
/*
var toppers_list = [];
var index = 0;
for (var item of students_list) {
    console.log(item)
    toppers_list[index] = item;
    index++;
}

for (var index = 0; index < students_list.length; index++) {

    if (students_list[index].marks >= 80) {
        toppers_list[index] = students_list[index];
    }

}

toppers_list = [undefined, { name: "sanjay", marks: 100 }, undefined, {}]

*/

/*

students_list.find(function(val) { return val.marks == 100 })
var my_data;

for (var val of students_list) {
    console.log(val.marks) // {}
    if (val.marks == 100) {
        console.log(val)
        my_data = val;
        break;
    }
}

for (var index in students_list) {

    if (students_list[index].marks === 100) {

        console.log(students_list[index].name)

    }

}

*/

// Tell me the student name who scored 100/100 marks.
// Output: Sanjay

/*
var num;
for (var numOfMarks;;) {
    if (num == 100) {
        num = numOfMarks;
        console.log("student name ")
        break; // to stop the loop if I found that student
    }
}
*/

/*

var women_coach = [
    { seat: "L1", is_reserved: true },
    { seat: "L2", is_reserved: true },

    { seat: "L3", is_reserved: false }, // is_reserved = true

    { seat: "L4", is_reserved: true },
    { seat: "L5", is_reserved: false },
]

var seat_avail = women_coach.find(function(item) {
    return !item.is_reserved
});

//    seat_avail = { seat: "L3", is_reserved: false }

function bookSeat() {

    if (seat_avail == undefined) {
        alert("NO Seat Avaible ")
        return false;
    }

    for (var index = 0; index < women_coach.length; index++) {

        if (women_coach[index].seat == seat_avail.seat) {
            women_coach[index].is_reserved = true;
            alert(seat_avail.seat);
            break;
        }

    }



}

bookSeat()
*/


/*
var seat_avail = women_coach.find(function(item) {
    return !item.is_reserved
});

for (var val of women_coach) {
    if (val.seat == seat_avail.seat) {
        val.is_reserved = true;
        alert(val.seat + " reserverd for you")
        break;
    }
}
*/
/*
var is_avail = 'no';

for (var item of women_coach) {

    if (item.is_reserved == false) {
        item.is_reserved = true;
        is_avail = 'yes';
        alert(item.seat);
        break;
    }
}

if (is_avail == 'no') {
    alert("Seat is not available")
}

*/


/*
    var data = women_coach.filter(function(item){ 
    // return item.is_reserved == false 
        return !item.is_reserved
    })
    // [  { seat: "L3", is_reserved: false },   { seat: "L5", is_reserved: false }, ]

*/

/* Day-34 JS Practice session-1 11-Oct-2020 */

// Data Sorting ==> Algorithams 
// Using sort 

// swap the values between two variables 

var topper = "NJ";
var failed = "CK";

// topper = CK,  failed = NJ

var replace = topper; //replace= NJ

topper = failed; //topper= CK 
failed = replace; // failed NJ

console.log(topper, failed) // topper = CK,  failed = NJ


// Swap Numbers between two variables 
var my_num = 50;
var you_num = 100;

var temp = my_num // temp = 50

my_num = you_num // my_num = 100

you_num = temp;

// Swap numbers without using third variable
var num = 5;
var you_num = 10;


// Solution by Arushi  Using * and / 

num = num * you_num; // 5 * 10 ===> num = 50
you_num = num / you_num; //    50 / 10 ==> you_num = 5
num = num / you_num // 50 / 5 ===> num = 10 


/*
    // Solution by Arushi using + and - operators

    num = num + you_num;
    // 100 + 300 ==> num = 400
    you_num = num - you_num;
    // 400 - 300 ==> you_num = 100

    num = num - you_num;
    // 400 - 100 ==> num = 300

*/



/*
    // Solution Namrata 
    num = num - you_num;

        // 250 - 50 ==> num = 200 // 100 - 300 ==> -200
        
    you_num = num + you_num;
        // 200 + 50 ==> you_num = 250 // -200 + 300 = 100

    num = you_num - num;
        // 250 - 200 ===> 50 // 100 - (-200) ==> 300

*/



/*

// Kanchan Solution

num = num + you_num; //num = 300

you_num = num - you_num // 300 - 50 ==>> you_num = 250

num = num - you_num; // 300 - 250 ==>> 50

*/

/*
// Sort the list of students in asc order by marks [ Array: sort() ]

var students_list = [
    { name: "Namrata", marks: 100, cgpa: 9 },
    { name: "Arushi", marks: 96, cgpa: 8.5 },
    { name: "Kanchan", marks: 85, cgpa: 7.6 },
    { name: "CK", marks: 40, cgpa: 6 },
    { name: "Luci", marks: 40, cgpa: 9 },
];

var final_list = students_list.sort(function(a, b) { return b.marks - a.marks });

*/

/*
// Sort the student list by using Rules   
// marks > 50% ==> cgpa
// marks < 50% ==> marks

var final_list = students_list.sort(function(next, current) {
    if (current.marks > 50) { return current.cgpa - next.cgpa }
    if (current.marks <= 50) { return current.marks - next.marks }
})

*/

/*
    // Sort by name

    students_list.sort(function(n, c) {
        if (n.name > c.name) { return 1 }
        if (n.name === c.name) { return 0 }
        if (n.name < c.name) { return -1 }
    })

*/

// students_list.sort( function(n, c){ return n.name.localeCompare(c.name) })


// Day 34 

var name_list = ["CK", "Kanchan", "Arushi", "Namrata", "Sanjay"]
    /*

        forEach()
        map()
        reverse()
        split()
        join()

    */
var data_arr = name_list.forEach(function(item, index) {

    }) //  ===>  Nothing returns; so no values will be there in data_arr

var data_arr = name_list.map(function(item, index) {

        return index + "-" + item + "My"

    }) // ==> returns a new Array. You may get modified data in the new array


var modified_list = students_list.map(function(item, i) {
    if (item.name == "Namrata") {
        return { name: "Namrata", age: 20 }
    } else {
        return item
    }
});

console.log(modified_list);