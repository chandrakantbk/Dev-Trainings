/*
DOM operation

body div > at the end    "<p>Please change your browser to chrome </p>"

DOM
	|
	|-  <html> 
	|		<div>
	|			<p>
	|			<p>
	|			<p>
	|			<button onclick="fun()">
	|		</div>
	|		
	|		<div id="box-1">
	|		         
	|		</div>
	|		
	|	</html>


$("#box-1").html(    )


*/


/** 
1. Acessing DOM Elements $("#id_1")   $(".item-class")
2. Modify DOM
3. Add elements into DOM
4. Remove elements from DOM


5. Add/Remove Class     .addClass("class-name")   .removeClass(".class-name")
6. Attributes modify/add/remove
7. Data modify/add/remove

8. Events add/remove/off


*/




$(document).ready( function(){ 
		
		
		$("#btn-1").click(   function(){
			
			$(".test-line").addClass("text-red");
			
		})
		
		
		$("#submit-btn").click(   function(){
			
			var user = $("#username").val();
			
			if( user ==  "ck" ){
				
				$("#username").removeClass("invalid");
				
			} else {
				
				$("#username").addClass("invalid");
			}
			
		} )
		
		
		
		
		

} );



