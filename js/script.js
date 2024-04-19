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



function toggleUI() {
    document.body.classList.toggle('ui-hidden');
    var hideUIButton = document.querySelector('.hide-ui-btn');
    hideUIButton.textContent = document.body.classList.contains('ui-hidden') ? 'ｓｈ ｏ ｗ ｕｉ' : 'ｈｉｄｅ ｕｉ';
}
