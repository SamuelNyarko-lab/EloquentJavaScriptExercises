// Minimum
// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can write a function like that ourselves now. Define
// the function min that takes two arguments and returns their minimum.

function findMinimum(value1, value2) {
  return value1 < value2 ? value1 : value2;
}

console.log(findMinimum(1, -2));

//Solution From Book
// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }
