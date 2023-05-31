// Sentinel nodes are widely used in trees and linked lists
// as pseudo-heads, pseudo-tails, markers of level end, etc.
// They are purely functional and serve as the guardians, and usually does not hold any data.
// Their main purpose is to standardize the situation, for example,
// make linked list to be never empty and never headless and hence
// simplify insert and delete.
// Sentinels nodes will be used here to simplify insert and delete.

// Complexity Analysis
// Time complexity: O(1) for addAtHead.
// O(k) for get, addAtIndex, and deleteAtIndex, where k is an index of the element to get, add or delete.
// O(N) for addAtTail.
// Space complexity: O(1) for all operations.

class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = new ListNode(); // sentinel node as pseudo-head
    this.size = 0
  }


  // Get the value of the index-th node in the linked list.
  // If the index is invalid, return -1.
  get(index) {
    if (index < 0 || index >= this.size) {
      return -1
    }

    let curr = this.head
    while (curr.next && index < this.size) {
      curr = curr.next
    }
    return curr.val
  };

  // Add a node of value val before the first element of the linked list.
  // After the insertion, the new node will be the first node of the linked list.
  addAtHead(val) {
    this.addAtIndex(0, val)

    // const nodeToAdd = new ListNode(val)
    // nodeToAdd.next = this.head.next
    // this.head.next = nodeToAdd
    // this.size += 1
  };

  // Append a node of value val to the last element of the linked list.
  addAtTail(val) {
    this.addAtIndex(this.size, val)

    // const nodeToAdd = new ListNode(val)
    // let curr = this.head
    // while (curr.next) {
    //     curr = curr.next
    // }
    // curr.next = nodeToAdd
    // this.size += 1
  };

  // Add a node of value val before the index-th node in the linked list.
  // If index equals to the length of linked list, the node will be appended to the end of linked list.
  // If index is greater than the length, the node will not be inserted.
  addAtIndex(index, val) {
    const nodeToAdd = new ListNode(val)

    if (index > this.size) {
      return false
    }

    index = index < 0 ? 0 : index

    this.size += 1
    let prev = this.head
    while (prev.next && index < this.size) {
      prev = prev.next
    }
    nodeToAdd.next = prev.next
    prev.next = nodeToAdd
  };

  // Delete the index-th node in the linked list, if the index is valid.
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return
    }

    this.size -= 1
    let prev = this.head
    while (prev.next.next && index < this.size) {
      prev = prev.next
    }

    prev.next = prev.next.next
  };
};



const list = new MyLinkedList()
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1,2) // linked list becomes 1->2->3
console.log(list.get(1)); // return 2
list.deleteAtIndex(1) // now the linked list is 1->3
console.log(list.get(1)); // return 3
