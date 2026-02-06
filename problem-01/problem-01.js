function newPrice(currentPrice, discount) {
    if (typeof (currentPrice) !== "number" || typeof (discount) !== "number" || discount < 0 || discount > 100) {
        return "Invalid"
    } else {
        const discountPrice = (currentPrice * discount) / 100;
        const newPrice = currentPrice - discountPrice;
        return newPrice.toFixed(3);
    }
}

const result = newPrice(1500, 20);
console.log(result);