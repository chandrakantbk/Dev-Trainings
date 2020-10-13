var women_coach = [
    { seat: "L1", is_reserved: true },
    { seat: "L2", is_reserved: true },

    { seat: "L3", is_reserved: false }, // is_reserved = true

    { seat: "L4", is_reserved: true },
    { seat: "L5", is_reserved: false },
]

function bookMySeat() {

    // Solution by Arushi
    var is_avail = 'no';

    for (var item of women_coach) {

        if (item.is_reserved == false) {
            item.is_reserved = true;
            is_avail = 'yes';
            alert(item.seat);
            break;
        }
    }

    if (is_avail == 'no') {
        alert("Seat is not available")
    }


}
/*
function bookMyseat() {
    var seat_avail = women_coach.find(function(n) {
            return n.is_reserved !== true
        })
        // [  { seat: "L3", is_reserved: false }, ]
    if (seat_avail.length == 0) {
        alert("seat is not available")
    }

    for (var val of seat_avail) {
        if (seat_avail[0].seat == val.seat) {
            val.is_reserved == true
            alert(val.seat + "is reserved for you ")
            break;
        }
    }
}
*/

function getMySeat() {
    // Solution by SK
    var seat_avail = women_coach.find(function(item) {
        return !item.is_reserved
    });

    // {seat: "L3", is_reserved: false}

    console.log(seat_avail)


    if (seat_avail == undefined) {
        alert("NO Seat Avaible ")
        return false;
    }

    for (var index = 0; index < women_coach.length; index++) {

        if (women_coach[index].seat == seat_avail.seat) {
            women_coach[index].is_reserved = true;
            break;
        }

    }

    alert(seat_avail.seat);
}