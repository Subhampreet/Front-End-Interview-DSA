function promiseAllSettled(promiseTask) {
  let res = new Array(promiseTask.length);
  let completed = 0;

  return new Promise((resolve) => {
    for (let i = 0; i < promiseTask.length; i++) {
      Promise.resolve(promiseTask[i])
        .then((data) => {
          res[i] = { status: "fulfilled", data };
        })
        .catch((error) => {
          res[i] = { status: "rejected", error };
        })
        .finally(() => {
          completed++;

          if (completed === promiseTask.length) {
            resolve(res);
          }
        });
    }
  });
}

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(30);
  }, 1000);
});

promiseAllSettled([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log("One of the promise failed", error));
