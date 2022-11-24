import Daemon from '../daemon.js';

test('test daemon with stoned', () => {
  const daemon1 = new Daemon('Daemon1');
  daemon1.stoned = true;
  daemon1.distance = 2;
  const result = daemon1.attack;
  expect(result).toBe(85);
});

test('test daemon without stoned', () => {
  const daemon1 = new Daemon('Daemon1');
  daemon1.stoned = false;
  daemon1.distance = 2;
  const result = daemon1.attack;
  expect(result).toBe(90);
});

test('test get stoned', () => {
  const daemon1 = new Daemon('Daemon1');
  daemon1.stoned = true;
  const result = daemon1.stoned;
  expect(result).toBeTruthy();
});
