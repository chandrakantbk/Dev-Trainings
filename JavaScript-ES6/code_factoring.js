if (window.localStorage.currentRole == undefined) {
    this.currentRole = 'Admin';
    this.user_id = window.localStorage.user_id;
} else {
    this.currentRole = window.localStorage.currentRole;
    this.user_id = window.localStorage.user_id;
}



//==============================


function openAccordion($event, id) {
    if (this.selectedItem == id) {
        this.selectedItem = '';
    } else {
        this.selectedItem = id;
    }
}

//==================================

// Refactor the code in good way in single function

function showReschedulePopup() {
    if (this.training.status == 'ongoing' || this.training.status == 'completed') {
        alert("You cannot reschedule the training now");
    } else {
        this.showReschedule = true;
        this.blur = 'blur';
    }
}

function showSuspendPopup() {
    if (this.training.status == 'ongoing' || this.training.status == 'completed') {
        alert("You cannot suspend the training now")
    } else {
        this.showSuspend = true;
        this.blur = 'blur';
    }

}