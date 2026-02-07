//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  const rightNumber = omr.right;
  const rightScore = rightNumber * 1;

  const wrongNumber = omr.wrong;
  const wrongScore = wrongNumber * 0.5;

  const roundedTotalScore = Math.round(rightScore - wrongScore);

  const skipNumber = omr.skip;
  const totalScores = rightNumber + wrongNumber + skipNumber;

  if (totalScores > 100 || typeof omr !== "object" || Array.isArray(omr)) {
    return "Invalid";
  } else {
    return roundedTotalScore;
  }
}

const result1 = finalScore({ right: 67, wrong: 23, skip: 10 });
console.log(result1);

const result2 = finalScore({ right: 80, wrong: 25, skip: 0 });
console.log(result2);

const result3 = finalScore({ right: 50, wrong: 10, skip: 40 });
console.log(result3);

const result4 = finalScore({ right: 30, wrong: 30, skip: 40 });
console.log(result4);

const result5 = finalScore("!@#");
console.log(result5);

const result6 = finalScore(["Raj"]);
console.log(result6);
