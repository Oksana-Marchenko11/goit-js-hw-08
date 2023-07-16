import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

let currentTime = localStorage.getItem("videoplayer-current-time");
currentTime ||= 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(currentTime);
