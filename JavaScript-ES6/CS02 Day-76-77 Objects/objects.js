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
