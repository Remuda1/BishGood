document.addEventListener('DOMContentLoaded', function() {
    const goodButton = document.getElementById('goodButton');
    const goodAudio = document.getElementById('goodAudio');

    goodButton.addEventListener('click', function() {
        // Stop the audio if it's already playing and reset it
        if (!goodAudio.paused) {
            goodAudio.pause();
            goodAudio.currentTime = 0;
        }
        goodAudio.play();
    });
});
