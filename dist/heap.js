"use strict";
const heap = [7, 3, 5, 8, 3, 5, 1, 9, 6];
for (let i = 1; i < heap.length; i++) {
    let c = i;
    while (c != 0) {
        const root = (c - 1) / 2;
        if (heap[root] < heap[c]) {
            const temp = heap[root];
            heap[root] = heap[c];
            heap[c] = temp;
        }
        c = root;
    }
}
for (let i = heap.length - 1; i >= 0; i--) {
    const temp = heap[0];
    heap[0] = heap[i];
    heap[i] = temp;
    let root = 0;
    let c = 1;
    while (c < i) {
        c = 2 * root + 1;
        if (heap[c] < heap[c + 1] && c < i - 1) {
            c++;
        }
        if (heap[root] < heap[c] && c < i) {
            const temp = heap[root];
            heap[root] = heap[c];
            heap[c] = temp;
        }
        root = c;
    }
}
console.log(heap);
