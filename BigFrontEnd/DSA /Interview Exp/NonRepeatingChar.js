function firstNonRepeatingChar(str) {
  const charCounts = new Map();

  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCounts.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"

