class Stack {
  #items = [];
  #count = 0;

  push(item) {
    this.#items[this.#count] = item;
    this.#count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this.#items[this.#count - 1];
    this.#count--;

    for (let i = this.#count; i < this.#items.length; i++) {
      this.#items[i] = this.#items[i + 1];
    }

    this.#items.length = this.#count;

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this.#items[this.#count - 1];
  }

  length() {
    return this.#count;
  }

  clear() {
    this.#count = 0;
    this.#items = [];
  }

  isEmpty() {
    return this.#count === 0;
  }
}

const stack = new Stack();

console.log(stack);

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.pop();
console.log(stack);

console.log(stack.peek());
console.log(stack.length());
