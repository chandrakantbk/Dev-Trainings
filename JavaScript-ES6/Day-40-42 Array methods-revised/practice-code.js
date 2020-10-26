// Re-factor the code with best practices and good way


if (window.currentRole == undefined) {

    this.my_currentRole = 'Guest';

    this.my_user_id = window.role_number;

} else {

    this.my_currentRole = window.currentRole;

    this.my_user_id = window.role_number;

}


// Write your solution

this.my_currentRole = window.currentRole || 'Guest';
this.my_user_id = window.user_id;


//==============================


function openAccordion($event, id) {

    if (this.selectedItem == id) {

        this.selectedItem = '';

    } else {

        this.selectedItem = id;

    }

}

// Write it with best practices

function openAccordion(id) {
    this.selectedItem = this.selectedItem == id ? '' : id;
}


//==================================

// Refactor the code in good way in single function

function showReschedulePopup() {
    if (this.training.status == 'ongoing' || this.training.status == 'completed') {
        alert("You cannot reschedule the training now");
    } else {
        this.showReschedule = true;
    }
}

// 















function showSuspendPopup() {
    if (this.training.status == 'ongoing' || this.training.status == 'completed' || this.training.status == 'suspended') {
        alert("You cannot suspend the training now")
    } else {
        this.showSuspend = true;
        this.blur = 'blur';
    }
}

test_these_status = ['ongoing', 'completed', 'suspended'];

showSuspendPopup(test_these_status);

next_sts = ['hold', 'cancel', 'completed']

showSuspendPopup(next_sts)


function showSuspendPopup(param_arr) {
    var status = param_arr;

    if (status.includes(this.training.status)) {
        alert("You cannot suspend the training now");
        return false;
    }

    this.showSuspend = true;
    this.blur = 'blur';
}


var data = [
    [5, 20, 35, 60], // 120
    [40, 50, 60, 80], // 400
    [50, 60, 80, 90], // 600
    [50, 60, 80, 190], // 600
];

max_total = 0;
sum_arr = [];
var ans = data[0].reduce((total, item) => { return total + item }) // 120

sum_arr.push(ans); // [120]

for (var i = 0; i < data.length; i++) {
    var ans = data[i].reduce((total, item) => { return total + item });
    sum_arr.push(ans);
}

sum_arr.sort((next, current) => { return next - curent })

max_total = sum_arr[sum_arr.length - 1]