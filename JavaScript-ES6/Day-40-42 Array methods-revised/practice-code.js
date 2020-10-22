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
    if (this.training.status == 'ongoing' || this.training.status == 'completed') {
        alert("You cannot suspend the training now")
    } else {
        this.showSuspend = true;
        this.blur = 'blur';
    }

}