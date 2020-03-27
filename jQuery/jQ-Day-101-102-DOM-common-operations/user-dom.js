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
2. Modify DOM conent
3. Add elements into DOM  .append(" <p>last line </p> ")
4. Remove elements from DOM   .remove()


5. Add/Remove Class     .addClass("class-name")   .removeClass(".class-name")

6. Attributes modify/add/remove  .attr("id", "value")  removeAttr("id")

7. Data modify/add/remove

8. Events add/remove/off
	.click
	.keyup

	.on("eventName", handlerFunction)


*/


/*
	var my_event = 'click';

	$("#btn-1").on(my_event, function() { })

	document.getElementById("btn-1").addEventListener("click", function() {

	});
	document.getElementById("btn-1").removeEventListener("click");

	$(".submit-btn").on("click", handleSubmit);
	$("#btn-1").off("click")

*/

//DOM ready
$(document).ready(function() {
    //jQuery event method "click"
    $("#btn-1").click(function() {
        $(".test-line").addClass("text-red");
    })

    $(".submit-btn").on("click", handleSubmit);

    $.each($("p"), function(index) {
        $(this).attr("id", "line-" + index)
    })

    /** this function def is under user-sync.js file */
    if (typeof syncMyContent == "function") {
        syncMyContent();
    }

});


function handleSubmit() {
    var user = $("#username").val();
    console.log(user)
    if (user == "ck") {
        //$("#username").removeClass("invalid");
        // $("#username").addClass("text-green");
        $(".login-box").remove();

    } else {
        $("#username").addClass("invalid");

    }


}