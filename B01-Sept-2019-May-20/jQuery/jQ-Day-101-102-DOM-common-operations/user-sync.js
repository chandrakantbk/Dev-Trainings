function syncMyContent() {
    console.log("text sync");
    $("p").hide();

    var i = 0;

    var time = setInterval(function() {
        $("p").eq(i).show(500);
        i++;

        if ($("p").length == i) {
            clearInterval(time);
        }

        console.log("executing setInterval")

    }, 1000);


}