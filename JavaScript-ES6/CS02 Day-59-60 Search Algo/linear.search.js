/* Linear Search */

var resultIndex;
var search = 45;
var data_array = [10, 20, 25, 30, 45, 60] // length 6, 

function usingForIn() {
    for (var key in data_array) {
        if (data_array[key] == search) {
            console.log("Found at index: " + key);
            break;
        }
    }
}

function usingForOf() {
    // Using for-of loop
    var temp_index = -1;
    for (let val of data_array) {
        temp_index++;
        if (val == search) {
            console.log("Found At: " + temp_index); //45
            break;
        }
    }
}

function usingForLoop() {

    // Uisng simple for loop
    for (let index = 0; index < data_array.length; index++) {
        if (search == data_array[index]) {
            console.log("Found At Index: " + index);
            break;
        }
    }

}


function usingWhileLoop() {
    // Using while loop
    var length = data_array.length;
    var index = 0;
    while (index < length) {
        if (data[index] == search) {
            console.log(index)
            break;
        }
        index++;
    }
}