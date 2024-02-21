import { capitalize } from "../index.js";

test("String with first letter capitalized", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("", () => {
  expect(capitalize("dog")).toBe("Dog");
});
