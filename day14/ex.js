function deepComparison(obj1, obj2) {
  let bool = typeof obj1 == "object" && typeof obj1 != null;

  let bool2 = typeof obj2 == "object" && typeof obj2 != null;

  if (!bool && !bool2) {
    if (!obj1 == null && !obj2 == null) {
      if (obj1 === obj2) {
        return true;
      }
    }
  }

  if (bool && bool2) {
    let boolean = Object.keys(obj1).length == Object.keys(obj2).length;

    if (boolean) {
      let prop1 = Object.keys(obj1);

      let prop2 = Object.keys(obj2);

      let ans = "";
      for (let i = 0; i < prop1.length i++; ) {
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
