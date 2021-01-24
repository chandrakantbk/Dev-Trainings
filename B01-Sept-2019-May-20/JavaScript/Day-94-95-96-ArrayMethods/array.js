
/*** 

1] unshift() 		: Adds value to start of the array : [ Modify Array ]
2] shift()			: Remove value from the first position :  [ Modify Array ]
3] push()			: Adds the value after last index of the array [ Modify Array]
4] pop()			: Removes the value from last index [ Modify Array]
5] reverse()		: last index value becomes first index value. Reverse the entire array   [ Modify Array]
6] indexOf()		: Given value available index number or -1 [NO modify]
7] includes()		: returns true if value is present in array, or return false
8] concat()		: Combine given array, string or interables into one array, and return new array 
9] filter()			: return new array of matched conditions
10] find()			: returns index 

*/

var database  =  [ 
	{id: 1, role_number: 101, name: "Chandrakant", mark: 82 },  
	{id: 2, role_number: 102, name: "SK", mark: 80 } , 
	{id: 3, role_number: 103, name: "SJ" , mark: 65 },  
	{id: 4, role_number: 104, name: "Ashu" , mark: 65 },  
	{id: 5, role_number: 105, name: "Akshay", mark: 100 } 
	
	//===>>>
]


var vowels = ['a', 'e', 'i', 'o', 'u'];

//var array = [10, 'Akshay', 'i', false, { name: "CK"  }, [ 10,20,30 ]   ];
var str = "Sk is a good boy";

var newString =  getStringWithoutVowels(str, vowels)

console.log(newString)

function getStringWithoutVowels(inputStr, inputArray ){
	let temp = "";
	
	if( !inputStr || typeof inputStr != "string"){
		return
	}
	 
	for(let i=0; i < inputStr.length; i++){

		let found = false;
	   
	   for(let j = 0; j < vowels.length; j++){
		 
		 if( inputStr[ i ] == vowels[ j ] ){
			  found=true; 
			  break;
		  }
		  
	   }
	   
		if( !found ){
			temp = temp + inputStr[ i ]
		}
		
	}

	return temp;
	
}


/*
function getStringWithoutVowels(inputStr, inputArray ){
	let temp = "";
	if( !inputStr || typeof inputStr != "string"){
		return
	}
	 
	for(let  ch of inputStr){
		 temp =  !inputArray.includes( ch ) ? temp + ch : temp;
	}

	return temp;
	
}
*/

function getExcludedArray( charc ){
	var temp = [ ];
	for(let i = 0; i <  vowels.length; i++){
		
		if( vowels[ i ] !=  charc ){
			temp.push(   vowels[ i ]  );
		}
		
	}

	return temp;
	
}


var my_database = [



]
