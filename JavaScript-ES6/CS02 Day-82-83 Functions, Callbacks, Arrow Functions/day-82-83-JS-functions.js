//22-Jan-2021
function addNumbers() {

}


addNumbers();

var calc = addNumbers;

calc()


var obj = {
    name: "KK",
    age: 60,
    address: { street: "Lane 1", city: "Pune" },
    sayHi: function() {
        alert("Hello " + this.name)
    }
}

obj2 = obj



obj.sayHi()

obj.address.street

    (function() {
    var a = 40;
    console.log("Hi");

})()

(function() {

})()

var addNumbers = function() {}

addNumbers()

var b = addNumbers;

b()



function add() {
    // code
}

var cc = add;

cc()

(function() {})()


var mul = function(name, age) {

}

mul("sk", 56)


// Arrow function 23-Jan-2021


var arr = [10, 20, 30, 40, 2, 8]

arr.sort(function(next, current) {
    return next - current; //
})

//ES6 

arr.sort((n, c) => {
    return n - c;
})

arr.sort((n, c) => n - c)

/*
less    -1
equal    0
greter   1
*/


arr.find((a) => { return a == 10 })
arr.find(a => a == 10)



/*
8421

Binary decimal
0001 === > 1
0010
0011
0100
0101 == > 4 bit


arr.sort()

64

ASCII

    -
    9
0 10
1 11
2 12


null 0
A => 65 == > 0101010010101101
B => 66
C => 67

*/