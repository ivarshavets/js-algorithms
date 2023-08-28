// Problem
// Given a string s, find the first non-repeating character in it and return its index.
// If it does not exist, return -1.

// Approach: Linear time solution
// Complexity Analysis
// Time complexity : O(N) since we go through the string of length N two times.
// Space complexity : O(1) because English alphabet contains 26 letters.


const firstUniqChar = function(s) {
  // build hash map : character and how often it appears
  let count = {}

  for (let char of s) {
    count[char] ? count[char]++ : count[char] = 1
  }

  // find the index
  for (let i=0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i
    }
  }
  return -1
};


// Approach with indexOf and lastIndexOf
// Time complexity: O(n^2)
// indexOf method has time complexity of O(n) and for loop has time complexity of O(n),
// so for every item in the array we are adding another iteration over the items, therefor - O(n^2).

const firstUniqChar2 = function(s) {
  for (let idx = 0; idx < s.length; idx++){
    if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
      return idx
    }
  }
  return -1
};
