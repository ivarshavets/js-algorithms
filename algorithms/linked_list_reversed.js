/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Approach 1: Iterative
// Time complexity : O(n), where n is the list's length.
// Space complexity : O(1).

const reverseList = function(head) {
    let current = head;
    let previous = null;

    while (current) {
        let nextTemp = current.next;
        current.next = previous;
        previous = current;

        current = nextTemp;
    }

    return previous
};

// Approach 2: Recursive
// Time complexity : O(n), where n is the list's length.
// Space complexity : O(n).
// The extra space comes from implicit stack space due to recursion.
// The recursion could go up to n levels deep.

const reverseListRecursive = function(head) {
  if (!head || !head.next) {
    return head
  }
  const previous = reverseList(head.next)
  head.next.next = head
  head.next = null

  return previous
};
