function binarySearch (arr, val) {
    let l = 0, r = arr.length - 1;
    m = Math.floor((r - l) / 2);
    while (l < r) {
        if (arr[m] === val)
            return m; 
        if (arr[m] < val) l = m;
        else if (arr[m] > val) r = m;
    }
    return -1;
}

console.log(binarySearch([2,3,4,5,6], 4));