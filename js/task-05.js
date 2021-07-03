/*
# Задание 5

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

// const nameInput = document.getElementById('name-input');
// const nameOutput = document.getElementById('name-output');

// nameInput.oninput = function () {
//
//   if (input.value === '') {
//     nameOutput.innerHTML = 'незнакомец';
//   } else {
//     nameOutput.innerHTML = input.value;
//     }
// };
// ======================================================
// const nameInput = document.getElementById('name-input');
// const nameOutput = document.getElementById('name-output');

// nameInput.oninput = function () {
//   nameInput.value === ''
//     ? (nameOutput.innerHTML = 'незнакомец')
//     : (nameOutput.innerHTML = nameInput.value);
// };
// ==========================================================
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.oninput = () =>
  nameInput.value === ''
    ? (nameOutput.innerHTML = 'незнакомец')
    : (nameOutput.innerHTML = nameInput.value);
