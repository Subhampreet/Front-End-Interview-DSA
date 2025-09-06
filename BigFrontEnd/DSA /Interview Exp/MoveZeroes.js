function moveZeroes(nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos += 1;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos += 1;
  }

  return nums;
}

let nums = [0, 1, 2, 3, 0, 1, 2, 3, 5];
console.log(moveZeroes(nums));