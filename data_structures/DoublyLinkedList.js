class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  toString() {
    return `${this.value}`;
  }
}

class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    // sentinel nodes as pseudo-head and pseudo-tail
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head
    this.size = 0
  }

  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    // if index is invalid
    if (index < 0 || index >= this.size) {
      return -1
    }

    // Compare index and size - index to define the fastest way: starting from the head, or starting from the tail.
    let curr;
    //index <= if this.size - index)
    //index < Math.floor(this.size/2) {
    if (index + 1 < this.size - index) {
      curr = this.head
      for (let i = 0; i < index + 1; i++) {
        curr = curr.next
      }
    } else {
      curr = this.tail
      for (let i = 0; i < this.size - index; i++) {
        curr = curr.prev
      }
    }
    return curr.val
  };

  /**
  * Add a node of value val before the first element of the linked list.
  * After the insertion, the new node will be the first node of the linked list.
  * @param {number} val
  * @return {void}
  */
  addAtHead(val) {
    const nodeToAdd = new ListNode(val)
    let pred = this.head
    let succ = this.head.next

    nodeToAdd.next = succ
    nodeToAdd.prev = pred

    pred.next = nodeToAdd
    succ.prev = nodeToAdd
    this.size += 1

    // this.addAtIndex(0, val)
  };

  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const nodeToAdd = new ListNode(val)
    let pred = this.tail.prev
    let succ = this.tail

    nodeToAdd.next = succ
    nodeToAdd.prev = pred

    pred.next = nodeToAdd
    succ.prev = nodeToAdd

    this.size += 1

    // this.addAtIndex(this.size, val)
  };

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list, the node will be appended to the end of linked list.
   * If index is greater than the length, the node will not be inserted.
   * Use bidirectional search to perform faster.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */

  addAtIndex(indexRaw, val) {
    const nodeToAdd = new ListNode(val)

    if (indexRaw > this.size) {
      return
    }

    let index = indexRaw < 0 ? 0 : indexRaw

    // find predecessor and successor of the node to be added
    let pred = this.head
    let succ = this.tail

    if (index < this.size - index) {
      for (let i = 0; i < index; i++) {
        pred = pred.next
      }
      succ = pred.next
    } else {
      for (let i = 0; i < (this.size - index); i++) {
        succ = succ.prev
      }
      pred = succ.prev
    }

    // insertion itself
    this.size += 1
    nodeToAdd.prev = pred
    nodeToAdd.next = succ
    pred.next = nodeToAdd
    succ.prev = nodeToAdd
  };

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    // if the index is invalid, do nothing
    if (index < 0 || index >= this.size) {
      return
    }

    // find predecessor and successor of the node to be added
    let pred = this.head
    let succ = this.tail
    if (index < this.size - index) {
      for (let i = 0; i < index; i++) {
        pred = pred.next
      }
      succ = pred.next.next
    } else {
      for (let i = 0; i < (this.size - index - 1); i++) {
        succ = succ.prev
      }
      pred = succ.prev.prev
    }

    // delete pred.next
    this.size -= 1
    pred.next = succ
    succ.prev = pred
  };
};

const list = new MyLinkedList()
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1,2) // linked list becomes 1->2->3
console.log(list.get(1)); // return 2
list.deleteAtIndex(1) // now the linked list is 1->3
console.log(list.get(1)); // return 3
