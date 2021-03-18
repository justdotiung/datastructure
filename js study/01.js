class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value, idx) {
    const node = new Node(value);
    if (idx && idx !== this.length && idx > -1) {
      let count = 0;
      let prevNode = this.head;
      if (idx === 0) {
        this.head = node;
        this.head.next = prevNode;
      } else {
        while (count <= idx - 2) {
          prevNode = prevNode.next;
          count++;
        }

        let currentNode = prevNode.next;
        prevNode.next = node;
        node.next = currentNode;
      }
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  insert() {}

  remove(idx) {
    if (idx >= this.length) throw new Error(`${idx} is size over`);
    if (!idx) throw new Error(`${idx} not props`);
    if (idx < 0) throw new Error(`${idx} is less then 0`);

    let count = 0;
    let prevNode = this.head;
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      while (count <= idx - 2) {
        prevNode = prevNode.next;
        count++;
      }
      let currentNode = prevNode.next;
      prevNode.next = currentNode.next;

      if (idx === this.length - 1) {
        this.tail = prevNode;
      }
    }

    this.length--;

    return this;
  }

  getSize() {
    return this.length;
  }

  printNode() {
    let currentNode = this.head;
    let string = "";
    let count = 0;
    while (count < this.length) {
      if (count === this.length - 1) string += `${currentNode.value}`;
      else string += `${currentNode.value},`;
      currentNode = currentNode.next;
      count++;
    }
    return string;
  }
}

const myList = new LinkedList(100);
myList.append(4).append(2, 1);
myList.append(8).remove(3);

console.log(myList);
console.log(myList.printNode());
console.log(myList.getSize());
