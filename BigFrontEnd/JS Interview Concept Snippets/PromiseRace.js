function promiseRace(promiseTask) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseTask.length; i++) {
      Promise.resolve(promiseTask[i]).then(resolve).catch(reject);
    }
  });
}

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Quick"), 300)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Slow"), 1000)
);

promiseRace([promise1, promise2]).then(console.log);
