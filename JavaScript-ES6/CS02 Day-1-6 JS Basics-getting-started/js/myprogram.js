// var number1 = 10; //number
// var number2 = 20;
// var result = number1 * number2;
// var myname = 'CK'; //string
// var _switch = false; //Boolean true/false
// alert(result);


function multiplication() {
    var number1 = 10; //number
    var number2 = 20;
    var result = number1 * number2;
    var city = 'Pune'; //string
    var _switch = false; //Boolean true/false
    alert(result);
}

/*
multiplication(); // Function Invocation  // call
multiplication();
multiplication();
multiplication();

*/

function addition() {
    // get value from numebr-1 box
    // get value from numebr-2 box

    var number1 = document.getElementById("num-1").value; // "20"

    var number2 = document.getElementById("num-2").value; // "20"

    var result = Number(number1) + Number(number2);

    console.log(number1);

    alert(result);

}