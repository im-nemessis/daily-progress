//Looping triangle

var ans = "#";
for (let i = 0; i < 7; i++) {
  console.log(ans);
  ans = ans + "#";
}

// fizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("buzz");
  }

  console.log(i);
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
}

//chessboard

function chessboard(num) {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      let ans = "# ";
      for (let i = 1; i < num / 2; i++) {
        ans += "# ";
      }
      console.log(ans);
    }
    if (i % 2 !== 0) {
      let ans = " #";
      for (let i = 0; i < num / 2 - 0.5; i++) {
        ans += " #";
      }
      console.log(ans);
    }
  }
}

chessboard(8);

//minimum
function min(a, b) {
  if (b == undefined) {
    return a;
  }

  if (a > b) {
    return b;
  } else {
    return b;
  }
}

console.log(min(2, 4));

//bean counting

function countsB(string) {
  let count = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === "B") {
      count++;
    }
  }

  return count;
}

console.log(countsB("BooB"));

//char count

function charCount(string, char) {
  let count = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(charCount("boob", "o"));
