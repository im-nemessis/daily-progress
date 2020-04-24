let a = [1, 2, 3, 4, 5, 7, 8, 9, 10];
//10 9 8 7 5 4 3 2 1

// reverse Array

function inverseArray(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    newArray[i] = array[array.length - 1 - i];
  }

  return newArray;
}

console.log(inverseArray(a));

// reverseArrayInPlace

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2 - 1; i++) {
    let temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }

  return array;
}

console.log(reverseArrayInPlace(a));

//list
let list = {
  value: null,
  rest: null,
};

function arrayToList(list, arr = []) {
  let array = arr;

  if (array.length == 0) {
    return (list.rest = null);
  }

  list.value = array[0];
  let sliceArr = array.slice(1);
  list.rest = {
    value: null,
    rest: null,
  };

  arrayToList(list.rest, sliceArr);

  return list;
}

let b = [1, 2, 3, 4, 5];
let list2 = arrayToList(list, b);

console.log(list2);

//list to array

function listToArray(list = {}) {
  let arr = [];
  if (list.rest == null) {
    arr.push(list.value);
    return arr;
  }
  arr.push(list.value);
  listToArray(list.rest);
}

let c = {
  value: 1,
  rest: {
    value: 2,
    rest: null,
  },
};
console.log(listToArray(list2));
