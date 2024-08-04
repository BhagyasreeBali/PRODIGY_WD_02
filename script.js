let hour, minute, seconds, interval;

let getSeconds = 0,
    getMinutes = 0,
    getHours = 0;

function stopwatch() {
    this.start = function () {
        hour = document.getElementById("hour");
        minute = document.getElementById("minute");
        seconds = document.getElementById("seconds");

        getSeconds++;
        if (getSeconds < 10) {
            seconds.innerHTML = "0" + getSeconds;
        } else if (getSeconds >= 60) {
            getSeconds = 0;
            getMinutes++;
            seconds.innerHTML = "00";
        } else {
            seconds.innerHTML = getSeconds;
        }

        if (getMinutes < 10) {
            minute.innerHTML = "0" + getMinutes + ":";
        } else if (getMinutes >= 60) {
            getMinutes = 0;
            getHours++;
            minute.innerHTML = "00:";
        } else {
            minute.innerHTML = getMinutes + ":";
        }

        if (getHours < 10) {
            hour.innerHTML = "0" + getHours + ":";
        } else {
            hour.innerHTML = getHours + ":";
        }

        interval = setTimeout(this.start.bind(this), 1000);
    };

    this.pause = function () {
        clearTimeout(interval);
    };

    this.reset = function () {
        this.pause(); // Ensure timer is stopped before resetting
        getSeconds = 0;
        getMinutes = 0;
        getHours = 0;

        seconds.innerHTML = "00";
        minute.innerHTML = "00:";
        hour.innerHTML = "00:";
    };
}

let object = new stopwatch();
