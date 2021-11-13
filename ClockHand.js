export class ClockHand {
  #limit;
  #value;

  constructor(limit) {
    this.#limit = limit;
    this.#value = 0;
  }

  advance() {
    this.#value++;
    if (this.#value >= this.#limit) {
      this.#value = 0;
    }
  }

  get value() {
    return this.#value;
  }

  toString() {
    if (this.#value < 10) {
      return `0${this.#value}`;
    }
    return this.#value;
  }
}

// const secondsContainer = document.getElementById('seconds');
// const minutesContainer = document.getElementById('minutes');
// const hoursContainer = document.getElementById('hours');
// const seconds = new ClockHand(60);
// const minutes = new ClockHand(60);
// const hours = new ClockHand(24);

// setInterval(() => {
//   secondsContainer.innerText = seconds;
//   minutesContainer.innerText = `${minutes} :`;
//   hoursContainer.innerText = `${hours} :`;
//   seconds.advance();
//   if (seconds.value === 0) {
//     minutes.advance();
//     if (minutes.value == 0) {
//       hours.advance();
//     }
//   }
// }, 1000);
