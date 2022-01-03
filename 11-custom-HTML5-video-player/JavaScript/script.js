const player = document.querySelector('.playing');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress__filled');
const progressBar = document.querySelector('.progress');

function togglePlay(){
    if (video.paused){
        video.play();
        toggle.innerHTML = '<i class="fa fa-pause"></i>'
    }
    else{
        video.pause();
        toggle.innerHTML = '<i class="fa fa-play"></i>'
    }
}
toggle.addEventListener(('click'), togglePlay);
video.addEventListener(('click'), togglePlay);


function skip(){
    video.currentTime += Number(this.dataset.skip);
    // handleProgress();
}
skipButtons.forEach((skipButton) => { skipButton.addEventListener('click', skip)})


function handleUpdateRange() {
    video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener('click', handleUpdateRange))


function handleProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = percent + '%';
}
video.addEventListener('progress', handleProgress);

function handleProgressRange(e) {
    console.log(e.offsetX);
    let percent = (e.offsetX / progressBar.offsetWidth) * video.duration;
    // progress.style.flexBasis = percent + '%';
    video.currentTime = percent ;
}

progressBar.addEventListener('click', handleProgressRange);
progressBar.addEventListener('change', handleProgressRange);

// const fullScreen = document.querySelector('.Full-screen');
// fullScreen.addEventListener('click', ()=>{
//     document.querySelector('.player').style.width = `${window.innerWidth}`;
    // video.height = `${100}%`;
    // video.width = `${100}%`;

// })



