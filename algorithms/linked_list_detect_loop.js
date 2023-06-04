/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Approach: Slow and fast runners (Floyd's Cycle Finding Algorithm)
const hasCycle = function(head) {
  if (!head) {
    return false;
  }
  let slowRunner = head;
  let fastRunner = head;

  while (fastRunner.next && fastRunner.next.next) {
    if (fastRunner.val === slowRunner.val) {
      return true
    }
    fastRunner = fastRunner.next.next
    slowRunner = slowRunner.next
  }

  return false
};

// Complexity analysis:
//
// Time complexity : O(n).
// Let us denote n as the total number of nodes in the linked list.
// To analyze its time complexity, we consider the following two cases separately.
//
// List has no cycle:
// The fast pointer reaches the end first and the run time depends on the list's length, which is O(n).
//
// List has a cycle:
// We break down the movement of the slow pointer into two steps, the non-cyclic part and the cyclic part:
// 1. The slow pointer takes "non-cyclic length" steps to enter the cycle. At this point,
//   the fast pointer has already reached the cycle.
//   Number of iterations = non-cyclic length = N
//
// 2. Both pointers are now in the cycle.
//   Consider two runners running in a cycle - the fast runner moves 2 steps while the slow runner moves 1 steps at a time.
//   Since the speed difference is 1,
//   it takes distance between the 2 runners / difference of speed loops for the fast runner to catch up with the slow runner.
//   As the distance is at most "cyclic length K" and the speed difference is 1, we conclude that
//   Number of iterations = almost "cyclic length K".
//
// Therefore, the worst case time complexity is O(N+K), which is O(n).
//
// Space complexity : O(1).
// We only use two nodes (slow and fast) so the space complexity is O(1)).

