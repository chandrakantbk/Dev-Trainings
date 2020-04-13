/** Creating Video Player 
 * Author: CUBKS 
 */

const player = function() {
    let self = this;

    self.isEventAdded = false;

    var vid = $(config.videoElement).get(0);
    vid.onloadeddata = function() {
        self.addMediaEvents();
    }

    self.play = function() {
        if (vid.paused) {
            $(config.advertiseContainer).slideUp();
            vid.play();
            $(this).addClass(config.icons.puase).removeClass(config.icons.play);

        } else {
            vid.pause();
            $(this).addClass(config.icons.play).removeClass(config.icons.puase);
        }
    }

    self.addMediaEvents = function() {
        if (isEventAdded) { return false }
        $(config.playPauseBtn).removeClass('disabled');

        var uniqueTime;
        var vid = $(config.videoElement).get(0);
        var currentProgress = 0;

        $(config.playPauseBtn).on("click", function() {
            if ($(this).hasClass("disabled")) {
                return false;
            }
            $(config.durationTimer).html(Math.round(vid.duration));
            self.play();

        });

        $(config.videoElement).on('timeupdate', function(event) {
            let time = Math.round(vid.currentTime);
            let duration = Math.round(vid.duration);

            /** Avoid to re-run the function on same time again, 
             * because timeupdate fires more than once on the same second eg. 1.25 sec then again on 1.65 sec 
             * to avoid that we are using a variable uniqueTime
             * */
            if (uniqueTime == time) {
                return false;
            }

            uniqueTime = time;

            console.log(time);

            currentProgress = time / duration * 100;

            $(config.progress).css({ 'width': currentProgress + '%' });

            $(config.currentTimer).html(time);

            if (config.adversiseTimes.includes(time)) {
                vid.pause();
                $(config.advertiseContainer).slideDown();
            }

        });

        $(config.videoElement).on("ended", function() {
            $(config.playPauseBtn).addClass(config.icons.play).removeClass(config.icons.puase);
        })

        $(config.videoElement).on("pause", function() {
            $(config.playPauseBtn).addClass(config.icons.play).removeClass(config.icons.puase);
        });

        self.isEventAdded = true;

    }

    self.removeEvents() {
        $(config.playPauseBtn).addClass("disabled");
    }

}

$(document).ready(function() {
    //player(); //normal function invoke

    var player_1 = new player();

})