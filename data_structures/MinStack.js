// Problem:
// Design a stack (MinStack class) that supports push, pop, top, and retrieving the minimum element in constant time.

// Approach 1: Stack of Value/ Minimum Pairs
// Algorithm
// When a new number x, is placed on a Stack, the numbers below it will not change
// for as long as number x remains on the Stack.
// Whenever number x is the top of the Stack, the minimum will always be the same,
// as it's simply the minimum out of x and all the numbers below it.
// Therefore, in addition to putting a number on an underlying Stack inside our MinStack,
// we could also put its corresponding minimum value alongside it.
// Downside of the approach: storing the same minimum value multiple times.

// Complexity Analysis
// Let n be the total number of operations performed.
// Time Complexity : O(1) for all operations.
// getMin() - O(1) because we do not need to compare values to find it.
// If we had to search for it each time, the overall time complexity would have been O(n).

// Space Complexity : O(n).
// Worst case is that all the operations are push. In this case, there will be O(2⋅n)=O(n) space used.

class MinStackByValuesPairs {
  #stack = []

  #getLastEl() {
    return this.#stack[this.#stack.length -1]
  }

  // If the stack is empty, then the min value must just be the first value we add
  push(x) {
    if (this.#stack.length === 0) {
      this.#stack.push([x, x])
      return
    }

    // last x of the array has current min value
    let currMin = this.#getLastEl(this.#stack)[1]
    this.#stack.push([x, Math.min(x, currMin)])
  }

  pop() {
    this.#stack.pop()
  }

  top() {
    return this.#getLastEl(this.#stack)[0]
  }

  getMin() {
    return this.#getLastEl(this.#stack)[1]
  }
}

// Approach: Two stacks
// The main Stack should keep track of the order numbers arrived.
// The second Stack should keep track of the current minimum. Elements should only be pushed onto it
// if they are less than or equal to the current top of it. While this means that some duplicates are added, but
// we escape the bug with pop() (if the main stack has few values which equal to current min, and we pop the last of it,
// then we also pop/remove the min value from the min stack living the wrong min value).

// Complexity Analysis
// Time Complexity : O(1) for all operations.
// Space Complexity : O(n).

class MinStack {
  #stack = []
  #minStack = []
  #getLastEl(arr) {
    return arr[arr.length -1]
  }

  push(x){
    this.#stack.push(x)
    let curMin = this.#getLastEl(this.#minStack)
    if (this.#minStack.length === 0 || x <= curMin){
      this.#minStack.push(x)
    }
  }
  pop(){
    let lastMinEl = this.#getLastEl(this.#minStack)
    let lastStackEl = this.#getLastEl(this.#stack)
    if (lastMinEl === lastStackEl) {
      this.#minStack.pop()
    }
    this.#stack.pop()
  }
  top(){
    return this.#getLastEl(this.#stack)
  }
  getMin(){
    return this.#getLastEl(this.#minStack)
  }
}
// Test cases
// const stack = new MinStack()
// stack.push(val)
// stack.pop()
// const param_3 = stack.top()
// const param_4 = stack.getMin()
