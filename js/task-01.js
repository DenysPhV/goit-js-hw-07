// const navItemEl = document.querySelectorAll('.item h2, li');

// console.log(navItemEl);

// const titleEl = document.querySelectorAll('categories h2');
// console.log(titleEl.textContent);
// const titleEl = document.querySelectorAll('h2');
// console.log(...titleEl.textContent);

// const menuItemsByTagName = document.querySelectorAll('.item');
// console.log(menuItemsByTagName);

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
