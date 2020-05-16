
$(document).ready( function(){ 

	$(".hidebtn").click( function(){  
	
		$(".box").hide(1000);
	
	} );
	

	$(".showbtn").click( function(){  
	
		$(".box").show(1000);
	
	} );

	$(".deletebtn").click( function(){  
	
		 $(".box p").eq(4).html("")
	
	} );
	
	

} );



