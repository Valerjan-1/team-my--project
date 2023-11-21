import { getBooksById } from './images-api';
const listCategory = document.querySelector(`.book-category-list`);

// const listCategory = document.querySelector(`.book-category-list`);
const body = document.querySelector(`body`);
const byModal = document.querySelector(`.modal`);
const byModalOne = document.querySelector(`.modal-1`);
const overley = document.querySelector(`.overley`);

byModal.style.display = `none`;
// bs-book-item; book-category-list
export function openModal(bookInfo) {
  overley.style.display = `block`;

  getBooksById(bookInfo)
    .then(idBook => {
      const { title, author, book_image, description, buy_links, _id } = idBook;
      // byModal.innerHTML = ``;
      body.style.overflow = `hidden`;
      byModal.innerHTML = `
      <div class="modal-1">
      <span class="close" id="closeModalBtn">&times;</span>
        <div class="modal-content">
          <img src="${book_image}" class="modal-image" alt="${title}" />
          <div class="text-content-modal">
            <h2 id="modalTitle" class="modal-title">${title}</h2>
            <p id="modalAuthor" class="modal-author">${author}</p>
            <p id="modalDescription" class="modal-description">${description}</p>
          </div>
          <button id="modal-add-to-list" type="button" class="modal-button">ADD TO SHOPPING LIST
  </button>
        </div>
        </div>
        
        `;
      const addToShoppingListBtn = document.getElementById('modal-add-to-list');

      const closeModalBtn = document.getElementById('closeModalBtn');

      closeModalBtn.addEventListener('click', closeModal);
      addToShoppingListBtn.addEventListener('click', addToShoppingList);

      function addToShoppingList() {
        const shoppingList =
          JSON.parse(localStorage.getItem('shoppingList')) || [];

        // Проверяем, есть ли книга уже в списке
        const bookIndex = shoppingList.findIndex(item => item.id === _id);

        if (bookIndex === -1) {
          // Книги нет в списке, добавляем
          shoppingList.push({
            id: _id,
            title: title,
            author: author,
            image: book_image,
            description: description,
            buy_links: buy_links,
          });

          addToShoppingListBtn.textContent = 'Remove from the shopping list';
        } else {
          // Книга уже в списке, удаляем
          shoppingList.splice(bookIndex, 1);
          addToShoppingListBtn.textContent = 'Add to shopping list';
        }

        // Сохраняем весь список книг в локальном хранилище
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      }

      closeModalBtn.addEventListener('click', () => {
        // Вызываем функцию deleteToShoppingList при закрытии модального окна
        deleteToShoppingList();
        closeModal();
      });

      function deleteToShoppingList() {
        // Проверяем текущий текст кнопки, чтобы правильно обновить локальное хранилище
        if (
          addToShoppingListBtn.textContent === 'Remove from the shopping list'
        ) {
          localStorage.removeItem('shoppingList');
        }
      }

      // closeModal();
      byModal.style.display = 'block';
    })
    .catch(err => console.log(err));
}
byModal.addEventListener('click', function (event) {
  if (event.target === byModal) {
    closeModal();
  }
});
function deleteToShoppingList() {
  // Проверяем текущий текст кнопки, чтобы правильно обновить локальное хранилище
  if (addToShoppingListBtn.textContent === 'Remove from the shopping list') {
    localStorage.removeItem('shoppingList');
  }
}
listCategory.addEventListener('click', openToModal);

function openToModal(e) {
  const id = e.target.id;

  openModal(id);
}
function closeModal() {
  body.style.overflow = `scroll`;
  byModal.style.display = 'none';
  overley.style.display = `none`;
}
