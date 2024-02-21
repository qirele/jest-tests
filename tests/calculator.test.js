import { calculator } from '../index.js'

test("calculator exists", () => {
  expect(calculator).toEqual({});
});

test("calculator adds two values", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test("calculator subtracts two values", () => {
  expect(calculator.add(2, 2)).toEqual(0);
});

test("calculator multiplies two values", () => {
  expect(calculator.add(3, 3)).toEqual(9);
});

test("calculator divides two values", () => {
  expect(calculator.add(5, 2)).toBeCloseTo(2.5);
});
