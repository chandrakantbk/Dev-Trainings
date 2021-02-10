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
/* for (let v of arr2) {
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

// 9-Feb-2021 

// Array methods 

var student_list = [
    { name: "Sanjay", doj: "21-02-2020" },
    { name: "KK", doj: "21-02-2008" },
    { name: "KK", doj: "21-02-2007" },
]

var mixed_arr = [50, false, [50, 30, 50], {}]

for (let val of mixed_arr) {

    if (typeof val == "boolean") {
        // boolean
    }

    if (typeof val == "object") {

        if (Array.isArray(val) == true) {
            // array

        } else {
            // object
        }

    }

}

function add(a, b) {
    return a + b;
}

add(5, 5)

var g = add;

g(10, 10)

var k_fun = function (a, b) { }

k_fun(5, 5)

// sort 

// -1 
// 0 
// 1


// find 
let res = student_list.find(function (item) {
    return item.name == "KK"
})

// filter

let filter_res = student_list.filter(function (e) { return e.name == "KK" })

var list = [50, 60, 82, 63, 90]

// return an array of matching elements

function getItems(list) {

    var temp_arr = [];

    for (let val of list) {
        if (val % 5 == 0) {
            temp_arr.push(val)
        }
    }

    return temp_arr;

}


/* let k;
console.log(k)

k = 10; */

// 10-Feb-2021 
/*
    JS Events
    String Methods
    Date
    functions
    Execution
    Typescript
*/

function handleEvent(e) {
    console.log(e);
    e.target.classList.add("bg-color")
    alert("I am working")
}

function handleAdd() {

    var textbox1 = document.getElementById("t1");
    var textbox2 = document.getElementsByClassName("form-control")[1];

    console.log(textbox1)
    console.log(textbox2)

    var a1 = Number(textbox1.value) || 0;
    var b1 = +textbox2.value

    var z = add(a1, b1);

    var res_box = document.getElementById("result");
    res_box.value = z;

    var box = document.getElementsByClassName("result-area"); //[]

    box[0].innerHTML = z

}

// Mouse event 
/*

    click
    dblclick
    mouseover
    mouseenter
    mousedown
    mouseup

*/

// keyboard 

/*
    keydown
    keyup
    keypress
*/

// focus
// blur

function callButtonEvent(e) {
    document.getElementsByClassName("popup")[0].classList.toggle("hide")
    console.log("Child button")
    console.log(e)
    e.stopPropagation();
}

function hidePopup() {
    console.log("Parent Div event")
    document.querySelector(".popup").classList.add("hide");

}