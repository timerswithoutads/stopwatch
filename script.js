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