// Solution 1 : Using HashSet in Java
// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         HashSet<Integer> numbers = new HashSet<>();

//         for(int i = 0;i < nums.length; i++ ){
//             if(numbers.contains(nums[i])) return true;
//             numbers.add(nums[i]);
//         }
//         return false;
//     }
// }

// Solution 2: Sort Array using Arrays.Sort in Java
// Compare element in 1 & i+1

// class Solution {
//     public boolean containsDuplicate(int[] nums) {
//         Arrays.sort(nums);

//         for(int i = 0; i < nums.length - 1; i++){
//             if(nums[i] == nums[i+1]) return true;
//         }
//         return false;
//     }
// }

// JavaScript Solution : https://www.youtube.com/watch?v=hRt9qadriyQ

var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return set.size !== nums.length
};
