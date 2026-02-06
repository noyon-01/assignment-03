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

const result = gonoVote(["ha", "na", "ha", "na", "na"]);
console.log(result);
