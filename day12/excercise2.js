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

function listToArray(list, arr) {
  if (arr.length == 0) {
    list.rest = null;
    return list;
  }

  list.value = arr[0];
  let sliceArr = arr.slice(1);
  list.rest = {
    value: null,
    rest: null,
  };

  listToArray(list.rest, sliceArr);
}

console.log(listToArray(list, a));
