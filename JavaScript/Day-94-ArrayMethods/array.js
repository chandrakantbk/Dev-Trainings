



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

getExcludedArray( charc ){
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
