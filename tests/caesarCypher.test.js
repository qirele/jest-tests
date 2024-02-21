import { caesarCypher, nextLetter } from "../index.js";

test("Caesar cypher cyphers with a key of 1", () => {
  expect(caesarCypher("slideshow", 1)).toBe("tmjeftipx")
});

test("Caesar cypher handles a sentence", () => {
  expect(caesarCypher("Jurass Finish First", 1)).toBe("Kvsbtt Gjojti Gjstu")
});

test("Caesar cypher handles key of 16", () => {
  expect(caesarCypher("Jurass Finish First", 16)).toBe("Zkhqii Vydyix Vyhij")
});

test("Caesar cypher handles punctuation", () => {
  expect(caesarCypher("Dominated with a flavour, and it go ! like this", 2)).toBe("Fqokpcvgf ykvj c hncxqwt, cpf kv iq ! nkmg vjku")
});

test("nextLetter outputs next letter in alphabet using key", () => {
  expect(nextLetter("l", 2)).toBe("n");
});

test("nextLetter wraps from z to a", () => {
  expect(nextLetter("z", 1)).toBe("a");
});

test("nextLetter wraps from Z to A", () => {
  expect(nextLetter("Z", 1)).toBe("A");
});
