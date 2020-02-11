
var marks = 10;

function fun( e ) {
		
		
		
}

/** DOMContentLoaded:  HTML parsing && DOM tree but external resources maight not have loaded */
/** onload: confirmation external resources loaded */

document.addEventListener('DOMContentLoaded' ,  function(e){
	
	console.log(e);
		
	marks++;
	
	document.getElementById("num-1").value = marks;
	
	MyProcess();
		
} );

function MyProcess(){
	
	var btn = document.getElementById("time-btn");
	
	
	btn.addEventListener("click", async function(){      

		var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
		
		var timeData = await response.json();  
		
		console.log( timeData.client_ip );
		
		document.getElementById("message").innerHTML  =  timeData.client_ip
		
	} );
	
	
}


