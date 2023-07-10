class Stack {
  constructor(){
    this.stack = []
  }

  push(el) {
    this.stack.push(el)
  }

  // return top most element in the stack and removes it from the stack
  pop() {
    return this.stack.pop()
  }

  // return the top most element from the stack but doesn't delete it.
  peek() {
    return this.stack[this.stack.length - 1]
  }

  toString() {
    let str = ''
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i]
    }
    return str
  }
}
