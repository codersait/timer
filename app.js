import { ClockHand } from './ClockHand.js';
import { Clock } from './Clock.js';
import { start } from './Start.js';

const seconds = new ClockHand(60);
const minutes = new ClockHand(60);
const hours = new ClockHand(24);

const clock = new Clock(seconds, minutes, hours);

start(clock);
