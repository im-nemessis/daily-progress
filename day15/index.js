//  “People think that computer science is the art of geniuses but the
// actual reality is the opposite, just many people doing things that
// build on each other, like a wall of mini stones.”

//function

//objective

/*


write a funtion which prints two number : the number of cows and the number of chiken in a farm with their name and the number before with a padding of zeros of three;


*/

function padZeros(number, width) {
  let padded = `${number}`;
  while (padded.length < width) {
    padded = "0" + padded;
  }
  return padded;
}

function countOf(n, objInFarm) {
  return `${n} ${objInFarm}`;
}

function printFarmInventory(num, ...objs) {
  for (obj of objs) {
    console.log(countOf(padZeros(num, 7), obj));
  }
}

printFarmInventory(10, "hen");

//THE LYCANTHROPE'S LOG
