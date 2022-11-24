import Magician from '../magician.js';

test('test magician with stoned', () => {
  const magician1 = new Magician('Magician1');
  magician1.stoned = true;
  magician1.distance = 3;
  const result = magician1.attack;
  expect(result).toBe(72);
});

test('test magician without stoned', () => {
  const magician1 = new Magician('Magician1');
  magician1.stoned = false;
  magician1.distance = 3;
  const result = magician1.attack;
  expect(result).toBe(80);
});
