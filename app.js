// Video auto-switch logic
const video = document.querySelector('.hero-video');
const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];
let videoIndex = 0;

// Auto-switch videos when current video ends
video.addEventListener('ended', () => {
    videoIndex = (videoIndex + 1) % movieList.length;
    video.src = movieList[videoIndex];
    video.play();
});

// Music control button logic
const nextButton = document.querySelector('.next-btn');
const audio = document.querySelector('audio');
let musicStarted = false;

// Function to start music and hide button
function startMusic() {
    if (!musicStarted) {
        audio.play();
        nextButton.style.display = 'none';
        musicStarted = true;
    }
}

// Start music on button click
nextButton.addEventListener('click', startMusic);

// Start music on any click on the page
document.addEventListener('click', startMusic);