// Write a function which will return the value at given index;
//2D Array 


function getValue(indexNumber) { // Argument: indexNumber == 1
    var clinical_data = [
        [5, 50],
        [6, 70],
        [6, 80]
    ];

    var fist_val = clinical_data[0]

    fist_val[1]

    clinical_data[0][1]

    if (indexNumber == undefined) {
        return "Please provide index number"
    }

    if (indexNumber >= clinical_data.length) {
        return "Out of range index"
    }

    var value = clinical_data[indexNumber];

    return value;
}

var my_data = getValue(0); // Parameter value [6, 70]

console.log(my_data)


//console.log(clinical_data)

// Day 23 includes and indexOf() methods

// tell me if "NE" is available, if available then tell me the index number.
var topers_list = ["CK", "TE", "NE", "LE", "PO"]
var temp = topers_list.indexOf("NE");
if (temp >= 0) {
    console.log("NE is available at " + temp);
} else {
    console.log("NE is NOT available ")
}