// Problem: Reverse a string
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Approach: Two Pointers, Iteration
// Time complexity : O(N) to swap N/2 element.
// Space complexity : O(1).
const reverseString = function(s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let tmp = s[left]
    s[left++] = s[right]
    s[right--] = tmp
  }
  return s
}

// Approach: Recursion, In-Place solution but O(N) Space
// Time complexity : O(N) time to perform N/2 swaps.
// Space complexity : O(N) to keep the recursion stack.
const reverseStringWithRecursion = function(s) {
  const reverse = function(s, left, right) {
    if (left >= right) {
      return
    }
    let tmp = s[left]
    s[left++] = s[right] // two steps in one: s[left] = s[right] and left++
    s[right--] = tmp
    reverse(s, left, right)
  }

  reverse(s, 0, s.length -1)
  return s
};


const s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

const s2 = ["H","a","n","n","a","h"]
//Output: ["h","a","n","n","a","H"]

console.log(reverseString(s))
