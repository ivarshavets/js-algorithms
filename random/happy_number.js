// Problem: Happy humber

// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
// Example:
// 7 is happy humber: 7->49->97->130->10->1
// 116 is NOT happy: 116->38->73->58->89->145->42->20->4->16->37->58->...cycle->58

// Approach: Detect Cycles with a HashSet
// Time complexity: O(log n)
// Space complexity: O(log n)
const isNumberHappyWithSet = function(n) {
  const getNextNumber = function(n) {
    let totalSum = 0
    while (n > 0) {
      let digit = n % 10
      totalSum += digit ** 2
      n = Math.floor(n/10)
    }
    return totalSum
  }

  const visited = new Set()
  while (n !== 1 && !visited.has(n)) {
    visited.add(n)
    n = getNextNumber(n)
  }
  return n === 1
};

//Approach: Floyd's Cycle-Finding Algorithm
//The chain we get by repeatedly calling getNextNumber(n) is an implicit LinkedList. So we can solve the problem it by
// detecting if a linked list has a cycle using two pointers: slow and fast runners.
// If n is a happy number, i.e. there is no cycle, then the fast runner will eventually get to 1 before the slow runner.
// If n is not a happy number, then eventually the fast runner and the slow runner will be on the same number.

// Time complexity: O(log n)
// Space complexity: O(1)
const isNumberHappy = function(n) {
  const getNextNumber = function(n) {
    let totalSum = 0
    while (n > 0) {
      let digit = n % 10
      totalSum += digit ** 2
      n = Math.floor(n/10)
    }
    return totalSum
  }

  let slowRunner = n
  let fastRunner = getNextNumber(n)
  while (fastRunner != 1 && slowRunner != fastRunner) {
    slowRunner = getNextNumber(slowRunner)
    fastRunner = getNextNumber(getNextNumber(fastRunner))
  }
  return fastRunner === 1
};

// Input: n=19, n=7 -> Output: true
// Input: n=2, n=116 -> Output: false
console.log(isNumberHappy(116))
