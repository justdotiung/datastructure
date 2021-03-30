export default class Heap {
  static swap(arr: Array<number>, idx1: number, idx2: number): void {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  static downHeap(arr: Array<number>, i: number, right: number): void {
    const rootValue = arr[i];
    let currRoot = i;
    let bc = 0;
    while (currRoot < Math.floor(right / 2)) {
      const cl = currRoot * 2 + 1;
      const cr = cl + 1;

      bc = arr[cl] < arr[cr] && cr < right ? cr : cl;
      if (rootValue > arr[bc]) break;
      this.swap(arr, currRoot, bc);

      currRoot = bc;
    }
    arr[currRoot] = rootValue;
  }

  static sort(arr: Array<number>) {
    const mid = Math.floor((arr.length - 1) / 2);
    const len = arr.length;
    // 이진트리 힙
    for (let i = mid; i >= 0; i--) {
      this.downHeap(arr, i, len);
    }

    console.log(arr);

    //힙 정렬
    for (let i = len - 1; i >= 0; i--) {
      this.swap(arr, 0, i);
      this.downHeap(arr, 0, i);
    }
  }
}
