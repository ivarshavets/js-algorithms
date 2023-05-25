/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Approach 1: Copy into Array List and then Use Two Pointer Technique
// Time complexity : O(n), where n is the number of nodes in the Linked List.
// Space complexity : O(n). We are making an Array List and adding n values to it.

const isPalindrome = function(head) {
  const arr = [];

  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next;
  }

  // Use two-pointer technique to check for palindrome in array.
  let startPoint = 0;
  let endPoint = arr.length - 1;
  while (startPoint < endPoint) {
    if (arr[startPoint] !== arr[endPoint]) {
      return false;
    }
    startPoint += 1;
    endPoint -= 1;
  }

  return true;
};

var isPalindrome1 = function(head) {
  let arr=[];
  while (head){
    arr.push(head.val);
    head=head.next;
  }

  return arr.slice().reverse().join()==arr.join() ? true : false;
};

// Approach 2: Reverse Second Half In-place
// The strategy we can use is to reverse the second half of the Linked List in-place (modifying the Linked List structure),
// and then comparing it with the first half. Afterwards, we should re-reverse the second half and put the list back together.

// Algorithm
// Find the end of the first half.
// Reverse the second half.
// Determine whether or not there is a palindrome.
// Restore the list.
// Return the result.

// Time complexity : O(n)
// Finding the middle is O(n), reversing a list in place is O(n),
// and then comparing the 2 resulting Linked Lists is also O(n).
// Space complexity : O(1).

const isPalindrome2 = function(head) {
  // Find the end of first half.
  const getEndOfFirstHalf = (head) => {
    let fastRunner = head
    let slowRunner = head
    while (fastRunner.next && fastRunner.next.next) {
      fastRunner = fastRunner.next.next
      slowRunner = slowRunner.next
    }

    return slowRunner
  }

  // Reverse the second half
  const reverseList = (head) => {
    let current = head
    let previous = null

    while (current) {
      let nextTemp = current.next;
      current.next = previous;
      previous = current;
      current = nextTemp;
    }

    return previous; // head will be the last node which is previous
  }

  if (head === null) return true;

  let firstHalfEnd = getEndOfFirstHalf(head);
  let secondHalfReversedStart = reverseList(firstHalfEnd.next)

  let pointer1 = head
  let pointer2 = secondHalfReversedStart
  let result = true

  while (pointer2 && result) {
    if (pointer1.val !== pointer2.val) {
      result = false
    }
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }

  // Restore the list
  let secondHalfReversedToOriginal = reverseList(secondHalfReversedStart);
  firstHalfEnd.next = secondHalfReversedToOriginal;

  return result
};
