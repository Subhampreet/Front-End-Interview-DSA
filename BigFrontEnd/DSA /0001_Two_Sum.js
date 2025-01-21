// Brute Force Approach - nested for loop, looping through each item. Time Complexity - O(n^2)
// Optimized Approach - Using HashMap
// Solution Reference - https://www.youtube.com/watch?v=Yyyi12oaK94


// JavaScript Solution in as follows: 
// JS Solution - https://www.youtube.com/@js_cafe

var twoSum = function(nums, target) {
    const map = new Map();

    for(const index in nums){
        const complement = map.get(nums[index])
        if(complement != null){
            return [parseInt(index), parseInt(complement)];
        } 
        map.set(target - nums[index], index);
    }
};


// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         Map<Integer, Integer> complement = new HashMap<>();

//         for(int i = 0; i < nums.length; i++){
//             Integer complementIndex = complement.get(nums[i]);

//             if(complementIndex != null){
//                 return new int[]{complementIndex, i};
//             }
//             complement.put(target - nums[i], i);
//         }

//         return new int[]{};
//     }
// }
