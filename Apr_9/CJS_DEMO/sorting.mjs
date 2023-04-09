export function insertionsort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currElement) {
            arr[j+1] = arr[j]; // shifting the element to the right index
            j--;
        }
        arr[j+1] = currElement;
    }
}

export function bubblesort(arr) {
    let n = arr.length;
    // this function applied adjacent comparisons and immediate swaps with adjacent element
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        // we just need n-1 iterations because after than we will be only left with smallest element
        for(let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
}

function getMinIndex(arr, i) {
    // this function returns the index of the minimum element in the range [i, n-1]
    let minIndex = i; // we assume first element of the range as the minimum element candidate
    for(let j = i + 1; j < arr.length; j++) {
        // we go in the reminaing array form [i+1, n-1]
        if(arr[j] < arr[minIndex]) {
            // if the current element at the index j is less than our current minimum candidatw
            minIndex = j;
        }
    }
    return minIndex;
}

export function selectionSort(arr) { // we assume array is integer array
    for(let i = 0; i < arr.length; i++) {
        // [i, n-1] -> unsorted region
        let minIndex = getMinIndex(arr, i);
        // swap the ith element with min index
        if(i != minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

function merge(left, right) {
    // left -> [], right -> []
    let result = [];
    let i = 0, j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        result.push(left[i]);
        i++;
    }
    while(j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

function f(arr, i, j) {
    if(i == j) {
        let temp = [arr[i]];
        return temp;
    }
    let mid = Math.floor((i + j) / 2);
    let left = f(arr, i, mid);
    let right = f(arr, mid+1, j);
    let result = merge(left, right);
    return result;
}

export default function mergesort(arr) {
    return f(arr, 0, arr.length - 1);
}
