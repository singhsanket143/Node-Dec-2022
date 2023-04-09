const linearSearch = function search(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) return i;
    }
    return undefined;
}

const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}

module.exports = {
    linearSearch,
    binarySearch
}