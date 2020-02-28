//location

function getLocationDetails(){

	console.log( "getLocationDetails ");
	
	alert( location.protocol )
	
	alert(location.href);
	
	
	
}

//var url  = prompt("Tell me URL where you want to go");

function redirectTo(){
	
	//location.href  = url;
	
}


function search(){
	
	var searchValue = document.getElementById("search-box").value;
	
	if(searchValue==""){
		alert("Enter your query");
		
		return false;
		
	}
	
	location.href  = "https://www.google.com/search?q="+searchValue;
	
}


