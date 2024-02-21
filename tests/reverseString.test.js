import { reverseString } from "../index.js";

test("Reverses string", () => {
  expect(reverseString("Joever")).toBe("reveoJ");
});

test("Correctly handles empty strings", () => {
  expect(reverseString("")).toBe("");
});