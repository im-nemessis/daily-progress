function deepComparison(obj1, obj2) {
  let bool = typeof obj1 == "object" && typeof obj1 != null;

  console.log(bool);

  let bool2 = typeof obj2 == "object" && typeof obj2 != null;

  console.log(bool2);

  if (bool && bool2) {
    let boolean = Object.keys(obj1).length == Object.keys(obj2).length;

    console.log("bool : ", boolean);

    if (boolean) {
      let prop1 = Object.keys(obj1);
      console.log(prop1);

      let prop2 = Object.keys(obj2);

      console.log(prop2);

      let ans = "";
      for (let i = 0; i < prop1.length, i++; ) {
        if (prop1[i] == prop2[i]) {
          ans = "isTrue";
        } else {
          return false;
        }
      }
      if (ans == "isTrue") {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let x = { a: "hello", b: "dear" };
let y = { a: "hello", b: "dear" };

let ans = deepComparison(x, y);
console.log(ans);
