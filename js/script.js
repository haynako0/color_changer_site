// bgm player

const backgroundMusic = document.getElementById('backgroundMusic');
const playMusicButton = document.getElementById('playMusicButton');
let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        playMusicButton.textContent = 'ｐｌａｙ ｍ ｕｓｉｃ';
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        playMusicButton.textContent = 'ｐａｕｓｅ ｍ ｕｓｉｃ';
    }
}

playMusicButton.addEventListener('click', toggleMusic);



// ui hider
function toggleUI() {
    document.body.classList.toggle('ui-hidden');
    const hideUIButton = document.querySelector('.hide-ui-btn');
    hideUIButton.textContent = document.body.classList.contains('ui-hidden') ? 'ｓｈ ｏ ｗ ｕｉ' : 'ｈｉｄｅ ｕｉ';
}



// wallpaper changer
function changeColor(color) {
    var video = document.getElementById('video-background');
    video.style.opacity = 0;
    setTimeout(function() {
        switch (color) {
            case 'red':
                video.src = 'vid/red_wallpaper.mp4';
                break;
            case 'orange':
                video.src = 'vid/orange_wallpaper.mp4';
                break;
            case 'yellow':
                video.src = 'vid/yellow_wallpaper.mp4';
                break;
            case 'green':
                video.src = 'vid/green_wallpaper.mp4';
                break;
            case 'blue':
                video.src = 'vid/blue_wallpaper.mp4';
                break;
            case 'violet':
                video.src = 'vid/violet_wallpaper.mp4';
                break;
            default:
                video.src = 'vid/blue_wallpaper.mp4';
                break;
        }
        video.load();
        setTimeout(function() {
            video.style.opacity = 1;
        }, 500);
    }, 500);
}
