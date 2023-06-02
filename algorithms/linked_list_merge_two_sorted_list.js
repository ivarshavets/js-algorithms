/**
 Approach 1: Recursion
 Intuition

 We can recursively define the result of a merge operation on two lists as
 the following (avoiding the corner case logic surrounding empty lists):

 list1[0] + merge(list1[1:], list2) if list1[0] < list2[0]
 list2[0] + merge(list1, list2[1:]) otherwise

 Namely, the smaller of the two lists' heads plus the result of a merge on
 the rest of the elements.

 Algorithm

 We model the above recurrence directly, first accounting for edge cases.
 Specifically, if either of list1 or list2 is initially null, there is no
 merge to perform, so we simply return the non-null list. Otherwise, we
 determine which of list1 and list2 has a smaller head, and recursively set the
 next value for that head to the next merge result. Given that both lists
 are null-terminated, the recursion will eventually terminate.

 Complexity Analysis

 Time complexity : O(n+m)
 Because each recursive call increments the pointer to list1 or list2 by one
 (approaching the dangling null at the end of each list),
 there will be exactly one call to mergeTwoLists per element in each list.
 Therefore, the time complexity is linear in the combined size of the lists.

 Space complexity : O(n+m)
 The first call to mergeTwoLists does not return until the ends of both list1 and list2 have been reached,
 so n+m stack frames consume O(n+m) space.

 Input

 Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 @param {ListNode} list1
 @param {ListNode} list2
 @return {ListNode}
*/

const mergeTwoListsRecursion = function(list1, list2) {
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
 Approach 2: Iteration
 Intuition

 We can achieve the same idea via iteration by assuming that list1 is entirely
 less than list2 and processing the elements one-by-one, inserting elements of
 list2 in the necessary places in list1.

 Algorithm

 First, we set up a false "prehead" node that allows us to easily return the
 head of the merged list later. We also maintain a prev pointer, which
 points to the current node for which we are considering adjusting its next
 pointer. Then, we do the following until at least one of list1 and list2 points
 to null: if the value at list1 is less than or equal to the value at list2,
 then we connect list1 to the previous node and increment list1. Otherwise, we
 do the same, but for list2. Then, regardless of which list we connected, we
 increment prev to keep it one step behind one of our list heads.

 After the loop terminates, at most one of list1 and list2 is non-null.
 Therefore (because the input lists were in sorted order), if either list is
 non-null, it contains only elements greater than all of the
 previously-merged elements. This means that we can simply connect the
 non-null list to the merged list and return it.

 Complexity Analysis

 Time complexity : O(n+m)
 Because exactly one of list1 and list2 is incremented on each loop
 iteration, the while loop runs for a number of iterations equal to the
 sum of the lengths of the two lists. All other work is constant, so the
 overall complexity is linear.

 Space complexity : O(1)
 The iterative approach only allocates a few pointers, so it has a
 constant overall memory footprint.
*/

const mergeTwoLists = function(list1, list2) {
  // maintain an unchanging reference to node ahead of the return node.
  const prehead = new ListNode(-1)
  let prev = prehead

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  // At least one of list1 and list2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
  prev.next = list1 === null ? list2 : list1
  return prehead.next
};
