// !Problem-04: Upcoming Gono Vote! //
function gonoVote(array) {
  const haVote = [];
  const naVote = [];

  if (!Array.isArray(array)) {
    return "Invalid";
  } else {
    for (const arr of array) {
      if (arr.includes("ha")) {
        haVote.push(arr);
      } else if (arr.includes("na")) {
        naVote.push(arr);
      }
    }
  }

  const haVoteLength = haVote.length;
  const naVoteLength = naVote.length;
  
  if (haVoteLength > naVoteLength) {
    return true;
  } else if (haVoteLength === naVoteLength) {
    return "equal";
  } else {
    return false;
  }
}

const result1 = gonoVote(["ha", "na", "ha", "na"]);
console.log(result1);

const result2 = gonoVote(["ha", "na", "na"]);
console.log(result2);

const result3 = gonoVote(["ha", "ha", "ha", "na"]);
console.log(result3);

const result4 = gonoVote("ha, na");
console.log(result4);

const result5 = gonoVote(12345);
console.log(result5);
