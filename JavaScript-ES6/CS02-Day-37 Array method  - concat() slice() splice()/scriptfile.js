// Day - 37
var array_1 = [10, 20, 30];
var array_2 = [50, 60, 80];

function concatMydata() {
    var temp_array = [];

    for (var item of array_1) {
        temp_array.push(item);
    }
    for (var item of array_2) {
        temp_array.push(item);
    }

    var my_data = array_1.concat(array_2)


}

function getSomeElements() {
    // slice()
    var toppers_list = ["CK", "Sanjay", "Namrata", "Arushi"];
    var first_2 = toppers_list.slice(0, 2);

    console.log(first_2) // ["CK", "Sanjay"]
}

function deleteSomeElements() {
    // splice(start_index, deleteCount, "replacement")
    var toppers_list = ["CK", "Sanjay", "Namrata", "Arushi"];
    var deleted_list = toppers_list.splice(0, 2, "SK");

    console.log(deleted_list) // ["CK", "Sanjay"]
    console.log(toppers_list) // ["SK", "Namrata", "Arushi"]

}