
document.addEventListener("DOMContentLoaded", startProcessing)


function startProcessing(event){
	
	
	//addMyEvents();
	
	
	
}

function addMyEvents(){
	
	//addMouseEvents()
	
	
	var textBox2 = document.getElementById("num-2");
	
	
	textBox2.addEventListener("paste", function(event){  
		console.log( event );
		
		event.preventDefault();
	
		return false;
		
	} );
	
	
	textBox2.onselect = function( event ){
		console.log( event )
		event.preventDefault();
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


function addMouseEvents() {
	var isMouseDown = false;
	
	var img = document.getElementById('img-1');
	
	document.onmousemove = function( event ){  
		
		if( isMouseDown==true ){
			/*
			
			if(event.x > 100 && event.y < 200){
				console.log("X : " + event.x + " ::  Y: " + event.y );
			}
				
				*/
				
				
				/** Using position property */
				/*
					img.style.left =  event.x;
					img.style.top =  event.y;
					img.style.position = 'absolute';
					
				*/
				
				/** Using transform */
				
				var x =  event.x +"px";
				var y  = event.y  + "px";
				
				img.style.transform = "translateX(" + x + ") translateY("+ y + ")";
				
				
	}
		
				
	}
	
	document.onmousedown = function( event ){  
		isMouseDown = true;
		console.log("Mouse button down");

	}
	
	
	document.onmouseup = function( event ){  
		isMouseDown = false;
		console.log("Mouse button onmouseup")
		
	}
	
}








