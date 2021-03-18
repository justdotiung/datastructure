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

const MyLinkedList = new LinkedList('s');
MyLinkedList.append('r');
MyLinkedList.append('i');
MyLinkedList.append('n');
MyLinkedList.insert(1, 't');
MyLinkedList.insert(5, 'g');

console.log(MyLinkedList.print());

MyLinkedList.remove(6).remove(5).remove(0);
console.log(MyLinkedList.print());
