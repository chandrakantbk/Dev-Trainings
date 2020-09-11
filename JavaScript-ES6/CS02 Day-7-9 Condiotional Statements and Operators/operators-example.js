function check() {
    var age;

    age = document.getElementById("user-input").value; // "58"

    console.log(age)

    //Logical operators will work with string format number to check

    if (age <= 58) {
        alert("You are in service");
    }

}

// check();