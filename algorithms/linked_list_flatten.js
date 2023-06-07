// Task
// Given a Linked List of size N, where every node represents a sorted sub-linked-list.
// Flatten the linked list in ascending sorted order.

// @param {LinkedList} list
// @return {LinkedList}

// Approach: Iterative
import {LinkedList} from "../data_structures/LinkedList.js";

const merge = function(list1, list2) {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  const mergedList = new LinkedList()
  let node1 = list1.head
  let node2 = list2.head

  while (node1 || node2) {
    if (!node1) {
      mergedList.append(node2)
      node2 = node2.next
    } else if (!node2) {
      mergedList.append(node1)
      node1 = node1.next
    } else if (node1.value <= node2.value) {
      mergedList.append(node1)
      node1 = node1.next
    } else {
      mergedList.append(node2)
      node2 = node2.next
    }
  }

  return mergedList
}

const flattenLoop = function(list) {
  let list1 = list.head
  let list2 = list.head.next
  let flattenedList = new LinkedList()

  if (!list1) {
    return null
  }

  if (!list2) {
    return list1
  }

  while (list2) {
    flattenedList = merge(list1.value, list2.value)
    list1 = flattenedList
    list2 = list2.next
  }

  return flattenedList
}

// Approach: Recursion

// Time Complexity: O(N * N * M)
// where N is the no of nodes in the main linked list and M is the no of nodes in a single sub-linked list

// Space Complexity: O(N*M)
// The recursive functions will use a recursive stack of a size equivalent to a total number of elements in the lists,
// which is N*M.
const flattenRecursion = function(list) {
  const recur = function(node){
    if (!node) {
      return null
    }
    if (!node.next) {
      return merge(node.value, null)
    }
    return merge(node.value, recur(node.next))
  }
  return recur(list.head)
}

// Test case
const mergeList1 = new LinkedList().fromArray([1,3,5])
const mergeList2 = new LinkedList().fromArray([2,4])
const mergeResult = merge(mergeList1, mergeList2)
console.log('Merge result', mergeResult.toString())


const l1 = new LinkedList().fromArray([1,3,5])
const l2 = new LinkedList().fromArray([2,4])
const nested = new LinkedList()
nested.append(l1)
nested.append(l2)

const result = flattenRecursion(nested)
console.log('Result', result.toString())
