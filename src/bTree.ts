class TNode {
  public value: number;
  public left: TNode | undefined;
  public right: TNode | undefined;

  constructor(value: number) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

class BTree {
  private root: TNode | undefined;
  constructor() {
    this.root = undefined;
  }

  search(value: number) {
    let currNode = this.root;

    while (true) {
      if (!currNode) return undefined;
      if (currNode.value === value) return currNode;
      else if (currNode.value > value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
  }

  append(value: number): BTree {
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
      } else {
        if (!currNode.right) {
          currNode.right = myNode;
          return this;
        }
        currNode = currNode.right;
      }
    }
  }

  remove(value: number): void {
    if (!this.root) return;

    let parentNode: TNode = this.root;
    let currNode: undefined | TNode = this.root;

    while (currNode) {
      if (currNode.value > value) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (currNode.value < value) {
        parentNode = currNode;
        currNode = currNode.right;
      } else if (currNode.value === value) {
        //자식이 없는경우.
        if (!currNode.left && !currNode.right) {
          if (parentNode.left === currNode) parentNode.left = undefined;
          else parentNode.right = undefined;
        }
        //자식이 양쪽 다 존재하는 경우
        else if (currNode.left && currNode.right) {
          let left = currNode.left;
          let leftParent: undefined | TNode = undefined;
          while (left.right) {
            leftParent = left;
            left = left.right;
          }

          if (parentNode.left === currNode) {
            parentNode.left = left;
          } else parentNode.right = left;

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
          } else parentNode.right = currNode.left || currNode.right;
        }
        return;
      }
    }
  }

  print(): void {
    const currentNode = this.root;
    const arr = this.DFSTraverseInOrder(currentNode, []);
    const arr2 = this.BFSTraverse(currentNode, [], []);

    console.log(arr);
    console.log(arr2);
  }

  private DFSTraverseInOrder(node: TNode | undefined, arr: number[]): number[] {
    if (node) {
      this.DFSTraverseInOrder(node.left, arr);
      arr.push(node.value);
      this.DFSTraverseInOrder(node.right, arr);
    }
    return arr;
  }
  private DFSTraversePreOrder(node: TNode | undefined): void {
    if (node) {
      console.log(node.value);
      this.DFSTraversePreOrder(node.left);
      this.DFSTraversePreOrder(node.right);
    }
  }
  private DFSTraversePostOrder(node: TNode | undefined): void {
    if (node) {
      this.DFSTraversePostOrder(node.left);
      this.DFSTraversePostOrder(node.right);
      console.log(node.value);
    }
  }

  private BFSTraverse(node: TNode | undefined, queue: TNode[], arr: number[]): number[] {
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
