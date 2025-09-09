// Завдання 5

// + Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
	span.textContent = event.currentTarget.value
	if (input.value === '') {
		span.innerHTML = "Anonymous";
	}
})
