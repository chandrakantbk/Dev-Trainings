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

//    seat_avail =  [ { seat: "L3", is_reserved: false }, ]

function bookSeat() {

    if (seat_avail.length == 0) {
        alert("NO Seat Avaible ")
        return false;
    }

    for (var index = 0; index < women_coach.length; index++) {

        if (women_coach[index].seat == seat_avail[0].seat) {
            women_coach[index].is_reserved = true;
        }

    }

    alert(seat_avail[0].seat);

}

bookSeat()

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














/*
    var data = women_coach.filter(function(item){ 
    // return item.is_reserved == false 
        return !item.is_reserved
    })
    // [  { seat: "L3", is_reserved: false },   { seat: "L5", is_reserved: false }, ]

*/