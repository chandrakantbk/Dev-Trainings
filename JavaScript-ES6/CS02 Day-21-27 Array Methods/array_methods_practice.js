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


var camera_data = [{ day: "25", month: "9", year: "2020", object: 45 },
    { day: "26", month: "9", year: "2020", object: 40 },
    { day: "27", month: "9", year: "2020", object: 35 },
    { day: "28", month: "9", year: "2020", object: 50 },
    { day: "29", month: "9", year: "2020", object: 45 },
    { day: "30", month: "9", year: "2020", object: 40 },
    { day: "01", month: "10", year: "2020", object: 0 },
    { day: "02", month: "10", year: "2020", object: 0 },
    { day: "03", month: "10", year: "2020", object: 100 },
    { day: "04", month: "10", year: "2020", object: 50 },
]



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