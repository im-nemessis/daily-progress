function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(2, console.log);

let label = [];
repeat(3, (i) => {
  label.push(`unit ${i + 1}`);
});

console.log(label);
//function that creates a new function

function greaterthan(n) {
  return (m) => m > n;
}

let greaterthan10 = greaterthan(10);

console.log(greaterthan10(10.1));

//function that changes other functions

function noisy(func) {
  return (...args) => {
    console.log("calling with ", args);
    let result = func(...args);
    console.log("called with", args, "returned", result);
    return result;
  };
}

// let x = noisy(Math.max);
// let y = x(1, 2, 3, 4, 5);

// new type of fucntion that provides new type of control flow

function unless(test, then) {
  if (!test) {
    then();
  }
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is a even");
  });
});

let a = [1, 2, 3, 4, 5, 6];

//filtering array

let SCRIPTS = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],

    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];

function filter(array, test) {
  passed = [];
  for (let i of array) {
    if (test(i)) {
      passed.push(i);
    }
  }

  return passed;
}

// console.log(filter(SCRIPTS, (i) => i.living));

//tarnsforming an array using higher order functions

function map(arr, tranform) {
  mapped = [];
  for (let i of arr) {
    mapped.push(tranform(i));
  }

  return mapped;
}

// let ltrScript = filter(SCRIPTS, (s) => s.direction == "ltr");

// let ans = map(ltrScript, (m) => m.name);

// console.log(ans);
