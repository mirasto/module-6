// Напиши скрипт, який для кожного елемента масиву ingredients:

//    + Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//    + Додасть назву інгредієнта як його текстовий вміст.
//    + Додасть елементу клас item.
//     + Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// find id by selector
const idIngredients = document.querySelector("#ingredients");

// solution №1 
const addLiItems = ingredients.map((ingredient) => {
  const li = document.createElement('li'); 
  li.textContent = ingredient; 
  li.classList.add('item');
  return li
})

idIngredients.append(...addLiItems);


// solution №2
// const ingredient = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// idIngredients.innerHTML = ingredient


