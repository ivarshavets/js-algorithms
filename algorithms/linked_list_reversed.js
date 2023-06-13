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

// Approach2: Iteratively adding to a new list
// Time complexity : O(n)
// Space complexity : O(n). The extra space for a new list
const reverseListIterative2 = function(head) {
  let currentNode = head;
  const reversedList = new LinkedList();
  let previous = null

  while (currentNode) {
    const node = new LinkedListNode(currentNode.value)
    node.next = previous
    previous = node

    currentNode = currentNode.next;
  }
  reversedList.head = previous
  return previous;
}

// Approach 3: Recursive
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
