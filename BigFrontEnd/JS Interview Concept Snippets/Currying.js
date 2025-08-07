function sum(...args) {
  let total = args.reduce((a, b) => a + b, 0);

  function innerSum(...nextArgs) {
    total += nextArgs.reduce((a, b) => a + b, 0);
    return innerSum;
  }

  innerSum.valueOf = function () {
    return total;
  };

  innerSum.toString = function () {
    return total;
  };

  return innerSum;
}

let s = sum(1)(2)(5)(8);
console.log(s.toString());
//console.log(s.toValue());