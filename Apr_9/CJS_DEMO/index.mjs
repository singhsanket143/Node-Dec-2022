// const { linearSearch: ls, binarySearch: bs } = require('./searching');
// const { bubbleSort, insertionSort } = require('./sorting'); // named export
// const QuickSort = require('./quicksort'); // default export

import searchingAlgo from './searching.js';
import Mergesort, {bubblesort as bs } from './sorting.mjs';
console.log(searchingAlgo.linearSearch([3,2,1,5,4,23,6], 23))
let arr = [5,4,3,2,1];
arr = Mergesort(arr);
console.log(arr)
// console.log(module)