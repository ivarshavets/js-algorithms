// Problem
// You are given a large integer represented as an integer array digits,
// where each arr[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Approach: Schoolbook Addition with Carry
// Let us identify the rightmost digit which is not equal to nine and increase that digit by one.
// All the following consecutive digits of nine should be set to zero.
// If all digits are nines, we need to set all nines to zero and append 1 to the left side
// of the array.

// Complexity Analysis
// Let N be the number of elements in the input list.
// Time complexity: O(N) since it's not more than one pass along the input list.
// Space complexity: O(N)
// Although we perform the operation in-place (i.e. on the input list itself),
// in the worst scenario, we would need to allocate an intermediate space to hold the result,
// which contains the N+1 elements.
// Hence the overall space complexity of the algorithm is O(N).

var addOne = function(arr) {
  for (let i = arr.length - 1; i >= 0 ; i--) {
    // set all the nines at the end of array to zeros
    if (arr[i] === 9) {
      arr[i] = 0
    } else {
      // increase the rightmost not-nine by 1
      arr[i] += 1
      return arr
    }
  }
  // case when all the digits are nines
  return [1].concat(arr)
};

