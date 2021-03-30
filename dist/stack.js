class Stack {
    constructor(max) {
        this.stack = [];
        this.max = 0;
        this.len = 0;
        this.max = max;
    }
    top() {
        return this.stack[this.len - 1];
    }
    pop() {
        if (this.len === 0)
            throw new Error('stack is empty');
        this.stack.splice(this.len - 1, 1);
        this.len--;
        return this;
    }
    push(value) {
        if (this.len === this.max)
            throw new Error('stack is full');
        this.stack[this.len] = value;
        this.len++;
        return this;
    }
    empty() {
        return this.stack.length === 0 ? true : false;
    }
    get size() {
        return this.max;
    }
}
export default Stack;
