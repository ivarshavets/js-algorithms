/**
 Approach 1: Recursion

 Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 @param {ListNode} list1
 @param {ListNode} list2
 @return {ListNode}
 */

const mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }

  else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};
/**
Intuition

We can recursively define the result of a merge operation on two lists as
the following (avoiding the corner case logic surrounding empty lists):

list1[0] + merge(list1[1:], list2) if list1[0] < list2[0]
list2[0] + merge(list1, list2[1:]) otherwise

Namely, the smaller of the two lists' heads plus the result of a merge on
the rest of the elements.

Algorithm

We model the above recurrence directly, first accounting for edge cases.
  Specifically, if either of l1 or l2 is initially null, there is no
merge to perform, so we simply return the non-null list. Otherwise, we
determine which of l1 and l2 has a smaller head, and recursively set the
next value for that head to the next merge result. Given that both lists
are null-terminated, the recursion will eventually terminate.

Complexity Analysis
Time complexity : O(n+m)
Because each recursive call increments the pointer to l1 or l2 by one
(approaching the dangling null at the end of each list),
there will be exactly one call to mergeTwoLists per element in each list.
Therefore, the time complexity is linear in the combined size of the lists.

Space complexity : O(n+m)
The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached,
so n+m stack frames consume O(n+m) space.
 */
