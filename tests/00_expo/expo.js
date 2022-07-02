// Do not use Math.pow() in your solution.
function expo(num, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= num;
  }
  return result;
}
module.exports = { expo };
