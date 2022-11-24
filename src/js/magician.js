import MathChar from './math.js';

export default class Magician extends MathChar {
  constructor(name, attack, distance, type = 'Magician') {
    super(name, type, attack, distance);
  }
}
