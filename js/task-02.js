/*
# Задание 2

В HTML есть пустой список ul#ingredients.

Напиши скрипт, который для каждого элемента массива ingredients создаст
отдельный li, после чего вставит все li за одну операцию в список
ul.ingredients. 

Для создания DOM-узлов используй document.createElement().
*/
// Есть массив строк
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// перебираю массив
// const arrIngredients = ingredients.map(function (ingredient) {
//   console.log(ingredient);
// });

// создаю элемант списка
// const listItemRef = document.createElement('li');

// вставил текст из массива в один элемент списка
// console.log((listItemRef.textContent = ingredients[0]));
// console.log(listItemRef);

// мне нужен цикл создания li

let listIngredients = [];
ingredients.forEach(element => {
  // console.log(element);

  const listItemRef = document.createElement('li');
  listItemRef.textContent = element;
  listIngredients.push(listItemRef);
  // console.log(listItemRef);

  return listIngredients;
});
// console.log(listIngredients);
const listRef = document.querySelector('#ingredients');
listRef.append(...listIngredients);
// console.log(listRef);
// ============================================================

// Задание 2 должно быть выполнено с использованием перебирающего метода массива.
