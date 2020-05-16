
var wordList = ["Akshay", "Aksha", "Akii", "Akka", "Bombey", "Buldhaka" ];

function processData(e){
 
	var data  = [ ];
	var myVal = document.getElementById("num-1").value; // Ak
	
	myVal = myVal.toUpperCase();

	 for(var idx = 0; idx < wordList.length; idx++) {
		 
		 let  str = wordList[ idx ];
		 
		str = str.toUpperCase();
		 /** Start with given word */
		 
		 /*
			 if( str.indexOf( myVal  ) ===  0  )
			 {
				 data.push(  wordList[ idx ] );
				 
			 }
		 
		 */
		 
		 /** Search word with given string  */
		 /* 
			 if( str.indexOf( myVal  ) >= 0  )
			 {
				 data.push(  wordList[ idx ]     );
				 
			 }
		 */
		 
		  /** Search word with given string  */
		 if( str.indexOf( myVal  ) !== 0  )
		 {
			 data.push(  wordList[ idx ]     );
			 
		 }
	 
		 
	 }
	  
	 console.log(data);
	 
	document.getElementById("message").innerHTML  = data;
	
	return data;

}




function handleBlur( e ){

		console.log(e)
	
}



function handleFocus( e ){

		console.log(e)
	
}








