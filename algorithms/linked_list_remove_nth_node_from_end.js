import {LinkedList, LinkedListNode} from "../data_structures/LinkedList.js";
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Approach with one iteration
// Complexity Analysis
// Time complexity : O(L).
// The algorithm makes one traversal of the list of L nodes.
// Space complexity : O(1).We only used constant extra space.

const removeNthFromEnd = function(head, n) {
  let current = head
  let nodeBeforeRemoved = null
  let count = 1

  while (current && count <= n) {
    current = current.next
    count += 1
  }
  if (current === null) {
    return head.next
  }

  nodeBeforeRemoved = head
  while (current.next) {
    nodeBeforeRemoved = nodeBeforeRemoved.next
    current = current.next
  }

  nodeBeforeRemoved.next = nodeBeforeRemoved.next.next
  return head

};

// Approach with one iteration and sentinel/dummy node
// Dummy node is used to simplify some corner cases such as a list with only one node, or removing the head of the list.
// Use two pointers: The first pointer advances the list by n+1 steps from the beginning,
// while the second pointer starts from the beginning of the list.
// Now, both pointers are exactly separated by n nodes apart.
// We maintain this constant gap by advancing both pointers together until the first pointer arrives past the last node.
// The second pointer will be pointing at the nth node counting from the last.
// We relink the next pointer of the node referenced by the second pointer to point to the node's next next node.

// Time complexity : O(L).
// Space complexity : O(1).

const removeNthFromEndWithDummyNode = function(head, n) {
    const dummy = new LinkedListNode();
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
      first = first.next;
    }

    // Move first to the end, maintaining the gap
    while (first !== null) {
      first = first.next;
      second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;
}

// Approach with two iteration:  Remove the L - n + 1 th element from a list.
// The problem could be simply reduced to another one : Remove the (L−n+1)th node from the beginning in the list,
// where L is the list length.

// Complexity Analysis
// Time complexity : O(L).
// The algorithm makes two traversal of the list, first to calculate list length L and second to find the (L−n)th node.
// There are 2L−n operations and time complexity is O(L).
// Space complexity : O(1).

const removeNthFromEndTwoIterations = function(head, n) {
  let length = 0
  let current = head

  // finding list length
  while (current) {
    current = current.next
    length += 1
  }

  // edge case of removing the head
  if (length === n) {
    return head.next
  }

  // finding node before one to be removed: Node index = length - n - 1
  let nodeBeforeRemovedIndex = length - n - 1
  current = head
  for (let i = 0; i < nodeBeforeRemovedIndex; i++ ) {
    current = current.next
  }

  // removing
  current.next = current.next.next
  return head
}

const arr1 = [1,2,3,4,5]
const n = 2
// Output = [1,2,3,5]

const ll = new LinkedList().fromArray(arr1)
const result = removeNthFromEnd(ll.head, n)

let node = result
while(node) {
  console.log(node.value)
  node = node.next
}
