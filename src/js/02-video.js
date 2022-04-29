import throttle from 'lodash.throttle';

const playerFrame = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(playerFrame);


const onTimeUpdate = time => {
    localStorage.setItem('videoplayer-current-time', time.seconds);
    console.log(parseInt(localStorage.getItem('videoplayer-current-time')));
};

    player.on('timeupdate', throttle(onTimeUpdate, 1000));

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time')) 

    .then(function(seconds) {
    })
    .catch(function(error) {
    switch (error.name) {
        case 'RangeError':    
            break;
        default:  
            break;
    }
});

