
document.addEventListener("DOMContentLoaded", startProcessing)


function startProcessing(event){
	
	document.onmousemove = function( event ){  
		
		
		
		if(event.x > 100 && event.y < 200){
			
			console.table( [event.x, event.y] );
			
		}
		
				
	}
	
	
	var i = 0;
		
	document.ondblclick = async function( event ){  
		
		console.log(event.target);
		
		console.log( event.target.tagName )
		
		var url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';
		
		var externalResponse = await fetch(url);
		
		var data = await externalResponse.json();
		
		console.log( data )
		
		 if( event.target.tagName == "INPUT"){
			 
			 event.target.value = data.dataseries[  i  ].wind10m.direction;
			 
			 i++;
		 }
		
	} 
	
	
	
	
}











