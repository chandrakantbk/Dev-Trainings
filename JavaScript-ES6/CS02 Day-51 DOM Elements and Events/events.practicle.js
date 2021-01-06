function fun() {
    var heading = document.getElementsByTagName('h1')[0];

    heading.innerHTML = "I have Learned JS Events"
}

function showMessage() {
    alert("Right click not allowed");
    return false;
}


function updateBox() {

    var boxes = document.getElementsByClassName("box"); //[ div ]

    var data = document.getElementById("user_input").value;

    console.log(boxes)

    console.log(data)

    console.log(boxes.length)

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = data;
    }

}