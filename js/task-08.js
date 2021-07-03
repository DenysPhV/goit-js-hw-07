/*
# Задание 8 - дополнительное, выполнять не обязательно

Напиши скрипт создания и очистки коллекции элементов.
 Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

// ===================================================
// const render = document.querySelector('[data-action="render"]');
// const destroy = document.querySelector('[data-action="destroy"]');
// const boxesEl = document.getElementById('boxes');

// render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   const amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   const boxSize = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     let reSize = boxSize + i * 10;
//     const newDivEl = document.createElement('div');
//     newDivEl.style.cssText = `width: ${reSize}px; height: ${reSize}px; background-color: rgba( ${randomCreate()} , ${randomCreate()} , ${randomCreate()} )`;
//     fragment.appendChild(newDivEl);
//   }
//   boxesEl.appendChild(fragment);
// }

// function randomCreate() {
//   return Math.floor(Math.random() * 256);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }
// ===================================================================
const render = document
  .querySelector('[data-action="render"]')
  .addEventListener('click', () => {
    const amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
  });

const destroy = document
  .querySelector('[data-action="destroy"]')
  .addEventListener('click', () => {
    boxes.innerHTML = '';
  });

const boxesEl = document.getElementById('boxes');

function createBoxes(amount) {
  const boxSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let reSize = boxSize + i * 10;
    const newDivEl = document.createElement('div');
    newDivEl.style.cssText = `width: ${reSize}px; height: ${reSize}px; background-color: rgba( ${randomCreate()} , ${randomCreate()} , ${randomCreate()} )`;
    fragment.appendChild(newDivEl);
  }
  boxesEl.appendChild(fragment);
}

function randomCreate() {
  return Math.floor(Math.random() * 256);
}

// const createBoxes = amount.reduce((acc, unit) => acc + unit, 0);??????
