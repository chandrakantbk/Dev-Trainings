/**
*This is Ajax Demo
**/
		
var ResObj ;
		
function load() {

  var xhttp = new XMLHttpRequest();

  xhttp.open("GET",  "https://jsonplaceholder.typicode.com/todos/1/" , true);
  
  xhttp.send();
  
  xhttp.onreadystatechange =  function() {
	
	console.log( this.readyState );
	console.log(this.status);
	console.log(this);
	
	if(  this.status == 404 ){
	
	document.getElementById("demo").innerHTML  = "NOT FOUND";
	
	}
	
	if ( this.readyState == 4 && this.status == 200 )  { 
	
		document.getElementById("demo").innerHTML = this.responseText;
		
		ResObj = this.responseText;
		
		nowShowObject( )
		
	} 
				
  };

}


function nowShowObject(){
	
	//alert(ResObj)

	console.log(  ResObj );
	
	console.log(  typeof ResObj )
	
	console.log( ResObj.title )
	
	console.log("Now converting to JSON")
	
	var jsonObj = JSON.parse( ResObj );
	
	console.log( jsonObj );
	
	console.log( typeof jsonObj );
	console.log( jsonObj.title );
	
	
}
 


function refresh(){	
	
	location.reload();

}
