class Queue<T> {
  private size = 0;
  private currSize = 0;
  private queue: Array<T> = [];
  private first = 0;
  private rear = 0;
  constructor(size: number) {
    this.size = size;
  }

  enqueue(value: T): Queue<T> {
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

  dequeue(): T {
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

  peek(): T {
    if (this.currSize <= 0) {
      throw new Error('queue is empty');
    }
    return this.queue[this.first];
  }
}

export default Queue;
