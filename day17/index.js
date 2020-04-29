function speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

let whiteRabbit = { type: "white", speak };

let blackRabbit = { type: "black" };

whiteRabbit.speak("hello");

speak.call(blackRabbit, "burp!");

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

normalize.call({ coords: [0, 2, 3, 4], length: 5 });

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
  laugh(line) {
    console.log(`The ${this.type} rabbit laughs '${line}'`);
  },
};

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";
killerRabbit.laugh("killer");

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak = function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let wierdRabbit = new Rabbit("weird");
wierdRabbit.speak("hello");

Rabbit.teeth = "small";

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(Rabbit.teeth);

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;

console.log(wierdRabbit[sym]);

const toStringSym = Symbol("toString");
Array.prototype[toStringSym] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2, 3, 4][toStringSym]());
