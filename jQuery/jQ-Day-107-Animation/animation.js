function myHideShow() {
    //$(".card-img-top").eq(0).hide(1000);
    //$(".card-img-top").eq(0).show();
    //$(".card-img-top").eq(0).slideUp(1000);
    //$(".card-img-top").eq(0).slideDown(1000);

    $(".card-img-top").eq(0).toggle(1000);

}

function slideCard() {
    $(".card-img-top").eq(1).slideToggle(1000);
}


var is_animated = false;

function animateDown() {
    //$(".card-img-top").eq(2).animate(whatcssjs, timing/speed, after_complete_callback_function )

    $(".card-img-top").eq(2).css({ 'position': 'absolute' });

    if (is_animated) {

        $(".card-img-top").eq(2).animate({ top: '0px' }, 2000, function() {
            console.log("Animation Completed")
            is_animated = false;

            $(".card-img-top").eq(2).css({ 'position': 'static' });

        });

    } else {

        $(".card-img-top").eq(2).animate({ top: '350px' }, 2000, function() {
            console.log("Animation Completed")
            is_animated = true;
        });

    }


}


function goTop() {
    /** Scroll the div from bottom to top */
    $(".container > div").animate({ scrollTop: 0 }, 2000)
}