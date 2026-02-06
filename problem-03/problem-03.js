function finalScore(omr) {
  const rightNumber = omr.right;
  const rightScore = rightNumber * 1;

  const wrongNumber = omr.wrong;
  const wrongScore = wrongNumber * 0.5;

  const skipNumber = omr.skip;

  const roundedTotalScore = Math.round(rightScore - wrongScore);

  const totalScores = rightNumber + wrongNumber + skipNumber;
  if (totalScores > 100 || typeof omr !== "object" || Array.isArray(omr)) {
    return "Invalid";
  } else {
    return roundedTotalScore;
  }
}

const result = finalScore({"right": 85, "wrong": 25, "skip": 15});
// const result = finalScore([1, 2, 3, 4, 6]);
console.log(result);
