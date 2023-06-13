/**
 * Task
 * You are given the head of a linked list, and an integer k.
 * Return the head of the linked list after swapping the values of the kth node from the beginning
 * and the kth node from the end (the list is 1-indexed).
 */
/**
 * Approach 3: Single Pass Approach
 * Intuition
 * The problem can be solved in two iteration through the list:
 * by iterating till the end of the list and finding listLength and finding kth Node on the way;
 * by iterating until listLength -k
 *
 * For solution with one iteration
 * The trick is:
 * If endNode is k positions behind a certain node currentNode,
 * when currentNode reaches the end of linked list i.e at n-th node,
 * the endNode would be at the n−kth node.
 *
 * A similar trick is used in a few other Linked List problems like Remove Nth Node From the End of List and
 * the Fast and Slow Pointer Approach in Find The Middle Of Linked List.
 */

/**
 * Complexity Analysis
 * Time Complexity : O(n), where n is the size of Linked List.
 * Space Complexity: O(1), as we are using constant extra space to maintain list node pointers.
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function(head, k) {
  let current = head
  let frontNode = null
  let endNode = null
  let listLength = 0

  while (current !== null) {
    listLength += 1

    if (endNode !== null) {
      endNode = endNode.next
    }
    if (listLength === k) {
      frontNode = current
      endNode = head
    }

    current = current.next
  }


  const temp = frontNode.val
  frontNode.val = endNode.val
  endNode.val = temp

  return head
};
