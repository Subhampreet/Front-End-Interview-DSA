function compressedString(str) {
  if (!str) {
    return "";
  }

  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const nextChar = str[i + 1];

    if (currentChar === nextChar) {
      count += 1;
    } else {
      compressed += currentChar + count;
      count = 1;
    }
  }

  return compressed;
}

console.log(compressedString("aaabbccc")); // Output: "a3b2c3"
