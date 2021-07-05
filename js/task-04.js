/*
# Задание 4

Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

- Создай переменную counterValue в которой будет хранится текущее значение  счетчика.
- Создай функции increment и decrement для увеличения и уменьшения значения
  счетчика. 
  
-Добавь слушатели кликов на кнопки, вызовы функций и обновление
  интерфейса

*/
// ================== поиск и пробы ===================
// const counterEl = document.querySelectorAll('#counter button');
// console.log(counterEl);
// console.log(counterEl[1].dataset.action);
// console.log(counterEl[0].dataset.action);

// const counterDec = document.querySelector('.decrement');
// console.log(counterDec);
// const counterValue = document.querySelector('#value');
// console.log(counterValue.textContent);

// ====================== в группе ==========================
// const counterRef = document.querySelector('#counter');
// console.log(counterRef);
// const counterValue = document.querySelector('#value');
// const btnDecrement = document.querySelector(
//   '#counter button[data-action="decrement"]',
// );
// const btnIncrement = document.querySelector(
//   '#counter button[data-action="increment"]',
// );
// const increment = () =>
//   Number((counterValue.textContent -= btnDecrement.textContent));
// const decrement = () =>
//   Number((counterValue.textContent -= btnIncrement.textContent));

// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);

// ======================================================================
let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const minusBtn = document.querySelector('#counter').firstElementChild;
const plusBtn = document.querySelector('#counter').lastElementChild;

plusBtn.addEventListener('click', () => {
  // console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

minusBtn.addEventListener('click', () => {
  // console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  // console.log("counterValue", counterValue);
});
