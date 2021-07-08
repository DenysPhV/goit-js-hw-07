/*
# Задание 2

В HTML есть пустой список ul#ingredients.

Напиши скрипт, который для каждого элемента массива ingredients создаст
отдельный li, после чего вставит все li за одну операцию в список
ul.ingredients. 

Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
// listRef = parent
const listOfItem = (array, parent) => {
  const listItemRef = array.map(element => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = element;
    return listItemRef;
  });

  parent.append(...listItemRef);
};

listOfItem(ingredients, listRef);
// =============================================================

// let listIngredients = [];
// ingredients.forEach(element => {
// const listItemRef = document.createElement('li');

// listItemRef.textContent = element;
// listIngredients.push(listItemRef);

//   return listIngredients;
// });

// const listRef = document.querySelector('#ingredients');
// listRef.append(...listIngredients);

// ============================================================

// const listRef = document.querySelector('#ingredients');

// const listIngredients = ingredients.map(element => {
//   const listItemRef = document.createElement('li');

//   listItemRef.innerHTML = element;

//   listRef.append(listItemRef);
// });

<<<<<<< HEAD
// =============================================================
=======
// Задание 2 должно быть выполнено с использованием перебирающего метода массива.
/*
При выполнении задания 2 уместным было бы использовать метод map.

В задании добавлять елементы в разметку нужно ЗА ПРЕДЕЛАМИ ра,оты метода map
*/
>>>>>>> c0a6c09596446ed7d6efaca63306ffc9bce9b8a8
