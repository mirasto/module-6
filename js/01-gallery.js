import { galleryItems } from './gallery-items.js';
/* Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

  + 1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

  + 2 Реалізація делегування на ul.gallery і отримання url великого зображення.
    
	+ 3	Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

   + 4 Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

   5 Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox. */

const gallery = document.querySelector('.gallery');
const markup = createMarkupImages(galleryItems);
// create gallery
gallery.insertAdjacentHTML('afterbegin', markup);

function createMarkupImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}
// modal window
gallery.addEventListener('click', e => {
  e.preventDefault();

  

  const modalImage = e.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${modalImage}">
  `);
  instance.show();
  // func close with escape
  closeModalWindow(instance);
});
// escape close
function closeModalWindow(currentInstance) {
  gallery.addEventListener('keydown', e => {
    if (e.key !== 'Escape') {
      return;
    }
    currentInstance.close();
  });
}

console.log(galleryItems);
