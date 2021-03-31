export default class MergeSort {
  static temp: Array<number> = [];
  static mergeSort(arr: Array<number>, start: number, end: number): void {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);

      this.mergeSort(arr, start, mid);
      this.mergeSort(arr, mid + 1, end);

      this.patition(arr, start, end, mid, this.temp);
    }
  }

  static patition(arr: Array<number>, start: number, end: number, mid: number, temp: Array<number>): void {
    for (let idx = start; idx <= end; idx++) {
      temp[idx] = arr[idx];
    }

    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      if (temp[i] < temp[j]) {
        arr[k] = temp[i];
        i++;
      } else {
        arr[k] = temp[j];
        j++;
      }
      k++;
    }

    for (let t = 0; t <= mid - i; t++) {
      arr[k + t] = temp[i + t];
    }
  }
}
