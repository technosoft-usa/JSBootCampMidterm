function betterThanAverage(arr, myScore) {
  let classAvg = 0;
  let numOfScores = arr.length + 1;
  for (let i = 0; i < arr.length; i++) {
    classAvg += arr[i];
  }
  classAvg += myScore;
  classAvg = classAvg / numOfScores;
  let avg = Math.round(classAvg);

  if (myScore > avg) {
    return `your score ${myScore} is greater than class average ${
      avg - 1
    }`;
  } else if (myScore < avg) {
    return `your score ${myScore} is lower than class average ${avg}`;
  } else {
    return `your score ${myScore} is equal to the class average`;
  }
}

module.exports = { betterThanAverage };
