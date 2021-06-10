var seconds = 00;
var milliseconds = 00;
var minutes = 00;
var appendMilliseconds = document.getElementsByClassName("milliseconds")[0];
var appendSeconds = document.getElementsByClassName("seconds")[0];
var appendMinutes = document.getElementsByClassName("minutes")[0];
var buttonStart = document.getElementsByClassName("start")[0];
var buttonReset = document.getElementsByClassName("reset")[0];
var buttonStop = document.getElementsByClassName("stop")[0];


var interval;
/* global clicks variable is used to ensure that start button is only clicked once*/
var clicks = 0;


function startTimer(){
    milliseconds++;

    if(milliseconds<9){
        appendMilliseconds.innerHTML = "0" + milliseconds;
    }
    if(milliseconds>9){
        appendMilliseconds.innerHTML = milliseconds;
    }
    if (milliseconds>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendMilliseconds.innerHTML = "0" + 0;
    }
    if (seconds>9){
        appendSeconds.innerHTML = seconds;
    }
    if (seconds>59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (minutes>9){
        appendMinutes.innerHTML = minutes;
    }
}



buttonStart.onclick = function(){
    clicks += 1;
    if (clicks > 1){
        buttonStart.disabled = true;
    }
    else{
        interval = setInterval(startTimer, 10);
    }
    
};

buttonStop.onclick = function(){
    clearInterval(interval);
    clicks = 0;
};

buttonReset.onclick = function(){
    clicks = 0;
    clearInterval(interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    appendSeconds.innerHTML = seconds;
    appendMilliseconds.innerHTML = milliseconds;
    appendMinutes.innerHTML = minutes;
};