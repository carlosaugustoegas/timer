var playButton = document.querySelector('.start-btn')
var pauseButton = document.querySelector('.pause-btn')
var stopButton = document.querySelector('.stop-btn')
var watch = document.querySelector('#timer')

var sec = 0; 
var min = 0;
var hour = 0;
var interval

playButton.onclick = start;
pauseButton.onclick = pause;
stopButton.onclick = stop;

function twoDigits(digit) {
    if(digit < 10) {
        return ('0'+ digit)
    } else {
        return(digit);
    }
}

function start() {
    timer()
    interval = setInterval(timer, 1000)
}

function pause() {

    clearInterval(interval)
}

function stop() {

    clearInterval(interval)
    sec = 0;
    min = 0;
    hour = 0;
    watch.innerText = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`
}

function timer() {

    watch.innerText = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`
    sec++
    if(sec == 60) {
        min++
        sec = 0;
        if(min == 60) {
            hour++
            min = 0;
        }
    }
    
}

