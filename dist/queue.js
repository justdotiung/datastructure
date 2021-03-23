class Queue {
    constructor(size) {
        this.size = 0;
        this.currSize = 0;
        this.queue = [];
        this.first = 0;
        this.rear = 0;
        this.size = size;
    }
    enqueue(value) {
        if (this.currSize >= this.size) {
            throw new Error('queue is overflow');
        }
        this.queue[this.rear] = value;
        this.rear++;
        this.currSize++;
        if (this.rear === this.size) {
            this.rear = 0;
        }
        return this;
    }
    dequeue() {
        if (this.currSize <= 0) {
            throw new Error('queue is empty');
        }
        const currValue = this.queue[this.first];
        this.first++;
        this.currSize--;
        if (this.first === this.size) {
            this.first = 0;
        }
        return currValue;
    }
    peek() {
        if (this.currSize <= 0) {
            throw new Error('queue is empty');
        }
        return this.queue[this.first];
    }
}
export default Queue;
