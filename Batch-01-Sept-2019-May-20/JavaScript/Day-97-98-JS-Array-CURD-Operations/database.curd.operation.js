/**   
	CRUD Operation on Array [    ]
	
	MEAN STACK 
	
	Node.js
	Express.js   =>  [  MongoDB / Mysql / AWS Clould ]
		
**/

function handleSubmit(){
	var query_val = document.querySelector("#update-input").value;
	var my_choice = document.getElementById("dropdown").value;
	
	var s_name = document.querySelector("#name-input").value;
	var s_marks = document.querySelector("#marks-input").value;

	if( query_val && my_choice){
		updateRecord( query_val,  my_choice )
		
	}else{ 
		handleCreate();
	}

	
}


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
	
		id: last_item.id + 1,
		
		role_number:  last_item.role_number + 1,
		
		name: s_name, 
		mark:  s_marks 
	}

	console.log( record );
	
	database.push( record );
	
	console.log( database )	
	
	updateWebPage();
	
}


function deleteRecord(){
	
	var record_id = document.getElementById("delete-input").value;
	
	console.log( record_id );
	
	var my_new_arr;
	
	//my_new_arr = database.filter( function( item ){  let flag =  (item !=  record_id ); return flag;   } )
	
	
	my_new_arr = database.filter( function(item){      
		
		if( item.id != record_id){
				return true;
			
			
		} else {
			return false;
		
			
		}
		
	})
	
	database = my_new_arr;
	
	console.log( database )
	console.log(  my_new_arr )
	
	updateWebPage();
	
	
}

function updateRecord(query_val, key ){
	
	var match_query = query_val || document.getElementById("update-input").value;
	
	var key_choice  = key || "id";
	
	var index = getIndex(key, match_query, database);
	
	if( index == -1){
		alert("No Record Found");
		return false;
	}
	
	var s_name = document.querySelector("#name-input").value;
	var s_marks = document.querySelector("#marks-input").value;
	
	database[index].name = s_name;
	database[index].mark = s_marks;
	
	updateWebPage();
	
	//array.splice(  )
	
}


function getIndex(key, value, array){

	for(let index = 0;  index < array.length; index++){
	
		if( array[ index ][key] == value ){		
		
			return index;
			
		}
		
	}
	
	return -1;

}


function updateWebPage(){
	
	var myHTML = " <tr><th style=' width: 40px; '> ID </th>  <th>Name</th> <th>Marks </th>  </tr> ";
	
	for(let item of database){
		console.log( item );
		myHTML = myHTML + ' <tr> <td>'+  item.id  + '</td>';
		myHTML = myHTML + ' <td> ' + item.name + '</td> ';
		myHTML = myHTML + ' <td> '  + item.mark + ' </td>';
		myHTML = myHTML + ' <td> <button id="js_delete_btn-' +  item.id + '"> DELETE </button>  </td> </tr> ';
	}
	
	console.log(myHTML);
	
	document.getElementById("data-table").innerHTML = myHTML;
	
}

