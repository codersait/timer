export class Clock {
  #seconds;
  #minutes;
  #hours;

  constructor(seconds, minutes, hours) {
    this.#seconds = seconds;
    this.#minutes = minutes;
    this.#hours = hours;
  }
  get seconds() {
    return this.#seconds;
  }
  get minutes() {
    return this.#minutes;
  }
  get hours() {
    return this.#hours;
  }

  advance() {
    this.#seconds.advance();
    if (this.#seconds.value === 0) {
      this.#minutes.advance();
      if (this.#minutes.value === 0) {
        this.#hours.advance();
      }
    }
  }
  toString() {}
}
