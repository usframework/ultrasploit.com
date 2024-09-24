var countDownDate = new Date("December 21, 2024 12:00:00").getTime();

const countdown = document.querySelector('.countdown');
const c_days = document.querySelector('.days p.t');
const c_hours = document.querySelector('.hours p.t');
const c_minutes = document.querySelector('.minutes p.t');
const c_seconds = document.querySelector('.seconds p.t');



var CountDown = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ( days.toString().length == 1 ) {
        days = '0' + days.toString();

    }   if ( hours.toString().length == 1 ) {
        hours = '0' + hours.toString();

    }   if ( minutes.toString().length == 1 ) {
        minutes = '0' + minutes.toString();

    }   if ( seconds.toString().length == 1 ) {
        seconds = '0' + seconds.toString();

    }

    c_days.innerHTML = days;
    c_hours.innerHTML = hours;
    c_minutes.innerHTML = minutes;
    c_seconds.innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(CountDown);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

    if ( !countdown.classList.contains('start') ) {
        countdown.classList.add('start');
    }
}, 1000);