export default class Heap {
  static swap(arr: Array<number>, idx1: number, idx2: number): void {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  static downHeap(arr: Array<number>, i: number, right: number): void {
    const rootValue = arr[i];
    let root = i;
    let bc = 0;
    while (root < Math.floor(right / 2)) {
      const cl = root * 2 + 1;
      const cr = cl + 1;

      bc = arr[cl] < arr[cr] && cr < right ? cr : cl;
      if (rootValue > arr[bc]) break;
      this.swap(arr, root, bc);

      root = bc;
    }
    arr[root] = rootValue;
  }

  static sort(arr: Array<number>) {
    const mid = Math.floor((arr.length - 1) / 2);
    const len = arr.length;
    for (let i = mid; i >= 0; i--) {
      this.downHeap(arr, i, len);
    }

    console.log(arr);

    for (let i = len - 1; i >= 0; i--) {
      this.swap(arr, 0, i);
      this.downHeap(arr, 0, i);
    }
    console.log(arr);
  }
}
