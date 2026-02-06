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
const result = validOtp("ph-10985");
console.log(result);
