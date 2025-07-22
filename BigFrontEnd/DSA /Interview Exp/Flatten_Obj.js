function flattenObject(obj) {
  let result = [];

  function recurse(current) {
    for (let key in current) {
      if (typeof current[key] === "object" && current[key] !== null) {
        recurse(current[key]);
      } else {
        result.push(current[key]);
      }
    }
  }

  recurse(obj);
  return result;
}

let obj1 = { a: 1, b: "string", c: { d: "x", e: 8 }, f: false };
let flattenedArray = flattenObject(obj1);
console.log(flattenedArray); // Output: [1, "string", { d: "x", e: 8 }, false]
