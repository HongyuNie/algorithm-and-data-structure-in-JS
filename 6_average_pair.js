//give a sorted array of integers and a target average
//determine if there is a pair of values
//whose average equals to the given one


//two pointer
function averagePair(arr, num) {
    // 2 ptrs, one at the beginning, one at the end
    let start = 0
    let end = arr.length - 1
    //compare the ave to the given ave
    // if given ave is bigger, move the left ptr
    // else move the right ptr
    while (start < end) {
        let avg = (arr[start]+arr[end]) / 2 
        if(avg === num) return true;
        else if(avg < num) start++
        else end--
    }
    return false;
}