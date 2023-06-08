// Task
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} headA
// @param {ListNode} headB
// @return {ListNode}

// Approach 1: Hash Table

// Intuition:
// The problem is to find the intersection node of two linked lists.
// A brute-force approach would be to traverse both the linked lists and compare each node of the first linked list
// with every node of the second linked list. But this approach would take O(n^2) time complexity.
// A better approach would be to use a hash table (unordered_set) to store the nodes of the first linked list,
// and then traverse the second linked list, checking if any of its nodes are already present in the hash table.
// If yes, then it is the intersection node.

// Complexity Analysis

// Time complexity : O(N+M).
// Firstly, we need to build up the hash table.
// It costs O(1) to insert an item into a hash table, and we need to do this for each of the M nodes in list B.
// This gives a cost of O(M) for building the hash table.
// Secondly, we need to traverse list A, and for each node, we need to check whether or not it is in the hash table.
// In the worst case, there will not be a match, requiring us to check all N nodes in list A.
// As it is also O(1) to check whether or not an item is in a hash table, this checking has a total cost of O(N).
// Finally, combining the two parts, we get O(M)+O(N)=O(M+N).

// Space complexity : O(M).
// As we are storing each of the nodes from list B into a hash table, the hash table will require O(M) space.
// Note that we could have instead stored the nodes of list A into the hash table,
// this would have been a space complexity of O(N). Unless we know which list is longer though,
// it doesn't make any real difference.

const getIntersectionNodeWithHashTable = function(headA, headB) {
  let set = new Set()
  while(headA) {
    set.add(headA)
    headA = headA.next
  }
  while(headB){
    if(set.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
};

// Approach 2: Two pointers

// Complexity Analysis

// Time complexity : O(N+M).
// In the worst case, each list is traversed twice giving 2⋅M+2⋅N, which is equivalent to O(N+M).
// This is because the pointers firstly go down each list so that they can be "lined up" and then
// in the second iteration, the intersection node is searched for.
// An interesting observation you might have made is that when the lists are of the same length,
// this algorithm only traverses each list once.
// This is because the pointers are already "lined up" from the start, so the additional pass is unnecessary.
//
// Space complexity : O(1).
// We aren't allocating any additional data structures,
// so the amount of extra space used does not grow with the size of the input.

const getIntersectionNode = function(headA, headB) {
  let pointerA = headA
  let pointerB = headB
  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB
    pointerB = pointerB ? pointerB.next : headA
  }
  return pointerA
  // In the case lists do not intersect, the pointers for A and B
  // will still line up in the 2nd iteration, just that here won't be
  // a common node down the list and both will reach their respective ends
  // at the same time. So pA will be NULL in that case.
};
