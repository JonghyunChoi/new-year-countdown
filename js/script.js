// getEl
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const currentYear = new Date().getFullYear(); // 2021
const newYearTime = new Date(`${currentYear + 1}-01-01 00:00:00`); // 2022-01-01 00:00:00

function updateCountdown() {
    const currentTime = new Date(); // 2021-09-08 20:22
    const diffTime = newYearTime - currentTime; // 2022 - (2021-09-08 20:22)

    const days = Math.floor(diffTime / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diffTime / 1000 / 60 / 60) % 24;
    const min = Math.floor(diffTime / 1000 / 60) % 60;
    const seconds = Math.floor(diffTime / 1000) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeNotationConversion(hours);
    minsEl.innerHTML = timeNotationConversion(min);
    secondsEl.innerHTML = timeNotationConversion(seconds);
}

function timeNotationConversion(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateCountdown, 1000);