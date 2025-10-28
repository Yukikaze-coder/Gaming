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
let musicPlaying = false;

nextButton.addEventListener('click', () => {
    musicPlaying = !musicPlaying;
    
    if (musicPlaying) {
        audio.play();
        nextButton.textContent = 'MUSIC ON';
        nextButton.classList.add('music-active');
    } else {
        audio.pause();
        nextButton.textContent = 'CLICK HERE';
        nextButton.classList.remove('music-active');
    }
});