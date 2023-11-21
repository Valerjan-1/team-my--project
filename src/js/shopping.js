document.addEventListener('DOMContentLoaded', function () {
  displayShoppingList(); // Вызываем функцию для отображения книг при загрузке страницы
});

function getShoppingList() {
  // Получаем данные из локального хранилища
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  return shoppingList;
}

function displayShoppingList() {
  const shoppingList = getShoppingList();
  const bookList = document.querySelector('.shopping-book-ul');
  const emptyListMessage = document.querySelector('.shopping-list-empty');

  // Проверяем наличие сохраненных книг в локальном хранилище
  if (shoppingList.length > 0) {
    bookList.innerHTML = shoppingList
      .map(
        ({ id, title, author, image, description, buy_links }) => `
          <li class="shopping-book-li">
            <button class="shopping-delete-btn" data-book-id="${id}">
              <img
                class="shopping-list-svg"
                width="16"
                height="16"
                src="../img/trash.png"
              />
            </button>
            <img class="shopping-book-image" src="${image}" alt="${title}" />
            <div class="shopping-text-container">
              <p class="shopping-book-title">${title}</p>
              <p class="shopping-book-descrip">${description}</p>
              <p class="shopping-book-author">${author}</p>
            </div>
            <div class="amazon-kindle">
              <a class='kindle-link' href='${buy_links}'>
                <img
                  class="kindle-pic"
                  src="../img/kindle.png"
                  style="background-color: transparent"
                  alt="kindle"
                />
              </a>
            </div>
          </li>
      `
      )
      .join('');

    // Добавляем обработчик события для кнопок удаления
    const deleteButtons = document.querySelectorAll('.shopping-delete-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', handleDeleteButtonClick);
    });

    // Скрываем блок с пустым списком
    emptyListMessage.style.display = 'none';
  } else {
    // Если список пуст, отображаем блок с сообщением о пустом списке
    emptyListMessage.style.display = 'block';
  }
}

function handleDeleteButtonClick(event) {
  const bookId = event.currentTarget.getAttribute('data-book-id');
  removeFromShoppingList(bookId);
  displayShoppingList();
}

function removeFromShoppingList(bookId) {
  const shoppingList = getShoppingList();
  const updatedList = shoppingList.filter(book => book.id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(updatedList));
}
