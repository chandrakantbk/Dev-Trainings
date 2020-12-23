var array_list = [50, 60, 70, 80, 90, 100];

console.log(array_list);

/*
for (var key in array_list) {
   console.log(array_list[key])
}

for (let index = 0; index < array_list.length; index++) {
   console.log(array_list[index])
}

*/

for (var value of array_list) {
    console.log(value)
} 