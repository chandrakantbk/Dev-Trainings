var student_info = {
    role_number: 100,
    "first name": "Arushi",
}

console.log(student_info['first name'])

for (var key in student_info) {
    console.log(student_info[key])
}

for (var value of student_info) {
    console.log(value)
}




// Assignment: show all the values 
student_details = {
    id: 121,
    name: "Namrata",
    address: {
        city: 'Pune',
        state: 'MH',
        country: 'India'
    },
    age: 40,
    marks: [60, 80, 90]
}

// hint for inner for loop
if (typeof student_details['marks'] == 'object') {
    for (var v of student_details[marks]) {
        console.log(v)
    }
}