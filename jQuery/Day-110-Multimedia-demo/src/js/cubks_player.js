/** Creating Video Player 
 * Author: CUBKS 
 */

$(document).ready(function() {

    $(".playpause-btn").on("click", function() {

        var vid = $(".player-video").get(0);
        console.log(vid)

        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }

    })
})