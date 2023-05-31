class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkedListNode(value)
    node.next = this.head
    this.head = node

    return this
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  insert(value, position) {
    // Assume the first position is "0".
    // Inserting at position 3 means between
    // the 2nd and 3rd elements."""

    const index = position < 0 ? 0 : position;

    let count = 0;
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    if (index === 0) {
      // this.prepend(value);
      node.next = this.head;
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next && count < index - 1) {
      count += 1;
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  search(value) {
    let currentNode = this.head
    while (currentNode && currentNode?.value !== value) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  // Approach with sentinel node
  // Sentinel nodes are widely used in trees and linked lists
  // as pseudo-heads, pseudo-tails, markers of level end, etc.
  // They are purely functional, and usually does not hold any data.
  // Their main purpose is to standardize the situation, for example,
  // make linked list to be never empty and never headless and hence
  // simplify insert and delete.

  // Time complexity: O(N), it's one pass solution.

  // Space complexity: O(1), it's a constant space solution.

  delete(value) {
    let sentinelNode = new LinkedListNode()
    sentinelNode.next = this.head

    let prev = sentinelNode
    let curr = this.head
    while (curr) {
        if (curr.value === value) {
            prev.next = curr.next
        } else {
          prev = curr
        }

        curr = curr.next
    }

    return this
  }

  delete2(value) {
    // Delete first occurrence of value
    let currentNode = this.head
    let previousNode = null

    while (currentNode) {
      // if first element to be deleted
      if (currentNode.value === value && !previousNode) {
        this.head = this.head.next
      }

      if (currentNode.value === value && previousNode) {
        previousNode.next = currentNode.next
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return this
  }

  pop(value) {
    // Return the first node's value and remove it from the list
    if (!this.head) {
      return this
    }

    let node = this.head
    this.head = this.head.next
    return node.value
  }

  fromArray(arr) {
    arr.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    // let currentNode = this.head;
    // let result = '';
    // while (currentNode) {
    //   result = result.concat(' ', currentNode.value);
    //   currentNode = currentNode.next;
    // }
    // return result;

    // return this.toArray().map((node) => node.toString()).toString();
    return this.toArray().join();
  }

  // Space complexity : O(n)
  // The extra space for a new list
  reverse() {
    let currentNode = this.head;
    const reversedList = new LinkedList();

    while (currentNode) {
      reversedList.prepend(currentNode.value);
      currentNode = currentNode.next;
    }
    return reversedList.toString();
  }

  reverse2() {
    let currentNode = this.head;
    const reversedList = new LinkedList();
    let head = null

    while (currentNode) {
      const node = new LinkedListNode(currentNode.value)
      node.next = head
      head = node

      currentNode = currentNode.next;
    }
    reversedList.head = head
    return reversedList.toString();
  }

  // Time complexity : O(n).
  // Assume that n is the list's length, the time complexity is O(n).
  // Space complexity : O(1).
  reverse3() {
    let current = head;
    let previous = null;

    while (current) {
      let nextTemp = current.next;
      current.next = previous;
      previous = current;
      current = nextTemp;
    }

    return previous
  };
}


// Create a loop in a linked list
// where the last node points back to the second node in the list.
const list = new LinkedList().fromArray([2, -1, 3, 0, 5])
const createLoop = (list) => {
  const loopStart = list.head.next
  let current = list.head
  while (current.next) {
    current = current.next
  }
  current.next = loopStart
  return list
}
