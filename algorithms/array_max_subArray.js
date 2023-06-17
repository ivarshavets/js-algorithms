// Approach: Dynamic Programming, Kadane's Algorithm
// Time complexity: O(N), where N is the length of nums. We iterate through every element of nums exactly once.
// Space complexity: O(1). No matter how long the input is, we are only ever using 2 variables: currSum and maxSum.
// Algorithm:
// 1. Every idx could be the final idx
// 2. max subarr at a given index can be found like
// dp[i] = max(dp[i-1]+nums[i], nums[i]) - a max of max subarr of the prev idx + the value of the curr idx or only the value of the curr idx.
// dp[i] = max(dp[i-1], 0) + nums[i]
// If the max possible subarr ending at a prev idx is negative, we can discard it.

const maxSubArray = function(nums) {
  let currSum = nums[0]
  let maxSum = nums[0]
  for(let i = 1; i <= nums.length - 1; i++) {
    currSum = Math.max(nums[i], currSum + nums[i])
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
};
