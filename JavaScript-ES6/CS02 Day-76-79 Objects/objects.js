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

var person = { name: 'Kanchan', age: 15, standard: 10, height: "6" }  // Object


//data.appleComputers = "IT company"

/*
var data = {};

var key = prompt("Add your company name: ");

data[key + "Computers"] = "IT company"
*/


var companyData = {}

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