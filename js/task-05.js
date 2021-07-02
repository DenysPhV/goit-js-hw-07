/*
# Задание 5

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

// const input = document.querySelector('#name-input');
// console.log(input);

// const nameOutput = document.querySelector('#name-output');
// console.log(nameOutput);

// function onInputChange() {
//   return (nameOutput.textContent = input.value);
// }
// input.addEventListener('input', onInputChange);
// ===================================================
// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// const onInput = () => {
//   refs.output.textContent = refs.input.value ? refs.input.value : 'незнакомец';
// };

// refs.input.addEventListener('input', onInput);
// =======================================================
let input = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

input.oninput = function () {
  if (input.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  } else {
    nameOutput.innerHTML = input.value;
  }
};
