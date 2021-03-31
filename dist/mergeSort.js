export default class MergeSort {
    static mergeSort(arr, start, end) {
        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            this.mergeSort(arr, start, mid);
            this.mergeSort(arr, mid + 1, end);
            this.patition(arr, start, end, mid, this.temp);
        }
    }
    static patition(arr, start, end, mid, temp) {
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
            }
            else {
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
MergeSort.temp = [];
