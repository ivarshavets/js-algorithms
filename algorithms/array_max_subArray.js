// Problem
// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// A subarray is a contiguous non-empty sequence of elements within an array.

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

// Approach: Divide and Conquer
// This approach is slower than the Kadane's Algorithm and uses more space.
// Time complexity: O(N⋅logN), where N is the length of nums.
// On our first call to findBestSubarray, we use for loops to visit every element of nums.
// Then, we split the array in half and call findBestSubarray with each half.
// Both those calls will then iterate through every element in that half, which combined is every element of nums again.
// Then, both those halves will be split in half, and 4 more calls to findBestSubarray will happen,each with a quarter
// of nums. Every time the array is split, we still need to handle every element of the original input nums.
// We have to do this logN times since that's how many times an array can be split in half.

// Space complexity: O(logN), where N is the length of nums.
// The extra space we use relative to input size is solely occupied by the recursion stack.
// Each time the array gets split in half, another call of findBestSubarray will be added to the recursion stack,
// until calls start to get resolved by the base case - remember, the base case happens at an empty array,
// which occurs after logN calls.

const maxSubArrayDivideConquer = function(nums) {
  const findBestSubArray = function(nums, left, right) {
    // In case of empty array return negative infinity
    if (left > right) {
      return -Infinity
    }

    let midpoint = Math.floor((left + right) / 2)
    let currSum = 0
    let bestLeftSum = 0
    let bestRightSum = 0

    // Iterate from the middle to the beginning
    for (let i = midpoint - 1; i >= left; i--) {
      currSum += nums[i]
      bestLeftSum = Math.max(bestLeftSum, currSum)
    }

    // Reset currSum and iterate from the middle to the end.
    currSum = 0;
    for (let i = midpoint + 1; i <= right; i++) {
      currSum += nums[i]
      bestRightSum = Math.max(bestRightSum, currSum)
    }
    // The bestCombinedSum uses the middle element and the best possible sum from each half.
    let bestCombinedSum = nums[midpoint] + bestLeftSum + bestRightSum

    // Find the best subarray possible from both halves.
    let leftHalf = findBestSubArray(nums, left, midpoint - 1)
    let rightHalf = findBestSubArray(nums, midpoint + 1, right)

    // The largest of the 3 is the answer for any given input array.
    return Math.max(bestCombinedSum, leftHalf, rightHalf)
  }

  return findBestSubArray(nums, 0, nums.length - 1)
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
const arr1 = [-2,1,-3,4,-1,2,1,-5,4] // Expected 6: the subarray [4,-1,2,1] has the largest sum 6.
const arr2 = [1] // Expected 1
const arr3 = [5,4,-1,7,8] // Expected 23, which is the sum of all elements of the array.
console.log(maxSubArrayBruteForce(arr1))
