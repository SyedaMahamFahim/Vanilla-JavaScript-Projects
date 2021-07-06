// Animation JS

anime.timeline({ loop: true })
    .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Clock Function JS
var hours = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var interval;
var getHours = document.getElementById("hours");
var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getMilliSec = document.getElementById("millisec");

function timer() {
    millisec++;
    getMilliSec.innerHTML = millisec;
    if (millisec >= 100) {
        sec++;
        getSec.innerHTML = sec;
        millisec = 0;
    }
    else if (sec >= 60) {
        min++;
        getMin.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hours++;
        getHours.innerHTML = hours;
        min = 0;
    }
}
function start() {
    interval = setInterval(timer, 10);
    document.getElementById("start_clock").disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById("start_clock").disabled = false;
}
function restart() {
    var hours = 0;
    var min = 0;
    var sec = 0;
    var millisec = 0;
    getMilliSec.innerHTML = millisec;
    getSec.innerHTML = sec;
    getMin.innerHTML = min;
    getHours.innerHTML = hours;
    stop()
    document.getElementById("start_clock").disabled = false ;
    
    
    
}


// window.onbeforeunload = function () {
//     var start_clock = document.getElementsById("start_clock");
//     for (var i = 0; i < start_clock.length; i++) {
//         if (start_clock[i].type == "button") {
//             start_clock[i].disabled = true;
//         }
//     }
// };