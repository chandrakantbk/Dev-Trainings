/* Day-38 Practice session on CURD operation on Array  */

// 1. Creating/Adding new data inside array
// 2. Deleting an element from array
// 3. Updating an element in array
// 4. Reading/showing an array elements

var students_data = [
    { name: 'Andrew', score: 96, city: 'Mumbai', dob: '12-02-1995' },
    { name: 'Ankita', score: 95, city: 'Pune', dob: '21-02-1995' },
    { name: 'Namrata', score: 86, city: 'Indore', dob: '23-02-1995' },
    { name: 'Sanjay', score: 98, city: 'Sagar', dob: '25-02-1995' },
    { name: 'Kanchan', score: 99, city: 'Varanasi', dob: '12-02-1995' },
    { name: 'Sagar', score: 100, city: 'Nashik', dob: '02-02-1995' },
]

function showRecords() { // undefined  ==> falsy value

    var table_elm = document.getElementById('students_table');

    var code_str = '<tr> <th>Name</th> <th>DOB</th> <th>City</th> <th>SCORE</th> <th>Action</th> </tr>';

    students_data.forEach(function(item, index) {

        code_str = code_str + `<tr> 
                <td> ${ item.name } </td>
                <td> ${ item.dob } </td>
                <td> ${ item.city } </td>
                <td> ${item.score } </td>
                <td class="text-right"> 
                    <button class="btn btn-danger" onclick="handleDelete( ${index} )">DEL</button>
                    <button class="btn btn-primary" onclick="handleUpdate( ${index} )">UPDATE</button>
                </td>
            </tr>`

    });

    table_elm.innerHTML = code_str;


    /*
    var data_array = array || students_data;
    if (Array.isArray(data_array) == true) { // false

    }
    */
}

function handleUpdate(indexNumber) {
    var record = students_data[indexNumber];
    //var str = "Current Name: " + record.name + ' Enter new Name';
    var message_string = `Current Name: ${record.name}. Enter new Name`;

    var user_input = prompt(message_string);

    students_data[indexNumber].name = user_input; // issue if prompt canceled by user

    showRecords();
}

function handleDelete(number) {
    var deletedItem = students_data.splice(number, 1);
    alert(deletedItem[0].name + ' deleted');
    showRecords();
}

function addRecord() {
    var temp = { name: 'Test', score: 75, city: 'Mumbai', dob: '12-02-1995' };
    students_data.push(temp);
    showRecords();
}