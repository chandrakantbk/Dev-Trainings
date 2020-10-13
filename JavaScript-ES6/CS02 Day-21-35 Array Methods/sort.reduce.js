// Day - 33


function addition(arr) {
    // return the sum of all elements in the given array
    var result;

    result = arr.reduce(function(total, current) {
        return total + current
    });

    return result;
}

var myarr = [50, 60, 40]

var sum = addition(myarr);
var rem = addition([40, 30, 10]);

console.log("reduce ans of rem: " + rem)
console.log("reduce ans of sum: " + sum)



function showMyAddition() {
    var array = [50, 60, 80];
    document.getElementById("addition_box").innerHTML = addition(array);
}




students_list = [
    { name: "Namrata", age: 24 },
    { name: "SK", age: 25 },
    { name: "Kanchan", age: 26 },
    { name: "Arushi", age: 27 },
    { name: "Trupti", age: 22 },
]


function showData() {
    var code = "";

    for (var item of students_list) {
        code = code + '<tr> <td>' + item.name + '</td><td>' + item.age + '</td></tr>'
    }
    console.log(code)
    document.getElementById("student_table").innerHTML = code;
}














function learning() {
    var arr = [50, 60, 80]

    var sum = 0;

    for (var item of arr) {
        sum = sum + item;
    }

    console.log(sum)


    var sub = 0;

    for (var item of arr) {
        sub = item - sub;
    }

    console.log(sub)

    var result = arr.reduce(function(sum, current) { return sum + current }) //
    var result = arr.reduceRight(function(sum, current) { return sum + current }) //



    students = [
        { name: "A", age: 23 },
        { name: "B", age: 22 },

        { name: "B", age: 22 },
        { name: "C", age: 25 },
        { name: "D", age: 26 },
    ]

    /*
    +positive ===>   1
    Same==>          0
    small ====>     -1       
    */

    arr.sort(function(next, current) { return current - next }) // dec
    arr.sort(function(next, current) { return next - current }) // Asc

    var name_list = ["D", "B", "C", "A"];

    name_list.sort(function(next, current) {
        if (next > current) { return 1 }
        if (next === current) { return 0 }
        if (next < current) { return -1 }
    })
    console.log(name_list)
}