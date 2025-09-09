// Завдання 4

//  + Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//  +   Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//  +   Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//  +   Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')

// decrement
decrement.addEventListener('click', () => {
	value.textContent = counterValue - 1;
	console.log(counterValue -= 1)
})
// increment
increment.addEventListener('click', () => {
	value.textContent = counterValue + 1;
	console.log(counterValue += 1)
})

