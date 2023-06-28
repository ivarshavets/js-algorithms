// Problem
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// s and t consist of lowercase English letters.

// Approach: Frequency Counter using Map
const isAnagram_withMap = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const countsTable = {}
  for (let letter of s) {
    countsTable[letter] = (countsTable[letter] || 0) + 1
  }

  for (let letter of t) {
    if (!countsTable[letter]) {
      return false
    }
    countsTable[letter]--
  }

  return true
};

// Approach: Frequency Counter using Array
// Time complexity: O(n).
// Accessing the counter table is a constant time operation.
// Space complexity: O(1).
// Although we do use extra space, the space complexity is O(1)
// because the table's size stays constant no matter how large n is.

const isAnagram_withArray1 = function(s, t) {
  if (t.length !== s.length) return false;

  const counter = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // subtract 'a' charCode number (which is equivalent to 97) in order to start counter from 0
    let sIdx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    let tIdx = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
    counter[sIdx] = (counter[sIdx] || 0) + 1;
    counter[tIdx] = (counter[tIdx] || 0) - 1;
  }
  // If every element of counter is 0, we found anagram.
  // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
  // And if it less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
  for (let count of counter) {
    if (count != 0) {
      return false;
    }
  }
  return true;
};

const isAnagram_withArray2 = function(s, t) {
  if (t.length !== s.length) return false;

  const counter = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    counter[idx]++
  }

  for (let i = 0; i < t.length; i++) {
    let idx = t[i].charCodeAt(0) - 'a'.charCodeAt(0)
    counter[idx]--
    // If the counter drops below zero, we know that t string contains an extra letter not in s and we can return false.
    if (counter[idx] < 0) {
      return false
    }
  }
  return true;
};


// Input:
const s = "anagram"
const t = "nagaram"
// Output: true

// Input:
// const s = "rat"
// const t = "car"
// Output: false

console.log(isAnagram_withArray2(s,t))
