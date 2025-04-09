function debounce(func, wait) {
  // your code here
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.call(this, ...args), wait);
  }
}
