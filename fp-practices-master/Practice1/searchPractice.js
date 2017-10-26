'use strict'

function binarySearch(input, target) {
  const mid = Math.floor((input.length-1)/2);
  const temp = input[mid];
  const leftArr = input.filter(item => item < temp);
  const rightArr = input.filter(item => item > temp);
  return input.length === 0 ? -1 : (target === temp ? mid : (target < temp ? binarySearch(leftArr,target) : mid + 1 + binarySearch(rightArr,target)));
}

module.exports = binarySearch
