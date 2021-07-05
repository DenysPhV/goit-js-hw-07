/*
# Задание 6

Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

- Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.

- Если введено подходящее количество, то border инпута становится зеленым, если  неправильное - красным.

 Для добавления стилей, используй CSS-классы valid и invalid.
*/
// let inputVal = document.getElementById('validation-input');

// let totalLength = inputVal.getAttribute('data-length');
// let intTotalLength = parseInt(totalLength, 10);

// inputVal.oninput = function () {
//   if (inputVal.value.length === intTotalLength) {
//     inputVal.classList.remove('invalid');
//     inputVal.classList.add('valid');
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove('valid');
//     inputVal.classList.remove('invalid');
//   }
//   if (inputVal.value.length !== intTotalLength && inputVal.value.length !== 0) {
//     inputVal.classList.add('invalid');
//   }
// };
// ===============================================
const inputEl = document.querySelector('#validation-input');

const inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('blur', element => {
  const text = element.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
