class Stack<T> {
  private stack: Array<T> = [];
  private max = 0;
  private len = 0;
  constructor(max: number) {
    this.max = max;
  }

  top(): T {
    return this.stack[this.len - 1];
  }

  pop(): Stack<T> {
    if (this.len === 0) throw new Error('stack is empty');
    this.stack.splice(this.len - 1, 1);
    this.len--;
    return this;
  }

  push(value: T): Stack<T> {
    if (this.len === this.max) throw new Error('stack is full');
    this.stack[this.len] = value;
    this.len++;
    return this;
  }

  empty(): boolean {
    return this.stack.length === 0 ? true : false;
  }

  get size(): number {
    return this.max;
  }
}

export default Stack;
