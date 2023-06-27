// Problem
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const isAnagram = function(s, t) {
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

// Input:
const s = "anagram"
const t = "nagaram"
// Output: true

// Input:
// const s = "rat"
// const t = "car"
// Output: false

console.log(isAnagram(s,t))
