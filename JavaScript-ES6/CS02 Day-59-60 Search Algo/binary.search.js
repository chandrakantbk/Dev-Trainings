// Search Algo: Day 59 - Binary Search 

// Binary Search 
var data_array = [10, 20, 25, 30, 45, 60, 80, 90, 100, 110];
var searchValue = 45;
var no_of_jumps = 0;

function binarySearch() {
    var searchValue = document.getElementById("input-value").value;
    if (searchValue == '') {
        alert("Enter value");
        return false;
    }

    var startIndex = 0;
    var lastIndex = data_array.length - 1;

    while (startIndex <= lastIndex) {

        var middleIndex = Math.floor((startIndex + lastIndex) / 2); //2

        if (searchValue == data_array[middleIndex]) {

            console.log("Found value at: " + middleIndex);

            alert("Found at Index: " + middleIndex + "\nJump count: " + no_of_jumps);

            // Use return to return the index number
            return middleIndex;
        }

        if (searchValue < data_array[middleIndex]) {
            lastIndex = middleIndex - 1;
        }

        if (searchValue > data_array[middleIndex]) {
            startIndex = middleIndex + 1;
        }

        // Counting the no. of jumps program is doing to search the value
        no_of_jumps++;
        console.log("Jump count: " + no_of_jumps);
    }

    alert("Not found your value. \nJump count: " + no_of_jumps);
    console.log("Not found your value. \nJump count: " + no_of_jumps);

}