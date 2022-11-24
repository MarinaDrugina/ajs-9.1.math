import Character from './character.js';

export default class MathChar extends Character {
  constructor(name, type, attack, distance) {
    super(name, type, attack);
    this.distance = distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    if (this._stoned === true) {
      const result = 100 - (this.distance - 1) * 10 - Math.log2(this.distance) * 5;
      this.value = Math.round(result);
      return this.value;
    }
    this.value = 100 - (this.distance - 1) * 10;
    return this.value;
  }

  set attack(value) {
    this._attack = value;
  }
}
