Array.prototype.myFlat = function () {
  const flattened = [];

  function flatten(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattened.push(item);
      }
    }
  }

  flatten(this);
  return flattened;
};

const nestedArray = [1, 23, 4, 56, [1, 2, 3], [14, 24]];
console.log(nestedArray.myFlat());
