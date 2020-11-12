// Search Algo: Day 59 - Binary Search 

// Binary Search 

var resultIndex;
var search = 100;
var data_array = [10, 20, 25, 30, 45, 60] // length 6, 
    /* Index       0  1   2   3   4   5 */


/*
 startIndex  = 0;
 lastIndex arr.length - 1;

step 1: divide the array length by 2 and get the middle index of array
        middleIndex = Math.floor( (startIndex + lastIndex) / 2 );

step 2: compare your value with middle value of the array.

        search_value == array[ middleIndex ] //middle value

        If yes then you found your value at middle Index. 
        return middleIndex
        If not then go to next step

step 5: compare your value with the value located at the of the array
        
        search_value < array[ middleIndex ]  
        then find your search_value in left side of the array;
        
        lastIndex = middleIndex - 1;

        Now repeat the process again from beigining.
        
step 6: search_value > array[ middleIndex ]  // center point of the array
        then find your search_value in Right side of the array;
        startIndex  = middleIndex + 1;

*/

var startIndex = 0;
var lastIndex = data_array.length - 1;

while (startIndex <= lastIndex) {

}