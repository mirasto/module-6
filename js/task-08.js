
// Завдання 8
// Напиши скрипт управління формою логіна.

//    + Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//   +  Під час відправлення форми сторінка не повинна перезавантажуватися.
//    + Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//    + Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//    + Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

// object
let obj = {}

form.addEventListener('submit', (event) => {
	event.preventDefault(); // disable default submit
	// validation form
	const email = form.elements.email.value;
	const password = form.elements.password.value;
	if (!email || !password) {
    alert("Заповни поля");
  } else {
    // create object if smth input in form
    obj[email] = email;
    obj[password] = password;
  }
	// log obj
	console.log(obj);
	// delete input content in form
	form.reset();
})

