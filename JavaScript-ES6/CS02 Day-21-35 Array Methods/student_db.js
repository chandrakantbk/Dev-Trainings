// Day - 35 13-Oct-2020: Map(), reverse(), forEach(), split(), join()

function getData() {
    //get data from another website/service/api
    var data = [
        { name: "SK", city: "Pune", tel: "022-85645" },
        { name: "Namrata", city: "Pune", tel: "020-80645" },
        { name: "kanchan", city: "Mumbai", tel: "020-65045" },
        { name: "Arushi", city: "Mumbai", tel: "021-55025" },
    ]

    return data;
}

var student_list = getData();

function updateWebpage(array) {
    // it will update the view on webpage
    var table = document.getElementById("std_data_tbl");

    var code_str = "";

    var index = 0;

    while (index < student_list.length) {
        var item = student_list[index];
        code_str = code_str + "<tr><td>" + item.name + "</td><td>" + item.city + "</td><td>" + item.tel + "</td></tr>";
        index++;
    }

    table.innerHTML = code_str;

    console.log(table)

}


var data = [
    { name: "SK", city: "Pune", tel: "022-85645" },
    { name: "Namrata", city: "Pune", tel: "020-80645" },
    { name: "kanchan", city: "Mumbai", tel: "020-65045" },
    { name: "Arushi", city: "Mumbai", tel: "021-55025" },
    { name: "Trupti", city: "Mumbai", tel: "021-55025" },
]