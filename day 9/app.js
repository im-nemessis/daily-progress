const value = {
  one: 1,
  two: 2,
  three: 3,
  four4: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

function getEl(id) {
  let ans = document.querySelector(id);
  return ans;
}

let ans = new getEl(".operator");
console.log(ans);
