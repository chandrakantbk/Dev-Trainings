// Day - 30 Push() Pop() shift() unshift()

var stack = [];
var stack_size = 5;

function addElement() {
    // add a element in the stack
    var data = document.getElementById("stack-input").value;

    if (data == "") {
        alert("Please enter the element")
        return false
    }

    if (stack.length < stack_size) {
        var len = stack.push(data);

        document.getElementById("cart_number").innerHTML = len; //updates number 

    } else {
        alert("Stack Overflow")
    }


}

function removeElement() {
    // remove a element from the stack
    stack.pop()
    document.getElementById("cart_number").innerHTML = stack.length; //updates number 
}

function showStack() {
    // get/show a element in the stack

    var box = document.getElementById("stack-output");
    box.innerHTML = stack;
}


var students_marks = [10, 50, 60, 80, 85, 90]

// pop() push() shift() unshift()

// students_marks.length ==> 

//console.log(students_marks.length) // 3
/*

students_marks[5] //   undefined

var result = 80 //students_marks.pop()

students_marks[3] = 85

students_marks[students_marks.length] = 85

students_marks.unshift(10); // 5

var newLength = students_marks.push(90) // 5

*/

/*

// Day 31


Shopping cart == >
    size: 5

samsung
realme
Nokia
Lenovo
iPhone


*/



var basket = ['samsung'];
var basket_size = 5;
var no_of_items = 0; //1

function addToBasket(item) {

    if (no_of_items < basket_size) {

        no_of_items = basket.push(item); // return length

        console.log(no_of_items)

    } else {
        alert("Basket is full")
    }
}

addToBasket("samsung")
addToBasket("realme")

function removeLastItem() {
    if (basket.length > 0) {
        var removedItem = basket.pop(); // return 'realme'

        return removedItem;

    } else {
        alert("Basket is empty");

        return "Basket is empty"
    }

}

var whichItemRemove = removeLastItem()

console.log(whichItemRemove)

addToBasket("Samsung")
addToBasket("Nokia")


var pipe = [100];
// If given value is less than 100, then add it before 100 else add it to after 100;
// push() pop() shift() unshift()

function add(item) {
    if (typeof item != "number") {
        return false;
    }

    if (item < 100) {
        pipe.unshift(item);
    } else {
        pipe.push(item)
    }

}

function remove(item) {
    var removedItem;

    if (item < 100) {
        removedItem = pipe.shift();
    } else {
        removedItem = pipe.pop()
    }

    return removedItem;
}

var all_items = [50, 60, "CK", 80];

for (var e of all_items) {
    add(e);
}