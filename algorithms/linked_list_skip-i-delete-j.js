// Task
// You are given the head of a linked list and two integers, i and j.
// You have to retain the first i nodes and then delete the next j nodes.
// Continue doing so until the end of the linked list.

const skipI_DeleteJ = function (head, i, j) {
  if (!head || i < 0 || j < 0) {
    return head
  }

  let node = head
  // Dangling node appears when the connection between the last to-be-deleted node and the new start node is not removed.
  // prevNode keeps track of the previous node to be able to delete the dangling node.
  let prevNode = null
  let iEnd = null
  let jStart = null

  // Edge case - Skip 0 nodes (all nodes need to be deleted)
  if (i === 0) {
    return null
  }
  // Edge case - Delete 0 nodes (list remains the same)
  if (j === 0) {
    return head
  }

  while (node) {
    let count = 1
    while (node && count <= i + j) {
      if (count === i) {
        iEnd = node
      }
      prevNode = node
      node = node.next
      count += 1
    }

    jStart = node

    iEnd.next = jStart
    prevNode.next = null //delete connection between last to-be-deleted node and start_j node
    // Start the cycle again
    jStart = node
  }

  return head
}


import {LinkedList} from "../data_structures/LinkedList.js";
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const i = 2
const j = 3
// Output = [1, 2, 6, 7, 11, 12]

const arr2 = [1, 2, 3, 4, 5]
// const i = 2
// const j = 4
// Output = [1, 2]

const arr3 = [1, 2, 3, 4, 5]
// const i = 2
// const j = 0
// Output = [1, 2, 3, 4, 5]

const ll = new LinkedList().fromArray(arr3)
const result = skipI_DeleteJ(ll.head, i, j)

let node = result
while(node) {
  console.log(node.value)
  node = node.next
}
