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
    // index steps needed to move from sentinel node to wanted index
    for (let i = 0; i < index + 1; i++) {
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
  addAtIndex(indexRaw, val) {
    const nodeToAdd = new ListNode(val)

    if (indexRaw > this.size) {
      return false
    }

    let index = indexRaw < 0 ? 0 : indexRaw

    this.size += 1
    let prev = this.head
    for (let i = 0; i < index; i++) {
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
    for (let i = 0; i < index; i++) {
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
