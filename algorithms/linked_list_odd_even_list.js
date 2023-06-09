// Task
// Given the head of a singly linked list, group all the nodes with odd *indices* together
// followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// The relative order inside both the even and odd groups should remain as it was in the input.

// @param {ListNode} head
// @return {ListNode}

// Complexity Analysis
// Time complexity : O(n). There are total n nodes and we visit each node once.
// Space complexity : O(1). All we need is the four pointers.

const oddEvenIndicesList = function(head) {
  if (!head) return null

  let odd = head
  let even = head.next
  let evenHead = even // will be used to connect two lists
  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
};

// Task
// Given a linked list with integer data, arrange the elements in such a manner
// that all nodes with even numbers as *value* are placed after odd numbers.

// Definition for singly-linked list.
// function ListNode(val, next) {
//  this.val = (val===undefined ? 0 : val)
//  this.next = (next===undefined ? null : next)
// }

// Approach: 4 pointers
// We need to check each node value (odd or even).
// If node value is even - move to the tail and update the current tail.
// Stop the process when the original tail (end of the original llist) is reached
// and the original tail node is evaluated.
// Redefine previous and next connection of the relocated node!
// Include edge cases when the head is moved to the end and the new head is redefined.

import {LinkedListNode, LinkedList} from "../data_structures/LinkedList.js";
const oddEvenValuesList = function(head) {
  if (!head) return null

  let oddHead = null
  let evenHead = null
  let oddTail = null
  let evenTail = null

  let node = head
  while(node) {
    if (node.value % 2 === 0) {
      if (evenHead) {
        // Append the current odd node to the tail of odd sub-list
        evenTail.next = node
        evenTail = evenTail.next
      } else {
        // Make the current node is a starting node of odd sub-list
        evenHead = node
        evenTail = evenHead
      }
    } else {
      if (oddHead) {
        oddTail.next = node
        oddTail = oddTail.next
      } else {
        oddHead = node
        oddTail = oddHead
      }
    }

    node = node.next
  }

  // Special case, when there are no odd Nodes
  if (!oddHead) {
    return evenHead
  }
  // Append the even sub-list to the tail of odd sub-list
  oddTail.next = evenHead
  return oddHead
};

const ll = new LinkedList().fromArray([1,2,3,4,5,6])
const result = oddEvenValuesList(ll.head)
let node = result
while(node) {
  console.log(node.value)
  node = node.next
}
