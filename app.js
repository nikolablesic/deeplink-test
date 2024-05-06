let stopwatchSeconds = 53;
let stopwatchMinutes = 9;
let stopwatchHours = 0;
let stopwatchInterval;

'use strict';

function updateStopwatch() {
    stopwatchSeconds++;
    if (stopwatchSeconds === 60) {
        stopwatchSeconds = 0;
        stopwatchMinutes++;
    }
    if (stopwatchMinutes === 60) {
        stopwatchMinutes = 0;
        stopwatchHours++;
    }
}

function resizeClock() {
    //    COLLECTING ALL DATAS FROM HTML
    var circle = document.querySelectorAll('.clock-shape');
    var clockSize = getComputedStyle(document.documentElement).getPropertyValue('--clockSize');
    var circleSize = 'calc(' + clockSize + ' / 2)';
    var circleRadius = 'calc((' + clockSize + ' / 2) - 1rem)';

    //    RESIZING THE CIRCLE SIZE ACRODING TO THE SVG SIZE
    for (let i = 0; i < circle.length; i++) {
        circle[i].setAttribute('cy', circleSize);
        circle[i].setAttribute('cx', circleSize);

        circle[i].setAttribute('r', circleRadius);
    }
}

clockFun()
setInterval(clockFun, 1000)

function clockFun() {
    //    GETTING THE TIME 
    let hour = stopwatchHours;
    let sec = stopwatchSeconds;
    let min = stopwatchMinutes;
    //    STYLING THE HOURS AND MINUTES
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    //    UPDATEING THE CIRCLE LOADER VALUE WITH SECONDS
    document.documentElement.style.setProperty('--loadingSize', sec);
    //    SELECTING THE HOUR, MINUTE AND COLON
    const hourTxt = document.querySelector('.hour');
    const minTxt = document.querySelector('.min');
    var colon = document.querySelector('.colon');
    //    UPDATING THEM WITH HOUR AND MINUTE VALUE
    hourTxt.innerHTML = min;
    //minTxt.innerHTML = min;
    minTxt.innerHTML = sec;
    //    ADDING SIMPLE SECOND EFFECT TO THE COLON
    if (!colon.classList.contains('sec')) {
        colon.classList.add('sec')
    }
    //    CALLING THIS FUNCTION TO UP TO DATE THE TIME
    updateStopwatch()
}
