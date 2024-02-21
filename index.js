export function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero!");
    return a / b;
  },
}

export function caesarCypher(string, key) {
  return [...string].map(letter => nextLetter(letter, key)).join("");

}

export function nextLetter(letter, key) {
  // modify only letters
  // https://stackoverflow.com/a/62032796
  // RegExp(/^\p{L}/,'u').test(str)
  const isLetter = RegExp(/^\p{L}/, 'u').test(letter);
  if (letter.length === 1 && isLetter) {
    const letterCode = letter.charCodeAt(0);
    let nextLetterCode = letterCode + key;
    if (letter === letter.toLowerCase()) {
      if (nextLetterCode > 122) {
        nextLetterCode = 96 + (nextLetterCode - 122);
      }
    } else {
      if (nextLetterCode > 90) {
        nextLetterCode = 64 + (nextLetterCode - 90);
      }
    }

    return String.fromCharCode(nextLetterCode);
  }

  return letter;
}
