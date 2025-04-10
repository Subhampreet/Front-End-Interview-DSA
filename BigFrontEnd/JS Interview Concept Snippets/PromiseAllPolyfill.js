function promiseAll(promiseTask) {
  let res = new Array(promiseTask.length);
  let completed = 0;

  return new Promise((resolve, rejects) => {
    for (let i = 0; i < promiseTask.length; i++) {
      Promise.resolve(promiseTask[i])
        .then((data) => {
          res[i] = data;
          completed++;

          if (completed === promiseTask.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(30);
  }, 1000);
});

promiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log("One of the promise failed", error));
