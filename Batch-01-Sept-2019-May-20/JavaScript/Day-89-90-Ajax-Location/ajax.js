/**
*This is Ajax Demo
**/
		
			
		
var ResObj ;
		


var timeBox;


document.addEventListener('DOMContentLoaded', function(){
	 timeBox = document.getElementById("time-1");
	 
	 setInterval(updateTime, 3000);
	 
})

function updateTime(){
	
	var api_url = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata';
	
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", api_url, true);
	
	xhr.send();
	
	xhr.onreadystatechange =  function(){
		
		if ( this.readyState == 4 && this.status == 200 )  { 
			
			console.log( this.responseText );
			
			let timeObj = JSON.parse( this.responseText  );
			
			let date_time = timeObj.utc_datetime;
			
			let arr = date_time.split("T");
			
			let time = arr[1];
			
			timeBox.value = time; 
		}
		
	}
	
	
	

}




function load() {
	
  var sk = new XMLHttpRequest();

  sk.open("GET",  "https://jsonplaceholder.typicode.com/todos/1/" , true);
  
  sk.send();
  
  sk.onreadystatechange =  function() {
	//0   unset
	//1  open
	//2  header set
	//3 response, not parse
	//4 response ready
	
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
