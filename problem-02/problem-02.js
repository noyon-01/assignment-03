//Problem-02: OTP Validation for Zapshift
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

const result1 = validOtp("ph-10985");
console.log(result1);

const result2 = validOtp("ph-1234");
console.log(result2);

const result3 = validOtp("abc-12345");
console.log(result3);

const result4 = validOtp(["ph-10985"]);
console.log(result4);

const result5 = validOtp(12345678);
console.log(result5);
