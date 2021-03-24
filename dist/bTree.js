class TNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}
class BTree {
    constructor() {
        this.root = undefined;
    }
    search(value) {
        let currNode = this.root;
        while (true) {
            if (!currNode)
                return undefined;
            if (currNode.value === value)
                return currNode;
            else if (currNode.value > value) {
                currNode = currNode.left;
            }
            else {
                currNode = currNode.right;
            }
        }
    }
    append(value) {
        const myNode = new TNode(value);
        if (!this.root) {
            this.root = myNode;
            return this;
        }
        if (typeof this.search(value) === 'number') {
            throw new Error('already exists');
        }
        let currNode = this.root;
        while (true) {
            if (currNode.value > value) {
                if (!currNode.left) {
                    currNode.left = myNode;
                    return this;
                }
                currNode = currNode.left;
            }
            else {
                if (!currNode.right) {
                    currNode.right = myNode;
                    return this;
                }
                currNode = currNode.right;
            }
        }
    }
    remove(value) {
        if (!this.root)
            return;
        let parentNode = this.root;
        let currNode = this.root;
        while (currNode) {
            if (currNode.value > value) {
                parentNode = currNode;
                currNode = currNode.left;
            }
            else if (currNode.value < value) {
                parentNode = currNode;
                currNode = currNode.right;
            }
            else if (currNode.value === value) {
                //자식이 없는경우.
                if (!currNode.left && !currNode.right) {
                    if (parentNode.left === currNode)
                        parentNode.left = undefined;
                    else
                        parentNode.right = undefined;
                }
                //자식이 양쪽 다 존재하는 경우
                else if (currNode.left && currNode.right) {
                    let left = currNode.left;
                    let leftParent = undefined;
                    while (left.right) {
                        leftParent = left;
                        left = left.right;
                    }
                    if (parentNode.left === currNode) {
                        parentNode.left = left;
                    }
                    else
                        parentNode.right = left;
                    if (leftParent) {
                        leftParent.right = left.left ? left.left : undefined;
                        left.left = currNode.left;
                        left.right = currNode.right;
                    }
                }
                //자식이 한쪽만 존재하는경우
                else {
                    if (parentNode.left === currNode) {
                        parentNode.left = currNode.left || currNode.right;
                    }
                    else
                        parentNode.right = currNode.left || currNode.right;
                }
                return;
            }
        }
    }
    print() {
        const currentNode = this.root;
        const arr = this.DFSTraverseInOrder(currentNode, []);
        const arr2 = this.BFSTraverse(currentNode, [], []);
        console.log(arr);
        console.log(arr2);
    }
    DFSTraverseInOrder(node, arr) {
        if (node) {
            this.DFSTraverseInOrder(node.left, arr);
            arr.push(node.value);
            this.DFSTraverseInOrder(node.right, arr);
        }
        return arr;
    }
    DFSTraversePreOrder(node) {
        if (node) {
            console.log(node.value);
            this.DFSTraversePreOrder(node.left);
            this.DFSTraversePreOrder(node.right);
        }
    }
    DFSTraversePostOrder(node) {
        if (node) {
            this.DFSTraversePostOrder(node.left);
            this.DFSTraversePostOrder(node.right);
            console.log(node.value);
        }
    }
    BFSTraverse(node, queue, arr) {
        if (node) {
            arr.push(node.value);
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
            this.BFSTraverse(queue.shift(), queue, arr);
        }
        return arr;
    }
}
export default BTree;
