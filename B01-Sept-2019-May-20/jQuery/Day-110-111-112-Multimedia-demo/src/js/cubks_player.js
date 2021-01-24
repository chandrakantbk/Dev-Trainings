/** Creating Video Player 
 * Author: CK 
 */

const player = function() {
    let self = this;

    self.isEventAdded = false;
    self.isVideoLoaded = false;

    var advertiseContainer,
        videoElement,
        playPauseBtn,
        progressBar,
        currentTimer,
        durationTimer,
        adversiseTimes;

    var config = {
        container: '.player-container',
        videoElement: '.player-video',
        playPauseBtn: '.playpause-btn',
        progressBar: '.progress-bar',
        progress: '.filled-area',
        currentTimer: '.current-time',
        durationTimer: '.duration-time',
        advertiseContainer: '.advertise-container',
        isAutoEvents: false,
        icons: {
            'play': 'icon-play3',
            'puase': 'icon-pause2'
        },
        adversiseTimes: [],
    }

    self.initialise = function(settings) {
        
        if (settings) {
            $.extend(config, settings);
        }

        console.log("initialised");

        advertiseContainer = $(config.container).find(config.advertiseContainer);
        
        /** this statement restrict player to play first video */
        videoElement = $(config.container).find(config.videoElement).get(0);

        playPauseBtn = $(config.container).find(config.playPauseBtn);
        progressBar = $(config.container).find(config.progressBar);
        progress = $(config.container).find(config.progress);
        currentTimer = $(config.container).find(config.currentTimer);
        durationTimer = $(config.container).find(config.durationTimer);
        adversiseTimes = config.adversiseTimes;

        videoElement.onloadeddata = function() {
            self.isVideoLoaded = true;
            $(durationTimer).html(Math.round(videoElement.duration));

            if (config.isAutoEvents) {
                self.addMediaEvents();
            }
        }

    }

   self.pause = function(){
      videoElement.pause();
   }

    self.play = function() {
        if (videoElement.paused) {
            $(advertiseContainer).slideUp();
            videoElement.play();
            $(playPauseBtn).addClass(config.icons.puase).removeClass(config.icons.play);
        } else {
            videoElement.pause();
            $(playPauseBtn).addClass(config.icons.play).removeClass(config.icons.puase);
        }
    }

    self.addMediaEvents = function() {
        if (self.isEventAdded) { return false }
        $(playPauseBtn).removeClass('disabled');

        var uniqueTime;
        var currentProgress = 0;

        $(playPauseBtn).on("click", function() {
            
            if ($(this).hasClass("disabled")) {
                return false;
            }
            self.play();
        });

        $(videoElement).on('timeupdate', function(event) {
            let time = Math.round(videoElement.currentTime);
            let duration = Math.round(videoElement.duration);

            /** Avoid to re-run the function on same time again, 
             * because timeupdate fires more than once on the same second eg. 1.25 sec then again on 1.65 sec 
             * to avoid that we are using a variable uniqueTime
             * */
            if (uniqueTime == time) {
                return false;
            }

            uniqueTime = time;
            currentProgress = time / duration * 100;

            $(progress).css({ 'width': currentProgress + '%' });
            $(currentTimer).html(time);
            if (adversiseTimes.includes(time)) {
                videoElement.pause();
                $(advertiseContainer).slideDown();
            }

            console.log(time);
        });

        $(videoElement).on("ended", function() {
            $(config.playPauseBtn).addClass(config.icons.play).removeClass(config.icons.puase);
        })

        $(videoElement).on("pause", function() {
            $(config.playPauseBtn).addClass(config.icons.play).removeClass(config.icons.puase);
        });

        self.isEventAdded = true;
    }

    self.removeEvents = function() {
        $(playPauseBtn).addClass("disabled");
    }

}