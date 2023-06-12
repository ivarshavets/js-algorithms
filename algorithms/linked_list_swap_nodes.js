// Task
// Given a linked list, swap the two nodes present at position i and j, assuming 0 <= i <= j.
// The positions are based on 0-based indexing.

// @param {ListNode} head
// @param {positionOne} number
// @param {positionTwo} number
// @return {ListNode} head

import {LinkedList} from "../data_structures/LinkedList.js";

const swapNodes = function(head, positionOne, positionTwo) {
  // invalid inputs
  if (!head || positionOne < 0 || positionTwo < 0 || positionOne > positionTwo) {
    return null
  }

  // initialization
  let count = 0
  let current = head
  let preNode = null
  let nodeOne = null
  let prevNodeOne = null
  let nodeTwo = null
  let prevNodeTwo = null
  let temp = null // dangling node while swapping
  let newHead = null

  // Edge cases
  if (!current) {
    return head
  }
  if (positionOne === positionTwo) {
    return head
  }

  while (current && count <= positionTwo) {
    if (count === positionOne) {
      nodeOne = current
      prevNodeOne = preNode
    } else if (count === positionTwo) {
      nodeTwo = current
      prevNodeTwo = preNode
    }
    preNode = current
    current = current.next
    count += 1
  }

  // Swap logic
  // Edge case if list length is smaller than position One or Two and no nodeOne or nodeTwo is found
  if (!nodeOne || !nodeTwo) {
    return null
  }

  // 1, 2, 3, 4, 5, 6, 7
  prevNodeTwo.next = nodeOne
  temp = nodeOne.next // dangling node when nodeOne.next reference will be changed to nodeTwo.next
  nodeOne.next = nodeTwo.next
  nodeTwo.next = temp

  // nodeOne is head
  if (!prevNodeOne) {
    head = nodeTwo
  } else {
    prevNodeOne.next = nodeTwo
  }

  return head
}


const swapNodes2 = function(head, positionOne, positionTwo) {
  if (positionOne === positionTwo) {
    return head
  }

  let count = 0
  let current = head
  let nodeOne = null
  let prevOne = null
  let nodeTwo = null
  let prevTwo = null
  let nodeOneNext = null

  while(current && count <= positionTwo) {
    if (count === positionOne - 1) {
      prevOne = current
      nodeOne = current.next
      nodeOneNext = nodeOne.next
    } else if (count === positionTwo - 1) {
      prevTwo = current
      nodeTwo = current.next
      break
    }

    current = current.next
    count += 1
  }

  // Swap logic
  // Edge case if list length is smaller than positionOne or Two and no nodeOne or Two is found
  if (!nodeOne && positionOne !== 0 || !nodeTwo) {
    return null
  }

  // The case of updating the head
  if (positionOne === 0) {
    // Defining nodes that were not found in the previous loop
    nodeOne = head
    nodeOneNext = nodeOne.next
    // Logic
    nodeOne.next = nodeTwo.next
    prevTwo.next = nodeOne
    nodeTwo.next = nodeOneNext
    head = nodeTwo
  }
  // The case when positionOne and positionTwo are adjacent
  else if (positionTwo === positionOne + 1) {
    nodeOne.next = nodeTwo.next
    nodeTwo.next = nodeOne
    prevOne.next = nodeTwo
  } else {
    nodeOne.next = nodeTwo.next
    nodeTwo.next = nodeOneNext
    prevOne.next = nodeTwo
    prevTwo.next = nodeOne
  }

  return head
}

const arr1 = [3, 4, 5, 2, 6, 1, 9]
const leftIndex = 2
const rightIndex = 5
// Output = [3, 4, 1, 2, 6, 5, 9]

// const leftIndex = 0
// const rightIndex = 5
// Output = [1, 4, 5, 2, 6, 3, 9]

// const leftIndex = 4
// const rightIndex = 5
// Output = [3, 4, 5, 2, 1, 6, 9]
const ll = new LinkedList().fromArray(arr1)
const result = swapNodes(ll.head, leftIndex, rightIndex)

let node = result
while(node) {
  console.log(node.value)
  node = node.next
}
