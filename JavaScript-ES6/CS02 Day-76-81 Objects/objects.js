/*
// Day-77: 7-Jan-2020

var flat_counter = 1001;

function Person(u_name, u_city, no_of_flats) {
    this.flat = flat_counter;
    this.pool = 'Pool';
    this.name = u_name;
    this.city = u_city;
    this.total_price = no_of_flats * 50;

    flat_counter++;
}

var ks = new Person('Kanchan', 'Pune', 2);
var sk = new Person('SK', 'BLR', 4);

var k = { flat: '101', city: 'Pune' }
var s = { flat: 401, city: 'BLR' }
var v = { flat: 501, city: 'Chennai' }


// Day 78: 8-Jan-2020
var ad_1 = { name: 'CK', fees: 1500 }
var ad_2 = { name: 'Arushi', fees: 1000 }


var sk_addmission = new getAdmission("SK", 5)

function getAdmission(u_name, no_courses) {
    this.name = u_name
    this.fees = no_courses * 5;
}

run();
function run() {
    var i = 10;
    var z = 10 + i; //20

}
*/

// Day 79: 9-Jan-2020 Object

var number = 500;

var list_of_students = [10, 20, 30]

var person = { name: 'Kanchan', age: 15, standard: 10, height: "6" } // Object


//data.appleComputers = "IT company"

/*
var data = {};

var key = prompt("Add your company name: ");

data[key + "Computers"] = "IT company"
*/

var companyData = { appleComputers: 'IT Company', }

function addCompany() {
    var keyName = prompt("Enter name: ");

    companyData[keyName + "Computers"] = "IT Company";

    console.log(companyData)

    var e = document.getElementById("comapny-list");

    var name_list = [];

    for (let key in companyData) {
        name_list.push(key)
    }

    e.innerHTML = name_list.join(" - ");

}




// Day 80: 11-Jan-2021
var admition_data = {
    college: 'Sample College',
    city: 'BR',
    "FY1990": 500205,
    "FY1991": 40404,
}

function addIncome() {
    var year = document.getElementById('fy-year').value; // ""
    var income = document.getElementById('fy-income').value;

    if (year == "") {
        alert("Enter Year");
        return true;
    }

    admition_data["FY" + year] = income;

    console.log(admition_data);

    alert(year + " Added Successfully!");

    document.getElementById('fy-year').value = "";
    document.getElementById('fy-income').value = "";
}

// Day 81: 13-Jan-2021
/*
function contructor
Object.create 

{city: 'Pune'}


obj.FY1990
var k = 'city';
obj[k] = "Pune"

habbits = {name: 'CK', [k]: value,  }
habbits[k] = value

*/

// Ussing function contructor 
//this//
function Human(p_name) {

    let n = 10;

    this.name = p_name;
    this.age = 0;

    var a = 5;

    if (a < n) {
        console.log(B); //invalid
        let B = 20;

        B = 30;
        let z = n + B;

        B++;

    }

}

console.log(n)

var person_1 = new Human('Jerry'); //{name: 'Jerry', age: 0}

var str = ''
var person_2 = new Human(str); //{name: 'Jerry', age: 0}


var o = Object.create(person_1)

//var o = person_1;

var animal = {
    run: true
}

tiger = Object.create(animal);

var myanimal = Object.create(animal)