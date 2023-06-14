// Problem
// You have been given an array of length = n. The array contains integers from 0 to n - 2.
// Each number in the array is present exactly once except for one number which is present twice.
// Find and return this duplicate number present in the array
// Example:
// arr = [0, 2, 3, 1, 4, 5, 3]
// output = 3 (because 3 is present twice)
// The expected time complexity for this problem is O(n) and the expected space-complexity is O(1).

// Approach: Current Sum vs Expected
// Algorithm
// 1. All the elements of the array are always non-negative
// 2. If array length = n, then elements would start from 0 to (n-2), i.e. Natural numbers 0,1,2,3,4,5...(n-2)
// 3. There is only SINGLE element which is present twice.
// Therefore let's find the sum of all elements (currentSum) of the original array, and
// find the sum of first (n-2) Natural numbers (expectedSum).
//
// The second occurance of a particular number (say `x`) is actually occupying the space
// that would have been utilized by the number (n-1). This leads to:
// currentSum  = 0 + 1 + 2 + 3 + .... + (n-2) + x
// expectedSum = 0 + 1 + 2 + 3 + .... + (n-2)
// currentSum - expectedSum = x
// Example:
// len(arr) = 5
// x = {0, 3} range of possible values
// 0, 1, 2, 3, x --> len(n)
// 0, 1, 2, 3    --> len(n-1)
// Time Complexity: O(n),
// Space Complexity: O(1)
const duplicateNumWithSum = function(arr){
  let currentSum = 0
  let expectedSum = 0
  for (let i = 0; i <= arr.length; i++) {
    currentSum += arr[i]
    expectedSum += i

  }
}

// Approach: Set
// This approach does not! use constant space
// Time Complexity = O(N)
// HashSet insertions and lookups have amortized constant time complexities.
// Hence, this algorithm requires linear time, since it consists of a single for loop that iterates over each element,
// looking up the element and inserting it into the set at most once.
// Space Complexity = O(N)
// We use a set that may need to store at most n elements, leading to a linear space complexity of O(n).

const findDuplicateWithSet = function(arr){
  const set = new Set()
  for (const num of arr) {
    if(set.has(num)){
      return num
    }
    set.add(num)
  }
}

// Approach: Sort
// This approach modifies! individual elements and does not! use constant space
// The space complexity of the sorting algorithm depends on the implementation of each programming language
// Since V8 v7.0 and Chrome 70 Timsort algorithm is used.
// Which, for smaller arrays, has a time complexity of O(n) and space complexity of 0(1).
// And for larger arrays, it has a time complexity of O(nlog(n)) and space complexity of O(n).
const findDuplicateWithSort = function(nums) {
    nums.sort((a, b) => a - b)
    for(let i = 1; i <= nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return nums[i]
        }
    }
};

// Approach: Negative Marker.
// This approach temporarily modifies individual elements

// Mark the number of visited index as negative.
// If the number at index is negative, then we have already performed this operation for the same number,
// and hence current number is the duplicate number.
// Revert modification at the end.

// Time Complexity: O(n)
// Each element is visited at most twice (once in the first loop to find the duplicate and once in the second loop to restore the numbers).
// Space Complexity: O(1)
//All manipulation is done in place, so no additional storage (barring one variable) is needed
const findDuplicateWithNegativeMarker = function(nums) {
  let duplicate = null
  for (const num of nums) {
    let idx = Math.abs(num)
    if (nums[idx] < 0) {
      duplicate = idx
      break
    }
    nums[idx] = -nums[idx]
  }
  // Restore numbers
  for (let i = 0; i <= nums.length - 1; i++) {
    nums[i] = Math.abs(nums[i])
  }

  return duplicate
}

const arr = [0, 2, 3, 1, 4, 5, 3]
// const output = 3
console.log(findDuplicateWithNegativeMarker(arr))
