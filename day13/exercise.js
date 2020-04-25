// method

let rabbit = {};
rabbit.speak = function (line) {
  console.log(`the rabbit says "${line}"`);
};

rabbit.speak("hello");

function speak(line) {
  console.log(`${this.type} rabbit says "${line}"`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");

speak.call(hungryRabbit, "Burp!");

/// normalize

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });

//to create an Object with a specific prototype

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  },
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("skreee!");

//constructor function

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
// The prototype object used when constructing objects is found by taking the
// prototype property of the constructor function.

function Rabbit(type) {
  this.type = type;
}

//adding a fuction to its prototype
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

// → true
console.log(Object.getPrototypeOf(weirdRabbit) == Function.prototype);
//

//overrididng the class value

Rabbit.prototype.teeth = "small";
console.log(weirdRabbit.teeth);
// small

weirdRabbit.teeth = "long, sharp, and bloody";

console.log(weirdRabbit.teeth);
console.log(Rabbit.prototype.teeth);
