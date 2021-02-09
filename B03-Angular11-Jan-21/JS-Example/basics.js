// 8-Feb-2021 - JS loop, arr and object

//alert(name)
/*
a = prompt("Enter your name");
alert(a)
var choice = confirm("Do you want to process?");

if (choice) {
    alert(choice)
}

*/



let a = 50;
const pi = 3.14;

let arr = [56, 55, 20, 30, 60];

let student = { name: "Akshay", city: "Pune" }

// student["city"]
/* 
for (var index = 0; index < arr.length; index++) {
    console.log(arr[index]) //
}

*/

// for-in
/* for (var k in student) {
    console.log(k)
    console.log(student[k])
}
 */

// for-of 
/* for (let v of student) {
    console.log(v)
} */

let std = {
    name: "Anuja",
    city: "Pune",
    age: 25,
    "0": "Test"
}

let seq_test = {
    "10": 10,
    "2": 2,
    "60": 60
}

for (let k in seq_test) {
    console.log(seq_test[k]); //
}

// 
let obj_arr = {
    "0": 50,
    "1": 60,
    "2": 20
}

let arr2 = [50, 60, 20]

// tell me if the given object is empty or not
let obj2 = {}

function check(obj2) {

    for (let key in obj2) {
        console.log(obj2[key])
        return true
    }

    return false
}


