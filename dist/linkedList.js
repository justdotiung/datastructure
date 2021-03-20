import Stack from './stack.js';
class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.length = 0;
        this.head = new MyNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    get size() {
        return this.length;
    }
    append(value) {
        const NewNode = new MyNode(value);
        this.tail.next = NewNode;
        this.tail = NewNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        const NewNode = new MyNode(value);
        if (index === 0) {
            NewNode.next = this.head;
            this.head = NewNode;
        }
        else if (index >= this.length) {
            this.append(value);
            return;
        }
        else {
            const prevNode = this.getNodeByIdx(index - 1);
            const currentNode = prevNode?.next;
            prevNode.next = NewNode;
            NewNode.next = currentNode;
        }
        this.length++;
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            index = index >= this.length - 1 ? this.length - 1 : index;
            const prevNode = this.getNodeByIdx(index - 1);
            const currentNode = prevNode.next;
            prevNode.next = currentNode?.next;
            if (index >= this.length - 1) {
                this.tail = prevNode;
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
            currentNode = currentNode.next;
            count++;
        }
    }
    getNodeByIdx(index) {
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}
const myLinkedList = new LinkedList('s');
myLinkedList.append('r');
myLinkedList.append('i');
myLinkedList.append('n');
myLinkedList.append('n');
myLinkedList.insert(1, 't');
myLinkedList.insert(5, 'g');
console.log(myLinkedList.print());
myLinkedList.remove(6).remove(5).remove(0);
console.log(myLinkedList.print());
const myStack = new Stack(10);
console.log(myStack.empty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
console.log(myStack.top());
