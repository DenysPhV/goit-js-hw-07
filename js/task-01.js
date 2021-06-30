

function calculateDiscount(years, paymentMethod, returnedOrder) {
  let discount = 0;
  if (years >= 1) {
    if (returnedOrder) {
      discount = 0;
      return discount;
    }
    if (paymentMethod === 'MasterCard') {
      discount = 0.1;
    }
    if (getCustomerBirthdayDate() === getCurrentDate()) {
      discount = 0.5;
    }
  }
  return discount;
}

console.log(discoutn(5, visa, 3))