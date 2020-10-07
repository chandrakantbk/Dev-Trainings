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
        document.getElementById("cart_number").innerHTML = len;
    } else {
        alert("Stack Overflow")
    }


}

function removeElement() {
    // remove a element from the stack
    stack.pop()
}

function showStack() {
    // get/show a element in the stack

    var box = document.getElementById("stack");
    box.innerHTML = stack;
}