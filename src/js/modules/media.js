export function init() {
    // audio
    document.querySelectorAll('.audio-container').forEach(function(el){
        const videos = document.querySelectorAll('.video-containers');
        const audios = document.querySelectorAll('.audio-container');
        const audio = el.querySelector('.audio');
        const audioControls = el.querySelector('.audio-controls');
        const playButton = el.querySelector('.play');
        const playbackIcons = el.querySelectorAll('.playback-icons .playback-icon');
        const timeElapsed = el.querySelector('.time-elapsed');
        const duration = el.querySelector('.duration');
        const progressBar = el.querySelector('.progress-bar');
        const seek = el.querySelector('.seek');
        const seekTooltip = el.querySelector('.seek-tooltip');
        const playbackAnimation = el.querySelector('.playback-animation');
        const audioContainer = el.querySelector('.podcasts__audio-item-media');
    
        const audioWorks = !!document.createElement('audio').canPlayType; 
        if (audioWorks) { 
        audio.controls = false; 
        audioControls.classList.remove('hidden'); 
        } 
    
        function togglePlay() {
        if (audio.paused || audio.ended) {
            videos.forEach(function(el){
            const video = el.querySelector('.video');
            video.pause();
            el.querySelector('.video-controls').classList.add('hide');
            el.querySelector('.video-content').classList.remove('hide');
            })
            audios.forEach(function(el){
            const audio = el.querySelector('.audio');
            audio.pause();
            })
            audio.play();
        } else {
            audio.pause();
        }
        }
    
        playButton.addEventListener('click', togglePlay);
    
        function updatePlayButton() {
        playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
        if (audio.paused) {
            playButton.setAttribute('data-title', 'Play')
        } else {
            playButton.setAttribute('data-title', 'Pause')
        }
        }
    
        audio.addEventListener('play', updatePlayButton);
        audio.addEventListener('pause', updatePlayButton);
    
        function formatTime(timeInSeconds) {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
        
        return {
            minutes: result.substr(3, 2),
            seconds: result.substr(6, 2),
        };
        };
    
        function initializeAudio() {
        const audioDuration = Math.round(audio.duration);
        seek.setAttribute('max', audioDuration);
        progressBar.setAttribute('max', audioDuration);
        const time = formatTime(audioDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
        }
    
        audio.addEventListener('loadedmetadata', initializeAudio);
    
        function updateTimeElapsed() {
        const time = formatTime(Math.round(audio.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
        }
    
        audio.addEventListener('timeupdate', updateTimeElapsed);
    
        function updateProgress() {
        seek.value = Math.floor(audio.currentTime);
        progressBar.value = Math.floor(audio.currentTime);
        }
    
        audio.addEventListener('timeupdate', updateProgress);
    
        function updateSeekTooltip(event) {
        const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
        seek.setAttribute('data-seek', skipTo)
        const t = formatTime(skipTo);
        seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
        const rect = audioControls.getBoundingClientRect();
        seekTooltip.style.left = `${event.pageX - rect.left}px`;
        }
    
        seek.addEventListener('mousemove', updateSeekTooltip);
    
        function skipAhead(event) {
        const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
        audio.currentTime = skipTo;
        progressBar.value = skipTo;
        seek.value = skipTo;
        }
    
        seek.addEventListener('input', skipAhead);
    })
    
    // video 
    document.querySelectorAll('.video-containers').forEach(function(el){
        const audios = document.querySelectorAll('.audio-container');
        const videos = document.querySelectorAll('.video-containers');
        const video = el.querySelector('.video');
        const videoControls = el.querySelector('.video-controls'); 
        const videoContent = el.querySelector('.video-content'); 
        const playButton = el.querySelectorAll('.play'); 
        const playbackIcons = el.querySelectorAll('.playback-icons .playback-icon');
        const timeElapsed = el.querySelector('.time-elapsed');
        const duration = el.querySelector('.duration');
        const progressBar = el.querySelector('.progress-bar');
        const seek = el.querySelector('.seek');
        const seekTooltip = el.querySelector('.seek-tooltip');
        const playbackAnimation = el.querySelector('.playback-animation');
        const videoContainer = el.querySelector('.video-container');
    
        const videoWorks = !!document.createElement('video').canPlayType; 
        if (videoWorks) { 
        video.controls = false; 
        videoControls.classList.remove('hidden'); 
        } 
    
        function togglePlay() {
        if (video.paused || video.ended) {
            audios.forEach(function(el){
            const audio = el.querySelector('.audio');
            audio.pause();
            })
            videos.forEach(function(el){
            const video = el.querySelector('.video');
            video.pause();
            video.classList.remove('playing');
            el.querySelector('.video-controls').classList.add('hide');
            el.querySelector('.video-content').classList.remove('hide');
            })
            video.play();
            videoControls.classList.remove('hide');
            videoContent.classList.add('hide');
        } else {
            video.pause();
        }
        }
    
        video.addEventListener('play', function(e){
        video.classList.add('playing');
        })
        video.addEventListener('ended', function(e){
        video.classList.remove('playing')
        })
        playButton.forEach(function(el){
        el.addEventListener('click', togglePlay);
        })
    
        function updatePlayButton() {
        playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
        if (video.paused) {
            playButton.forEach(function(el){
            el.setAttribute('data-title', 'Play')
            })
        } else {
            playButton.forEach(function(el){
            el.setAttribute('data-title', 'Pause')
            })
        }
        }
    
        video.addEventListener('play', updatePlayButton);
        video.addEventListener('pause', updatePlayButton);
    
        function formatTime(timeInSeconds) {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
        
        return {
            minutes: result.substr(3, 2),
            seconds: result.substr(6, 2),
        };
        };
    
        function initializeVideo() {
        const videoDuration = Math.round(video.duration);
        seek.setAttribute('max', videoDuration);
        progressBar.setAttribute('max', videoDuration);
        const time = formatTime(videoDuration);
        duration.innerText = `${time.minutes}:${time.seconds}`;
        duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
        }
    
        video.addEventListener('loadedmetadata', initializeVideo);
    
        function updateTimeElapsed() {
        const time = formatTime(Math.round(video.currentTime));
        timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
        timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
        }
    
        video.addEventListener('timeupdate', updateTimeElapsed);
    
        function updateProgress() {
        seek.value = Math.floor(video.currentTime);
        progressBar.value = Math.floor(video.currentTime);
        }
    
        video.addEventListener('timeupdate', updateProgress);
    
        function updateSeekTooltip(event) {
        const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
        seek.setAttribute('data-seek', skipTo)
        const t = formatTime(skipTo);
        seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
        const rect = video.getBoundingClientRect();
        seekTooltip.style.left = `${event.pageX - rect.left}px`;
        }
    
        seek.addEventListener('mousemove', updateSeekTooltip);
    
        function skipAhead(event) {
        const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
        video.currentTime = skipTo;
        progressBar.value = skipTo;
        seek.value = skipTo;
        }
    
        seek.addEventListener('input', skipAhead);
    
        video.addEventListener('click', togglePlay);
    
        function animatePlayback() {
        playbackAnimation.animate([
            {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
            },
            {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(1.3)",
            }], {
            duration: 500,
        });
        }
    
        video.addEventListener('click', animatePlayback);
    
        function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            // Need this to support Safari
            document.webkitExitFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
            // Need this to support Safari
            videoContainer.webkitRequestFullscreen();
        } else {
            videoContainer.requestFullscreen();
        }
        }
    
        video.ondblclick = toggleFullScreen;
    
        function hideControls() {
        if (!video.paused) {
            return;
        }
        
        videoControls.classList.add('hide');
        videoContent.classList.remove('hide');
        }
        
        function showControls() {
        videoControls.classList.remove('hide');
        videoContent.classList.add('hide');
        }
    
        // video.addEventListener('mouseenter', showControls);
        // video.addEventListener('mouseleave', hideControls);
        // videoControls.addEventListener('mouseenter', showControls);
        // videoControls.addEventListener('mouseleave', hideControls);
        video.addEventListener('ended', () => {
        hideControls()
        });
    }) 

    function range() {
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #F59139 0%, #F59139 ' + value + '%, #E5DCFF ' + value + '%, #E5DCFF 100%)'
    }
      
    document.querySelectorAll('.range-2').forEach( function ( el ) {
        el.oninput = range
    })
}