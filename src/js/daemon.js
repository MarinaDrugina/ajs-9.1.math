import MathChar from './math.js';

export default class Daemon extends MathChar {
  constructor(name, attack, distance, type = 'Daemon') {
    super(name, type, attack, distance);
  }
}
