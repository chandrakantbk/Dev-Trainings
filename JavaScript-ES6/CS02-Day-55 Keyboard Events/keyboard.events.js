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
    input
*/

//fu
function hanldeSearch(params) {
    var val = document.getElementById("search_box").value; //why?
    console.log(val);
    document.getElementById("output_box").innerHTML = val;
    // clg
}