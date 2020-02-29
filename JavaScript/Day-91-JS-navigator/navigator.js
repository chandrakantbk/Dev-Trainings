/**
 JS navigator object
*/


function checkBrowser(){

	
	if( navigator.userAgent.includes("Firefox") ){
		document.getElementById("valid-content").innerHTML = "";
		
		document.getElementById("message").innerHTML = "This page is not available on Firefox browser. ";
		
		
	}




}