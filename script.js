function watch_start() {

    // Get current time
    var start = new Date();

    // Make a unix timestamp from the current time
    var start_time = start.getTime();

    // Add it as an parameter to the page
    location.href = location.href.replace(/\?start=[0-9]+/g, "") + "?start=" + start_time;
}

function watch_reset() {

    // Remove everything after the ?start= and the ?start=
    location.href = location.href.replace(/\?start=[0-9]+/g, "");
}

// Get start time from the url
var start_time = parseInt(location.href.match(/\?start=([0-9]+)/)[1]);

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

        // Add leading zeros 
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        hours = (hours < 10) ? "0" + hours : hours;

        // Create a string with the time
        var time = hours + ":" + minutes + ":" + seconds;

        // Set the time
        document.getElementById("stopwatch_time").innerText = time;
    }, 10);
}