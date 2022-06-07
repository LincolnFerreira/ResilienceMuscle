var bollean = 0;

var audio = new Audio('./images/muzy.mp3');

function ativa() {
    if (bollean == 0) {
        audio.play();
        bollean = 1;
    } else if (bollean = 1) {
        audio.pause();
        bollean = 0;
    }
}