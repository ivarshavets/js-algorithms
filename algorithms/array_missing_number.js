// Problem
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// Approach: HashSet
// Time complexity : O(n)
// Because the set allows for O(1) containment queries, the main loop runs in O(n) time.
// Creating numSet costs O(n) time, as each set insertion runs in amortized O(1) time,
// so the overall runtime is O(n+n)=O(n).
// Space complexity : O(n)
// nums contains n−1 distinct elements, so it costs O(n) space to store a set containing all of them.
const missingNumberWithSet = function(nums) {
  const numsSet = new Set(nums)
  for (let num = 0; num <= nums.length; num++) {
    if (!numsSet.has(num)) {
      return num
    }
  }
};

// Approach: Bit Manipulation
// Intuition
// We can harness the fact that XOR is its own inverse to find the missing
// element in linear time.

// Algorithm
// Because we know that nums contains n numbers and that it is missing exactly one number on the range [0..n−1],
// we know that n definitely replaces the missing number in nums.
// Therefore, if we initialize an integer to n and XOR it with every index and value,
// we will be left with the missing number.
// Consider the following example (the values have been sorted for intuitive convenience, but need not be):
// Index	0	1	2	3
// Value	0	1	3	4
// missing = 4∧(0∧0)∧(1∧1)∧(2∧3)∧(3∧4)
//         = (4∧4)∧(0∧0)∧(1∧1)∧(3∧3)∧2
//         = 0∧0∧0∧0∧2
//         = 2

// Complexity Analysis
// Time complexity : O(n)
// Assuming that XOR is a constant-time operation, this algorithm does
// constant work on nnn iterations, so the runtime is overall linear.
// Space complexity : O(1)
// This algorithm allocates only constant additional space.
const missingNumberWithXOR = function(nums) {
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i]
  }
  return missing
}

// Approach: Finding Sum
// Time complexity : O(n)
// Space complexity : O(1)

const missingNumberWithSum = function(nums) {
  let actualSum = 0
  let expectedSum = 0
  for (let i = 1; i <= nums.length; i++) {
    actualSum += nums[i-1]
    expectedSum += i

  }
  return expectedSum - actualSum

  // for (let i = 0; i < nums.length; i++) {
  //     actualSum += nums[i]
  // }
  // for (let i = 1; i <= nums.length; i++) {
  //     expectedSum += i
  //     console.log(i, expectedSum)
  // }
}

// Approach: Finding Sum with Gauss' formula
// Algorithm
// We can leverage the Gauss' formula for computing the actual sum:
// We can compute the sum of nums in linear time, and by Gauss' formula, we
// can compute the sum of the first n natural numbers in constant time. Therefore,
// the number that is missing is simply the result of Gauss' formula minus the sum of nums,
// as nums consists of the first n natural numbers minus some number.

// Time complexity : O(n)
// Although Gauss' formula can be computed in O(1) time, summing nums
// costs us O(n) time, so the algorithm is overall linear. Because we have
// no information about which number is missing, an adversary could always
// design an input for which any algorithm that examines fewer than n
// numbers fails. Therefore, this solution is asymptotically optimal.
//
// Space complexity : O(1)
// This approach only pushes a few integers around, so it has constant memory usage.

const missingNumberWithGauss = function(nums) {
  let n = nums.length
  const expectedSum = Math.floor(n*(n+1)/2)
  let actualSum = 0
  while(n--) {
    actualSum += nums[n]
  }
  return expectedSum - actualSum
}

// Approach: Brute Force with Sorting - not optimal
// Algorithm
// First, we sort nums. Then, we check the two special cases that can be
// handled in constant time - ensuring that 0 is at the beginning and that nnn
// is at the end. Given that those assumptions hold, the missing number must
// somewhere between (but not including) 0 and nnn. To find it, we ensure that
// the number we expect to be at each index is indeed there. Because we handled
// the edge cases, this is simply the previous number plus 1. Thus, as soon as
// we find an unexpected number, we can simply return the expected number.

// Time complexity : O(nlgn)
// The only elements of the algorithm that have asymptotically nonconstant
// time complexity are the main for loop (which runs in O(n) time), and
// the sort invocation (which runs in O(nlogn) time for JS).
// Therefore, the runtime is dominated by sort, and the entire runtime is
// O(nlogn).
//
// Space complexity : O(1) (or O(n))
// In the sample code, we sorted nums in place, allowing us to avoid
// allocating additional space. If modifying nums is forbidden, we can
// allocate an O(n) size copy and sort that instead.
const missingNumberWithSorting = function(nums) {
  let sortedNums = nums.sort((a,b) => a-b)
  const length = sortedNums.length
  // Ensure that n is at the last index
  if (sortedNums[length - 1] !== length) {
    return length
  }
  //Ensure that 0 is at the first index
  if (sortedNums[0] !== 0) {
    return 0
  }

  for (let i = 1; i < length; i++) {
    let expectedNum = sortedNums[i-1] + 1
    if (expectedNum !== sortedNums[i]) {
      return expectedNum
    }
  }
}

// Input
const nums = [3,0,1]
// Output: 2
// Since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Input:
// const nums = [0,1]
// Output: 2

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
console.log(missingNumberWithSum(nums))
