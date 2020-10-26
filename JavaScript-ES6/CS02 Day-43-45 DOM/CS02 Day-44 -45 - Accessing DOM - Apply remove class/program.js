// show students records

var data = [
    { name: 'SK', city: 'Pune' },
    { name: 'Trupti', city: 'Pune' },
    { name: 'Namrata', city: 'BLR' },
    { name: 'Sanjay', city: 'Mumbai' },
    { name: 'Arushi', city: 'Pune' },
]


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


















function printNumbers() {

    for (var i = 1; i <= 10; i++) {

        console.log(i);

    }

}