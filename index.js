export function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}