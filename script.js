// 
// Variables
// 

var show_millis = true;


// 
// Functions
// 


function watch_start() {

    // Get current time
    var start = new Date();

    // Make a unix timestamp from the current time
    var start_time = start.getTime();

    // Add it as an parameter to the page
    location.href = location.href.replace(/\?start=[0-9]+/g, "") + "?start=" + start_time;

    // Rename the button to "Restart"
    document.getElementById("watch_startbutton_button").innerHTML = "Restart";
}

function watch_reset() {

    // Remove everything after the ?start= and the ?start=
    location.href = location.href.replace(/\?start=[0-9]+/g, "");
}

// Add event listener for actions
document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        watch_start();
    } else if (e.keyCode == 82) {
        watch_reset();
    }
});

// if location contains ?start=
if (location.href.indexOf("?start=") > -1) {

    // Get start time from the url
    var start_time = parseInt(location.href.match(/\?start=([0-9]+)/)[1]);

    // Rename the button to "Restart"
    document.getElementById("watch_startbutton_button").innerHTML = "Restart";
}

// If there is a start time, add an interval to the page that updates the time
if (start_time) {

    // Add interval 
    setInterval(function() {

        // Get current time 
        var now = new Date();

        // Get time difference
        var diff = now.getTime() - start_time;

        // Get the full hours
        var hours = Math.floor(diff / (1000 * 60 * 60));

        // Get the full minutes
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        // Get the full seconds
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Get the full milliseconds
        var milliseconds = Math.floor((diff % (1000 * 60)) / 100);

        // Add leading zeros 
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

        // Create a string with the time
        var time = hours + ":" + minutes + ":" + seconds;
        if (show_millis) time = time + "." + milliseconds;

        // Set the time
        document.getElementById("stopwatch_time").innerText = time;
    }, 10);
}

// 
// Settings
// 

// if location contains ?settings=
if (location.href.indexOf("?settings=") > -1) {

    console.log("MÖÖÖH");

    // Get settings from the url
    var settings = location.href.match(/\?settings=([0-9]+)/)[1];

    console.log(settings);

    // Check if the settings are 4 numbers long
    if (settings.length != 4) {

        // If not, set the settings to 0000
        location.href = location.href.replace(/\?settings=[0-9]+/g, "?settings=1000");
    }
}

if (settings.substr(0, 1) == "1") {
    document.getElementById("settings_1").style.backgroundColor = "#880000";
    document.getElementById("main_container").style.gridTemplateRows = "0% 100% 0% 0%";
} else {
    document.getElementById("settings_1").style.backgroundColor = "#008800";
}

function switchSetting(setting) {
    switch (setting) {
        case 1:
            if (settings.substr(0, 1) == "1") {
                location.href = location.href.replace(/\?settings=[0-9]+/g, "?settings=0" + settings.substr(1, 3));
            } else {
                location.href = location.href.replace(/\?settings=[0-9]+/g, "?settings=1" + settings.substr(1, 3));
            }
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
    }
}

// 
// Action buttons
// 

// The full screen button

// Get the full screen button element
var fullScreenButton = document.getElementById("fullscreen");

// The function to enter full screen
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { // iOS Safari
        element.webkitRequestFullscreen();
    }
    fullScreenButton.classList = "fa-solid fa-compress"
}

// The function to exit full screen
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    fullScreenButton.classList = "fa-solid fa-expand"
}

// Add event listener click
fullScreenButton.addEventListener("click", function() {

    // Check if the browser is in full screen mode
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {

        // If not, enter full screen mode
        enterFullscreen(document.documentElement);

    } else {

        // If yes, exit full screen mode
        exitFullscreen();
    }
});