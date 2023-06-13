// Problem
// You are given a non-negative number in the form of list elements.
// For example, the number 123 would be provided as arr = [1, 2, 3].
// Add one to the number and return the output in the form of a new list.

// Challenge: One way to solve this problem is to convert the input array into a number and then add one to it.
// For example, if we have input = [1, 2, 3], you could solve this problem by creating the number 123 and
// then separating the digits of the output number 124.

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

