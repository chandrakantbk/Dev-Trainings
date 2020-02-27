/** 
*@Author: CK
*@Desciption: Working with string methods
*@Function: myString()
*@Retuns: <number> 
*/

myString();

function myString( ){

	var str = 'Hello, CK. CK, This is Akashay. This is islamabad.';
	
	if(  str  ){
		
		console.log("this is truthy")
		
	}
	
	
	/** Write a program to find out the index of given string, also state that given string is available in the source string or not */

	//immuntable data structure //string
	
	//meaning + value : doesn't change
	
	// str = "Hi";
	
	//str.toLowerCase();   // hi


	//num = 10;
	
	//

	/** Methods **/
	//	indexOf()  returns -1: if not found, or index of given string. Index start with 0
	//	lastIndexOf()  returns -1: if not found, or index of given string. Index start with 0
	
	
	var indx = str.indexOf("CK");

	if(  indx == -1){
		
		console.log("Not Available");
		
	} else {
		console.log("Given String is available at: " + indx);
	}

	/**  */
	//includes()  returns true if given substring found, or false if not found
	
	if(   str.includes("CK")  ){
		console.log("CK Available");
	}
	
	
	/** Print the ASCII values of each charector of given string */
	
	str = "HELLOW";
	
	
	var current_char;
	var ascii_code;
	
	
	for(let i = 0; i <= 5; i++){
		
		current_char  = str.charAt( i );
		
		ascii_code = str.charCodeAt( i )
		
		console.log( current_char + " : " +ascii_code )
		
	}
	
	
	/** Find if the given string has more than 3 bad words  */
	
	//["cheater", "worst", "cheat"]
	
	// "You are a cheaterand I don't like to talk with cheater like you. And You are the worst person on earth who cheat-agaist-friendship. "
	
	// couter = 0
	
	// indexOf(param, pos);
	// includes(param, pos);
	
	
	
	
	var multilineStr  = `The Console now supports redeclarations of let and class statements. 
	The inability to redeclare was a common annoyance for web developers 
	who use the Console to experiment with new JavaScript code.`
	
	
	var str2 = `hiii 




	iii`
	
	
	var myHtml = '<div class="myclass"> '
	
	
	
	var myhtml2=  `${num}`
	
	
	
	
	/*
	
	
	
	1] step1: pos = indexOf("0") return > -1
	2] remember pos 
	3] again start search from pos+1 
	4] check step 1 else end
	
	var occurences = 0;
	
	//for loop
	for(let index = 0; index < str.length; index++ ){
	
			current_char  = str.charAt( index );
			
			//current_char  =  str[ index ]
			
			if(current_char == "0" ){
				
				occurences++
				
				console.log( index );
				
			}
		
	}
	
	// for-of loop
	for(let ch of str){
		
		console.log( ch );
	}
	
	var cur_pos = -1;
	
	while( true ){
		
		if (str.indexOf("0", cur_pos + 1) == -1 ){
			
			break;
			
		}else{
			
			cur_pos  = str.indexOf("0", cur_pos + 1);
			
			occurences++;
		
		}
		
	}
	
	
	
	*/
	
	
	
	
	


}















