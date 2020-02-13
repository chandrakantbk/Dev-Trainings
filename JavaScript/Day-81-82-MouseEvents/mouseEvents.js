
//var img = document.getElementsByTagName("img");

//var img = document.getElementsById("img-1");
		
//console.log( img )

//load  ==> HTML parsing/resources loaded

//DOMContentLoaded: ===> HTML Parsing DOM structure / 


document.addEventListener("DOMContentLoaded", startProcessing)


function startProcessing(event){
	
	console.log("akjsdhkfjdskf")
	
	
	
	var imgObj = document.querySelector("img");

	imgObj.addEventListener("mouseenter", function( event ){  
		
		console.log(event);
		
		if(event.shiftKey){
			
			console.log("Mouse moved with holding shift key");
			
		}
		
		imgObj.style.border = " 10px solid #0f0"
		
		
	} );
	
	document.onmousemove = function( event ){  
		
		console.log(event);
				
	} );
	
	imgObj.addEventListener("mouseleave", function( event ){  
		
		//console.log(event);
		
		imgObj.style.border = " 15px solid maroon "
		
	} );
	
	
	
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












/*

onmousedown: null

onmouseenter: null

onmouseleave: null

onmousemove: null

onmouseout: null

onmouseover: null

onmouseup: null

onmousewheel: 

click
ondblclick

*/