function bookTicket() {
    var user_name = prompt("Enter your name"); //null
    var age = prompt("Enter your age"); // null

    var user_dest = prompt("ENTER your city code. \nPune: 10, Nagpur: 20, BRL: 30");

    var total = 0;
    var user_choice;

    if (!user_dest) {
        return false;
    }

    switch (user_dest) {
        case "10": //Pune
            total = 300;

            if (age >= 60) {
                total = total - total * (10 / 100);
            }

            break;

        case "20": //Nagpur
            total = 550;

            if (age >= 60) {
                total = total - total * 0.10;
            }

            break;

        case "30": //BRL
            total = 600;

            if (age >= 60) {
                total = total - total * 0.10;
            }

            break;
    }



    // if(age >= 60){
    //     total = total - total * 0.10;
    // }


    user_choice = confirm("Your ticket price: " + total + " Do you want to proceed for payment?");

    console.log("User choice " + user_choice);

    if (user_choice == true) {

        window.print();

    } else {
        alert("Please visit us again. Happy to help you")
    }

}

function printMyPage() {
    window.print();
}