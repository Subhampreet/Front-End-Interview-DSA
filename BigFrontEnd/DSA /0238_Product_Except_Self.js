// Solution 1: Product of all element, divide by i element;
// Soltuion 2: Product of Left and Right elements : 


// class Solution {
//     public int[] productExceptSelf(int[] nums) {
//         int[] left = new int[nums.length];

//         int[] right = new int[nums.length];

//         left[0] = 1;
//         for(int i = 1; i < nums.length; i++){
//             left[i] = left[i-1] * nums[i-1];
//         }

//         right[nums.length - 1] = 1;
//         for(int i = nums.length - 2; i > -1; i--){
//             right[i] = right[i+1] * nums[i+1];
//         }

//         int[] ans = new int[nums.length];
//         for(int i = 0; i < nums.length; i++){
//             ans[i] = left[i] * right[i];
//         }

//         return ans;
//     }
// }

// JavaScript Solution - 
var productExceptSelf = function(nums) {
    const n = nums.length;
    const left = Array(n).fill(0)
    const right = Array(n).fill(0)
    const output = Array(n).fill(0)

    left[0] = 1;
    for(let i = 1; i < n; i++){
        left[i] = left[i-1] * nums[i-1]
    }

    right[n-1] = 1;
    for(let i = n-2; i > -1; i--){
        right[i] = right[i+1] * nums[i+1]
    }

    for(let i = 0; i < n; i++){
        output[i] = left[i] * right[i]
    }

    return output
};
