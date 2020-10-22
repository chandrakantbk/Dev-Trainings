var data = [
    { name: "SK", city: "Pune" },
    { name: "PK", city: "Mumbai" },
    { name: "Anuja", city: "Pune" },
    { name: "Kanchan", city: "Pimpri" },
    { name: "Mamata", city: "Pune" },
    { name: "Sanjay", city: "Pune" },
    { name: "SK", city: "Mumbai" },
]


// 1. find() ==> returs the first matched elem

function getStudentCity(std_name) { // "SK"
    var obj = data.find(function(item) { return item.name == std_name });

    if (obj) {
        return obj.city;

    } else {
        return "NO City Found";
    }
}

var sk_city = getStudentCity("SK");
var anu_city = getStudentCity("Anuja");
var city = getStudentCity("Jeetu");

console.log(city);
console.log(sk_city)


// Sort(next, current) default returns the asc order of the array of string

var list = ["sk", "kanchan", "namrata", "sanjay"];
var asc_order = list.sort();

var numbers = [10, 20, 30, 40, 50];
var addition_of_all = numbers.reduce(function(total, c) { return total + c })
console.log("addition_of_all using reduce() : " + addition_of_all);

console.log(numbers);
var new_length = numbers.shift(60);
console.log(numbers);
console.log("After shift() return the new_length" + new_length);



// fill()

var number_list = new Array(5); // [udefined, undefined, undefined, undefined, undefined]

number_list.fill("blank");

// Eg. 2

var game_points = [10, 20, 30, 40, 50, 60];

game_points.fill(0, game_points.length - 2);


// every() ==> return s true or false 
var game_points = [10, 5, 30, 40, 50, 60];

var is_all_passed = game_points.every(function(item) { return item >= 10 })

//is_all_passed false

// some()


// flat()
var whether = [
    [28, 34],
    [29, 35],
    [27, 32]
]

var flat_data = whether.flat();