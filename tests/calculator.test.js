import { calculator } from '../index.js'

test("calculator adds two values", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test("calculator subtracts two values", () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
});

test("calculator multiplies two values", () => {
  expect(calculator.multiply(3, 3)).toEqual(9);
});

test("calculator divides two values", () => {
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
});

test("calculator handles divide by zero", () => {
  expect(() => calculator.divide(5, 0)).toThrow(/by zero/);
});
