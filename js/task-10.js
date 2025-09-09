// Завдання 10 (виконувати не обов'язково)

// + Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// + Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//   +  Розміри найпершого <div> - 30px на 30px.
//   +  Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//   +  Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// + Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

let width = 30;
let height = 30;

function createBoxes(amount) {
  create.addEventListener("click", () => {
    amount = input.value;

    for (let i = 0; amount > i; i += 1) {
      const createDiv = document.createElement("div");
      boxes.append(createDiv);

      createDiv.style.width = `${width}px`;
      createDiv.style.height = `${height}px`;
      createDiv.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
    }
  });
}
createBoxes();

function destroyBoxes() {
  destroy.addEventListener("click", () => {
    boxes.innerHTML = "";
  });
}
destroyBoxes();
