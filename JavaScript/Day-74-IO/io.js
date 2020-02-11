
function calc(){
	var num1; //undefined
	var num2; //undefined
	var answer; //undefined
	
	num1 = document.getElementById("num-1").value; //"10"
	
	num2 = document.getElementById("num-2").value //"20"
	
	//answer = "10" + "20" ==>> 1020 //typeof : string
	
	//answer = Number( num1 ) + Number( num2 );
	
	if( isNaN( num1 )  || isNaN( num1)  ){
		
			answer = num1  + num2 ;
			
	} else {
		
		answer = Number( num1 ) + Number( num2 );
	
	}
	
	
	
	document.getElementById("output-1").value = answer;
	
}
