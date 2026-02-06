// Problem - 01
function newPrice(currentPrice, discount) {
    if (typeof (currentPrice) !== "number" || typeof (discount) !== "number" || discount < 0 || discount > 100) {
        return "Invalid"
    } else {
        const discountPrice = (currentPrice * discount) / 100;
        const newPrice = currentPrice - discountPrice;
        return newPrice.toFixed(3);
    }
}

// Problem = 02
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