"use strict";

const MAX_LENGTH = 50;
const MIN_NUM = -10000;
const MAX_NUM = 10000;

const TestType = {
  ZERO_LENGTH: "ZERO_LENGTH",
  NOT_FOUND: "NOT_FOUND",
  FIRST_INDEX: "FIRST_INDEX",
  LAST_INDEX: "LAST_INDEX",
  RANDOM: "RANDOM"
};

function search(input,target) {
  return input.indexOf(target);
}

function generateArr(arr,length) {
  const newElement = MIN_NUM + Math.floor(Math.random() * 2 * MAX_NUM);
  const newArr = arr.concat([newElement]);
  return length === 0 ? [] : generateArr(newArr,length-1)
}

function generate(numberOfTestcases) {
  const choice = Math.floor(Math.random() * 5);
  const arrLength = choice === 0 ? 0 : Math.floor(Math.random() * 50);
  const arr = generateArr([],arrLength);
  const target = choice === 1 ? MIN_NUM + Math.floor(Math.random() * 2 * MAX_NUM) : choice === 2 ? arr[0] : choice === 3 ? arr[arr.length-1] : arr[Math.floor(Math.random()*(arr.length-1))];
  const output = search(arr,target);
  const obj = {
    input : arr,
    target : target,
    output : output 
  }
  return numberOfTestcases === 0 ? [] : [obj].concat(generate(numberOfTestcases-1));
}

module.exports = generate;
