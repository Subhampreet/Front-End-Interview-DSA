let nums = [5, 7, 2, 3, 4, 20, 19, 11];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }

  return arr;
}

console.log(selectionSort(nums));
