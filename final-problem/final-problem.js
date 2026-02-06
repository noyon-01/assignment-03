// Problem - 01
function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    const discountPrice = (currentPrice * discount) / 100;
    const newPrice = currentPrice - discountPrice;
    return newPrice.toFixed(3);
  }
}

// Problem - 02
function validOtp(otp) {
  if (typeof otp !== "string" || otp === null) {
    return "Invalid";
  } else if (otp.length !== 8) {
    return false;
  } else if (!otp.startsWith("ph-")) {
    return false;
  } else {
    return true;
  }
}

// Problem - 03
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
