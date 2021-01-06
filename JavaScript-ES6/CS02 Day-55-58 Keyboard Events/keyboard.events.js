//Day 55 and 56, 58

var data = [
    { name: 'Arushi', age: 25, city: 'Pune' },
    { name: 'SK', age: 23, city: 'Pune' },
    { name: 'Kanchan', age: 22, city: "Mumbai" },
    { name: 'Namrata', age: 24, city: "BRL" },
]

/*
    keydown
    keyup
    keypress
    input ===> it will be fast than others
*/

var timer;

function exeAfterSomeTime() {
    timer = setTimeout(function() {
        alert("I am executing after 5 seconds.");

    }, 5000);

}

function cancelTimer() {

    clearTimeout(timer);

}

var search_timer;

//fu
function handleSearch(params) {
    console.log(params)

    clearTimeout(search_timer);

    search_timer = setTimeout(function() {

        console.log(params)

    }, 300);



    // var t = setTimeout(fun, 4000)

    // clearTimeout(t)

    /* if (params.key == "g") {
        params.preventDefault();
    } */

    if (params.code == "Space") {
        params.preventDefault();
    }

    /* 
    var val = document.getElementById("search_box").value; //why?

    console.log(val);

    document.getElementById("output_box").innerHTML = val;
    // clg */
}

// Write a program to restrict z, x, 5, ;


function typeSentences() {

    setTimeout(function() {
        document.getElementById("output_box").innerHTML = "Hello and Welcome to my webpage";
    }, 1000);

    setTimeout(function() { document.getElementById("output_box").innerHTML = "I am from India"; }, 3000);

    setTimeout(function() {

        document.getElementById("output_box").innerHTML = "My city is Pune";

    }, 4500);
}