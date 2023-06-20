// Approach: Dynamic Programming, Kadane's Algorithm
// Time complexity: O(N), where N is the length of nums. We iterate through every element of nums exactly once.
// Space complexity: O(1). No matter how long the input is, we are only ever using 2 variables: currSum and maxSum.
// Algorithm:
// 1. Every idx could be the final idx
// 2. max subarr at a given index can be found like
// dp[i] = max(dp[i-1]+nums[i], nums[i]) - a max of max subarr of the prev idx + the value of the curr idx or only the value of the curr idx.
// dp[i] = max(dp[i-1], 0) + nums[i]
// If the max possible subarr ending at a prev idx is negative, we can discard it.

const maxSubArrayKadane = function(nums) {
  let currSum = nums[0]
  let maxSum = nums[0]
  for(let i = 1; i <= nums.length - 1; i++) {
    currSum = Math.max(nums[i], currSum + nums[i])
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
};

// Approach: Optimized Brute Force
// Calculate the sum of all subarrays, and keep track of the best one in maxSum variable.
// To actually generate all subarrays would take O(N3) time, but with a little optimization,
// we can achieve brute force in O(N2)) time.
// The trick is to recognize that all of the subarrays starting at a particular value will share a common prefix.

// Algorithm
// Initialize a variable maxSubarray = -infinity to keep track of the best subarray. We need to use negative infinity, not 0, because it is possible that there are only negative numbers in the array.
// Or it could be the first item of the array.
// Use a for loop that considers each index of the array as a starting point.
// For each starting point, create a variable currentSubarray = 0. Then, loop through the array from the starting index, adding each element to currentSubarray. Every time we add an element it represents a possible subarray - so continuously update maxSubarray to contain the maximum out of the currentSubarray and itself.
// Return maxSubarray.

// Complexity Analysis
// Time complexity: O(N2)
// We use 2 nested for loops, with each loop iterating through nums.
// Space complexity: O(1)
// No matter how big the input is, we are only ever using 2 variables: maxSubarray and currentSubarray.
var maxSubArrayBruteForce = function(nums) {
  const n = nums.length
  let maxSum = nums[0]
  for (let i = 0; i < n; i++) {
    let currSum = 0
    for (let j = i; j < n; j++) {
      currSum += nums[j]
      maxSum = Math.max(maxSum, currSum)
    }
  }
  return maxSum
};

// Test Cases
const arr1 = [-2,1,-3,4,-1,2,1,-5,4] // Expected 6
const arr2 = [1] // Expected 1
const arr3 = [5,4,-1,7,8] // Expected 23
console.log(maxSubArrayBruteForce(arr1))

