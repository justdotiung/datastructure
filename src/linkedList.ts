import Stack from './stack.js';
import Queue from './queue.js';
import BTree from './bTree.js';
import Heap from './heapsort.js';
import MergeSort from './mergeSort.js';

class MyNode<T> {
  public next: null | undefined | MyNode<T>;
  public value: T;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: MyNode<T>;
  private tail: MyNode<T>;
  private length = 0;

  constructor(value: T) {
    this.head = new MyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  get size(): number {
    return this.length;
  }

  append(value: T) {
    const NewNode = new MyNode(value);
    this.tail.next = NewNode;
    this.tail = NewNode;
    this.length++;
    return this;
  }

  insert(index: number, value: T) {
    const NewNode = new MyNode(value);
    if (index === 0) {
      NewNode.next = this.head;
      this.head = NewNode;
    } else if (index >= this.length) {
      this.append(value);
      return;
    } else {
      const prevNode = this.getNodeByIdx(index - 1);
      const currentNode = prevNode?.next;
      prevNode.next = NewNode;
      NewNode.next = currentNode;
    }

    this.length++;
  }

  remove(index: number) {
    if (index === 0) {
      this.head = this.head.next as MyNode<T>;
    } else {
      index = index >= this.length - 1 ? this.length - 1 : index;
      const prevNode = this.getNodeByIdx(index - 1);
      const currentNode = prevNode.next;
      prevNode.next = currentNode?.next;

      if (index >= this.length - 1) {
        this.tail = prevNode as MyNode<T>;
      }
    }

    this.length--;
    return this;
  }

  print() {
    let count = 0;
    let currentNode = this.head;
    let str = '';
    while (count < this.size) {
      if (count === this.size - 1) {
        return (str += `${currentNode.value}`);
      }
      str += `${currentNode.value} -> `;
      currentNode = currentNode.next as MyNode<T>;
      count++;
    }
  }

  private getNodeByIdx(index: number): MyNode<T> {
    let currentNode: MyNode<T> = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode.next as MyNode<T>;
      count++;
    }

    return currentNode;
  }
}

// const myLinkedList = new LinkedList('s');
// myLinkedList.append('r');
// myLinkedList.append('i');
// myLinkedList.append('n');
// myLinkedList.append('n');
// myLinkedList.insert(1, 't');
// myLinkedList.insert(5, 'g');

// console.log(myLinkedList.print());

// myLinkedList.remove(6).remove(5).remove(0);
// console.log(myLinkedList.print());

// const myStack = new Stack<number>(10);
// console.log(myStack.empty());
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// console.log(myStack);
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);
// console.log(myStack.top());

// const myQueue = new Queue(3);
// myQueue.enqueue(10);
// myQueue.enqueue(9);
// myQueue.enqueue(8);

// console.log(myQueue);

// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

// console.log(myQueue);

// myQueue.enqueue(8);
// console.log(myQueue.peek());
// console.clear();

// const myBTree = new BTree();

// // myBTree.append(21);
// myBTree.append(11);
// // myBTree.append(30);
// myBTree.append(6);
// myBTree.append(15);
// myBTree.append(7);
// myBTree.append(3);
// myBTree.append(1);
// myBTree.append(5);
// myBTree.append(4);
// myBTree.append(2);
// // myBTree.append(16);
// // myBTree.append(13);
// myBTree.print();
// console.log(myBTree);
// // myBTree.remove(15);
// myBTree.remove(6);
// console.log(myBTree);
// myBTree.print();
const heap = [4, 3, 2, 1, 9, 0];
// Heap.sort(heap);
// Heap.heapSort(heap, heap.length);
// Heap.sort2(heap);

MergeSort.mergeSort(heap, 0, heap.length - 1);
console.log(heap);
