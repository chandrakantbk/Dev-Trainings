// show students records
/*
var data = [
    { name: 'SK', city: 'Pune' },
    { name: 'Trupti', city: 'Pune' },
    { name: 'Namrata', city: 'BLR' },
    { name: 'Sanjay', city: 'Mumbai' },
    { name: 'Arushi', city: 'Pune' },
]

*/

var data = getStudentsData();

function showRecords() {
    // alert("I will do it")

    var tbl = document.getElementById('data_table');

    var all_records = '<tr> <th>Name</th> <th>City</th> </tr>';

    for (var item of data) {
        all_records = all_records + '<tr> <td>' + item.name + '</td> <td>' + item.city + '</td> </tr>';
    }

    // for (var index = 0; index < data.length; index++) {
    //     all_records = all_records + '<tr> <td>' + data[index].name + '</td> <td>' + data[index].city + '</td> </tr>';
    // }

    tbl.innerHTML = all_records;

}


function sortByName() {

    data.sort(function(next, c) {
        return next.name.localeCompare(c.name)
    })

    showRecords();
}

function showTopThree() {
    var top_three = data.slice(0, 3);
    /*
        [{ name: 'SK', city: 'Pune' }, { name: 'Trupti', city: 'Pune' }, { name: 'Namrata', city: 'BLR' },]
    */

    console.log(top_three)

    var tbl = document.getElementsByTagName('table')[0];

    var all_records = '<tr> <th>Name</th> <th>City</th> </tr>';

    for (var item of top_three) {
        all_records = all_records + '<tr> <td>' + item.name + '</td> <td>' + item.city + '</td> </tr>';
    }

    tbl.innerHTML = all_records;

}

// Day 45
function how_many_classes_on_table() {
    var tbl = document.getElementById('data_table');

    var no_of_classes = tbl.classList.length;

    console.log(tbl.classList);
    console.log(no_of_classes);

    tbl.classList.add('bg-warning');

}


function change_tbl_bg() {
    var tbl = document.getElementById('data_table');
    //tbl.classList.add('bg-warning');
    //tbl.classList.remove('bg-warning');

    tbl.classList.toggle('bg-warning');

}














function printNumbers() {
    var all_buttons = document.getElementsByTagName('button');
    var all_btns = document.getElementsByClassName('btn');
    //var all_btns = document.querySelectorAll('.btn');

    for (var i = 1; i <= all_buttons.length; i++) {

        console.log('Button ' + i);

    }

}