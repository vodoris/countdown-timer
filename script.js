const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const targetDate = "01/01/2023";

function countdown() {
  const now = new Date();
  const exactTargetDate = new Date(targetDate);

  const totalSeconds = (exactTargetDate - now) / 1000;
  const totalHours = totalSeconds / 3600;

  const days = Math.floor(totalHours / 24);
  const hours = Math.floor(totalHours) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);
