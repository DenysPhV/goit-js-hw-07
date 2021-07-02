/*
# Задание 3

Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

Используй массив объектов images для создания тегов img вложенных в li. Для
создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки. 
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  <li class = "gallery-item'">
//    <img src="" alt="">
//  </li>

const itemGalleryEl = document.querySelector('#gallery');
// зашел немного в тупик как соеденить два элемента
// const makeImages = items => {
//   return items.map(item => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('gallery-item');

//     const itemImageEl = document.createElement('img');
//     itemImageEl.src = item.url;
//     itemImageEl.alt = item.alt;
//     //   return itemEl;
//     console.log(itemEl, itemImageEl);
//   });
// };

// const listRef = makeImages(images);
// itemGalleryEl.append(...listRef);
// ========================= version 2 =============================

const makeGalleryImage = images.map(({ url, alt }) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery-item');

  const imageEl = document.createElement('img');
  imageEl.src = url;
  imageEl.alt = alt;
  imageEl.width = 320;

  itemEl.append(imageEl);
  return itemEl;
  //   console.log(itemEl);
});
// const elements = images.map(makeGalleryImage);
// console.log(elements);
itemGalleryEl.append(...makeGalleryImage);
console.log(itemGalleryEl);
