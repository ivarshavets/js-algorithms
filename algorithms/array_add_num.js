// Problem
// You are given a non-negative number in the form of list elements.
// For example, the number 123 would be provided as arr = [1, 2, 3].
// Add one to the number and return the output in the form of a new list.

// Challenge: One way to solve this problem is to convert the input array into a number and then add one to it.
// For example, if we have input = [1, 2, 3], you could solve this problem by creating the number 123 and
// then separating the digits of the output number 124.

// Approach
// Steps similar to mechanical addition process. Moving from the end --> add a given number / carrier.
// The sum from the last element and number gives us a carrier for the next addition (1st digit in the sum)
// and a new value to update the array element (2d digit in the sum).
// Example: 87 + 5:
//  1) 7 + 5 = 12. 2 - updated value in array. 1 - carrier for the next addition.
//  2) 8 + 1 = 9. 9 - updated value in the array. 0 - carrier.
// Resulted array = [9, 2]

// Carrier (a number we carry to the next addition) is calculated using floor division (biggest integer).
// Example: Math.floor(8 / 10) = 0, Math.floor(13 / 10) = 1.
// New value for the array element is calculated using Remainder, arr[i] % 10. Example: 8 % 10 = 8, 13 % 10 = 3.
// Special case - 99 + 1. Last carrier is 1, needs to be prepended to the resulted array.

// Complexity Analysis
// Let N be the number of elements in the input list.
// Time complexity: O(N) since it's not more than one pass along the input list.
// Space complexity: O(N)

var addOne = function(arr, num) {
  let newValue = null
  let carrier = num
  for (let i = arr.length - 1; i >= 0 ; i--) {
    newValue = (arr[i] + carrier) % 10
    carrier = Math.floor((arr[i] + num) / 10)
    arr[i] = newValue
  }
  return carrier == 0 ? arr : [carrier].concat(arr)
};

// const arr = [1,2,3]
// const arr = [4,3,2,1]
// const arr = [9,9,9]
const arr = [9]
const num = 2
console.log(addOne(arr, num))
