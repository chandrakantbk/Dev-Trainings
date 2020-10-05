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



/* 
// Solution by Arushi

Var w_data = [];
Var w_data = camera_data.filter(function(n) { return n.object > 0 }) var sum = 0
for (var val of w_data) {
var sum += val.object
var avg = sum / w_data.length
if (val.object > avg) { Console.log("robbery is expected to be held on " + (val.day) + (val.month) + (val.year)) }
}

// Changes 
var w_data = []
var w_data = camera_data.filter(function(n) { return n.object > 0 })
var sum = 0
for (var val of w_data) {
sum += val.object
}

var avg = sum / w_data.length

for (var val of w_data) {
if (val.object > avg) {
    Console.log("robbery is expected to be held on " +
        (val.day) + (val.month) + (val.year))
}
}

*/