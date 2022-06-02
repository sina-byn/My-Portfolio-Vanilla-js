const videos = document.querySelectorAll('video');
const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach((btn, idx) => btn.addEventListener('click', () => {
    playVideo(idx);
}));

window.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        videos.forEach(video => {
            video.style.display = "none";
            video.pause();
        });
    }
});

function playVideo(idx) {
    videos.forEach(video => {
        (!video.paused) ? video.pause() : null;
        video.style.display = "none";
    });
    videos[idx].style.display = "initial";
    videos[idx].load();
    videos[idx].play();
    videos[idx].requestFullscreen();
}


