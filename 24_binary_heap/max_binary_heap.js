class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element); //add to the end of the array
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        //Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);  // i = 6 => children at 13, 14
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    //remove the root, take the last value to the top, then sink down to the correct position
    extractMax(){
        //swap the first(max) value with the last one:
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            // let leftChild = this.values[leftChildIdx]; //potential out of the bound
            let swap = null; //keep track the position that we are going to swap with
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element)
                    swap = leftChildIdx;
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || (swap && rightChild > leftChild)
                )
                    swap = leftChildIdx;
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.valuse[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
