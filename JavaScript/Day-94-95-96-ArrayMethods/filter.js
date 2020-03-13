
/** 
9] filter()			: return new array of matched conditions
10] find()			: returns index 

*/

function handleSubmit(){
	getStudentDetails();
	getStudentListMoreThanXMarks();
	
	getToperStudents();
	
} 
 
 function getStudentListMoreThanXMarks(){
	 var temp_arr = [ ];
	 
	 for( let i = 0; i < database.length; i++ ){
		
		let item_obj = database[ i ] ;
		
		if( item_obj.mark > 80 ){
			 temp_arr.push( item_obj.name )
		 }
		 
	 } 
	
	document.querySelector("#students").innerHTML = temp_arr.join(" - ");
	 
	 return temp_arr;
	 
 }
 
 
 function getToperStudents(){
	 
	 var temp_arr = database.filter( function( item ){  
	 
		 /* if(  item.mark > 80 ){
			
			return true;
			 
		 }else{
			 
			 return false;
			 
		 }
		 
		 */
		 
		
		 return item.mark > 80;
	 
	 } );
	 
	 
	 var temp_arr = database.filter( function( item ){  return item.mark > 80 } );
	 
	 //ES6
	 
	 var temp_arr = database.filter(   (item) => { return item.mark > 80 }   );
	 
	 var temp_arr = database.filter( item =>  item.mark > 80 );
	 
	 
	 
	 
	 console.log("Using filter method");
	 console.log(temp_arr);
	 
	 
 }
 
 
 
 
 

function getStudentDetails(){
	/* find method */	 
	var my_seat_number = document.getElementById("seat-number").value;
	
	var matched = database.find( function(  item  ){    
		console.log( item.role_number )
		
		if( item.role_number == my_seat_number ){
			return true;
		} else {
			return false;
		}
		
	} )
	
	console.log("After find");
	console.log( matched  );
	
	if( matched ){
		document.getElementById("s_name").innerHTML = matched.name;	
		document.getElementById("s_marks").innerHTML = matched.mark;
	}
	
	
}


function getTopEmployees(  no_of_emp   ){


}