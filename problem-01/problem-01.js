// !Problem-01: New Price for Eid Sale! //
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

const result1 = newPrice(1500, 20);
console.log(result1);

const result2 = newPrice(2000, 15);
console.log(result2);

const result3 = newPrice(1200, 7);
console.log(result3);

const result4 = newPrice("1000", 10);
console.log(result4);

const result5 = newPrice(2000, 17.17);
console.log(result5);

const result6 = newPrice(500, "5");
console.log(result6);
