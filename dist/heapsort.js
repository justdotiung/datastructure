export default class Heap {
    static swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    static downHeap(arr, left, right) {
        let parent = left;
        const root = arr[parent];
        let overNumChild = 0;
        while (parent < right) {
            const cl = parent * 2 + 1;
            const cr = parent * 2 + 2;
            overNumChild = arr[cl] < arr[cr] ? cr : cl;
            if (root > arr[overNumChild])
                break;
            arr[parent] = arr[overNumChild];
            parent = overNumChild;
        }
        arr[parent] = root;
    }
    static sort(arr, len) {
        const mid = Math.floor((len - 1) / 2);
        const right = Math.floor(len / 2);
        console.log(mid, len, right);
        for (let i = len - 1; i >= 0; i--) {
            this.downHeap(arr, i, right);
        }
        for (let i = len - 1; i >= 0; i--) {
            this.swap(arr, 0, i);
            this.downHeap(arr, 0, Math.floor((i - 1) / 2));
        }
    }
}
