/**   
	CRUD Operation on Array [    ]
	
	MEAN STACK 
	
	Node.js
	Express.js   =>  [  MongoDB / Mysql / AWS Clould ]
		
**/


function handleCreate(){
	/** Create a new record */
	/* var s_marks = document.getElementById("marks-input").value; */
	
	var s_name = document.querySelector("#name-input").value;
	var s_marks = document.querySelector("#marks-input").value;

	/*	
		if(isNaN( s_marks ) || s_name == 'undefined' || s_name == "" ){
			return false;	
		}
		
	*/
	//s_marks = Number( s_marks );
	
	console.log(s_name)
	console.log(s_marks)
	
	//{  id: 8, role_number: 106, name: "test" , mark: 400   }
	
	let last_item = database[ database.length - 1 ];
	
	let record = { 
		id: database.length + 1,
		role_number:  last_item.role_number + 1,
		name: s_name, 
		mark:  s_marks 
	}

	console.log( record );
	
	database.push( record );
	
	console.log( database )	

}

