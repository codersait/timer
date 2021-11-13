export function start(clock) {
  const secondsContainer = document.getElementById('seconds');
  const minutesContainer = document.getElementById('minutes');
  const hoursContainer = document.getElementById('hours');
  setInterval(() => {
    secondsContainer.innerText = clock.seconds;
    minutesContainer.innerText = `${clock.minutes}:`;
    hoursContainer.innerText = `${clock.hours}:`;
    clock.advance();
  }, 1000);
}
