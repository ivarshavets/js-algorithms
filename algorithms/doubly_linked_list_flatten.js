// Problem:
// Given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and a child pointer.
// This child pointer may or may not point to a separate doubly linked list, producing a multilevel data structure.
// Such data structure could be a simplified version of git branching.
// Given the head of the first level of the list, flatten the list so that
// all the nodes appear in a single-level, doubly linked list.
// Let curr be a node with a child list.
// The nodes in the child list should appear after curr and before curr.next in the flattened list.

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

// Approach 1: DFS by Recursion
// Algorithm
// The problem is basically asking us to do a preorder DFS (Depth-First Search) traversal over a disguised binary tree.
// We could consider the child pointer as the left pointer in binary tree which points to the left sub-tree (sublist).
// The next pointer can be considered as the right pointer in binary tree.
  // If we traverse the tree in preorder DFS, it'll generate the same visiting sequence as the flatten operation.

// Time Complexity: O(N) where N is the number of nodes in the list.
// The DFS algorithm traverses each node once and only once.
// Space Complexity: O(N). In the worst case, the binary tree might have nodes chained with each other only with
// the child pointers. In this case, the recursive calls would pile up, and take N space in the function call stack.

const flattenRecurr = function(head) {
    if (!head) {
      return null
    }
    // pseudo head to ensure the `prev` pointer is never none and to reduce the null pointer checks (if prev == null)
    let pseudoHead = new Node(null, null, head, null) // val, prev, next, child
    flattenDFS(pseudoHead, head)
    // detach the pseudo head from the real head
    pseudoHead.next = null
    head.prev = null
    return head
    // pseudoHead.next.prev = null
    // return pseudoHead.next
  };

const flattenDFS = function(prev, curr) {
  // return the tail of the flatten list
  if (!curr) {
    return prev
  }
  // establish the double links between the prev and curr nodes (when curr node points to sublist)
  curr.prev = prev
  prev.next = curr
  // the curr.next will be altered within the recursive function.
  let tempNext = curr.next
  let tail = flattenDFS(curr, curr.child)
  // remove the child pointer since it is no longer needed in the final result
  curr.child = null
  return flattenDFS(tail, tempNext)
}

// Approach: DFS by Iteration
// The stack data structure helps us to construct the iteration sequence as the one created by recursion.
// The stack here mimics the behavior of the function call stack,
// so that we could obtain the same result without resorting to recursion.

// Time Complexity: O(N)
// Space Complexity: O(N)

var flattenByIteration = function(head) {
  if (!head) {
    return null
  }

  let pseudoHead = new Node(0, null, head, null) // val, prev, next, child
  let prev = pseudoHead // for tracking prev node
  let curr = pseudoHead

  let stack = []
  stack.push(head)

  // enter a loop to iterate the stack until the stack becomes empty.
  while (stack.length !== 0) {
    curr = stack.pop(); // removes the last el and returns it
    // establish the links between prev and curr
    prev.next = curr;
    curr.prev = prev;

    // take care of the nodes pointed by the curr.next and curr.child pointers respectively
    // strictly in this order
    if (curr.next) {
      stack.push(curr.next)
    }

    if (curr.child) {
      stack.push(curr.child)
      curr.child = null
    }
    prev = curr
  }
  // detach the pseudo head node from the result.
  pseudoHead.next.prev = null
  return pseudoHead.next
}
