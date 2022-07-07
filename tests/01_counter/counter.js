function counter(num) {
  let solution = [];
  for (let i = 1; i <= num; i++) {
    solution.push(i);
  }
  return solution;
}

module.exports = { counter };
