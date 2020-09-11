function validate() {
    var message = "Hello";

    var required_marks = 60;

    var user_marks = prompt("Enter your marks") // "60" //null

    if (user_marks >= required_marks) {

        alert("You are applicable for the process");

    } else if (user_marks >= required_marks - 10) {

        var choice = confirm("Your application in review. You may take admission in private quota. Do you want to proceed")

        console.log(choice)

        if (choice != true) {
            alert("Please try next year")
        }

    } else {
        alert("You are not applicable")
    }

    //alert(marks);

}