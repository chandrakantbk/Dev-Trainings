/* Day 36 - 14 Oct 2020: Practice from scratch  */

var message = "Hello ";

function show() {
    var box = document.getElementById("user_box");
    var name = prompt("Enter your name")

    var text = message + name;
    // text = "Hello " + "Kanchan"

    alert(text)
}

function replaceWithName() {
    var box = document.getElementById("user_box"); // span
    // var name = prompt("Enter your name");

    console.log(box)
    console.log(box.innerHTML)

    var str = "myname";

    str = str + "yourname"; // str = "mynameyourname"

    str = "myname" + "yourname"; // str = "mynameyourname"

    str = str + "Namrata"; // str =  "mynameyournameNamrata"

    box.innerHTML = str;

    // "<strong>Kanchan</strong>" 

}

var data = [
    { name: "SK", tel: "022-562582" },
    { name: "Namrta", tel: "020-562582" },
    { name: "Kanchan", tel: "500-562582" },
    { name: "Trupti", tel: "600-562582" },
]

function showTable() {
    var str = "<tr> <th>Name </th> <th> Phone </th> </tr>";

    for (var item of data) {
        str = str + "<tr><td>" + item.name + "</td> <td>" + item.tel + "</td></tr>";
    }

    console.log(str);

    var box = document.getElementById("data_table");
    box.innerHTML = str;

}