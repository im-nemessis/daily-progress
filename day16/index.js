let dataSet = require("./dataset.js");

//function that repaeats something
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

//function that create another function
function greaterthan(n) {
  return (m) => n > m;
}

//function that changes another function

function noisy(f) {
  return (...args) => {
    console.log(`calling with ${args}`);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(1, 2, 3, 4);

//function that provide new type of control flow

function unless(test, then) {
  if (!test) then();
}

repeat(4, (n) => {
  unless(n % 2 == 1, () => {
    console.log(`${n} is even`);
  });
});

//built in array method --- forEach
// [1, 2, 3, 4].forEach((n) => console.log(n));

// console.log(dataSet);

//filter method -- its a pure function because rather than modifying the existing array it creates one.
function filter(array, test) {
  let passed = [];
  for (let i of array) {
    if (test(i)) {
      passed.push(i);
    }
  }
  return passed;
}

let x = filter(dataSet, (script) => script.living);

// let y = filter(x, (i) => i.direction == "ttb");
// console.log(y);

//transforming an array with map

function map(arr, transform) {
  let transformed = [];
  for (i of arr) {
    transformed.push(transform(i));
  }
  return transformed;
}

// console.log(map(x, (n) => n.name));
// console.log(x.filter((n) => n.name == "Hebrew")[0]["ranges"]);

//summerizing with reduce

function reduce(array, combine, start) {
  current = start;
  for (i of array) {
    current = combine(current, i);
  }
  return current;
}

// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0));

//to use reduce twice to get script with most character

// dataSet.reduce((a, b) => {
//   return characterCount(a) > characterCount ? a : b;
// });

function characterCount(script) {
  // here count takes the first element of the array (ranges)
  return script.ranges.reduce((count, [from, to]) => {
    //from and to work as a destructuror
    // here the actual differnce of element at indicies 2 ,3 ,4 etc is added to count array's
    // last index and that count remains same as array are passed by reference and the count never change
    return count + (to - from);
    //it returns somethng like a array [frist element's first index, concatination of difference of from
    // -to to and the count's second index]
  }, 0);
}

dataSet.reduce((a, b) => {
  // console.log(a, b);
  return characterCount(a) < characterCount(b) ? b : a;
});

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
let av = average([1, 2, 3, 4, 5]);
console.log(av);

function averageOf(array) {
  let ans = average(array.filter((a) => a.living).map((b) => b.year));
  return Math.round(ans);
}

let ans = averageOf(dataSet);

console.log(ans);

function characterScript(code) {
  for (element of dataSet) {
    if (
      element.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return element;
    }
  }
  return null;
}

// console.log(characterScript(66864));

function countBy(items, groupName) {
  let counts = [];
  for (item of itmes) {
    let name = groupName(item);
    let;
  }
}
