import { getCategoryList } from './images-api';
import { getCategory } from './images-api';
import { getTopBooks } from './images-api';

const allList = document.querySelector(`.all-categories`);
const listCategory = document.querySelector(`.book-category-list`);

// .book-category-list .bs-book-list
const textTitle = document.querySelector(`.Books-best-sellers-text`);
const activeCategory = document.querySelector(`.active-all-categories`);

activeCategory.classList.remove('inactive-all-categories');

getCategoryList()
  .then(data => {
    data
      .sort((a, b) => (a.list_name > b.list_name ? 1 : -1))
      .map(list => {
        const { list_name } = list;

        return allList.insertAdjacentHTML(
          `beforeend`,
          `<li><a class="list-category"href="">${list_name}</a></li>`
        );
      })
      .join(``);
  })
  .catch(error => console.log(error));

allList.addEventListener(`click`, nameCategories);

function nameCategories(e) {
  e.preventDefault();

  const categoriesName = e.target.textContent;
  if (categoriesName === `All categories`) {
    activeCategory.classList.remove('inactive-all-categories');
    activeCategory.classList.add('active-all-categories');
    textTitle.innerHTML = `Best Sellers`;
    const textSpan = ` Books`;
    let span = document.createElement('span');
    span.classList.add(`Books-best-sellers-text-span`);
    span.textContent = textSpan;
    textTitle.appendChild(span);
    getTopBooks()
      .then(data => {
        // const listTopBooks = data;

        const listTopBooks = data.map(({ books, list_name } = listTopBooks) => {
          books.map(
            ({
              _id,
              title,
              book_image,
              author,
              description,
              // amazon_product_url,
              // buy_links,
            }) => {
              listCategory.innerHTML = `<li id="${_id}" class="bs-book-item">
      <img class="bs-book-image" src="${book_image}" alt="${title}" />
      <p class="title-book">${title}</p>
      <p class="author-book">${author}</p>
    </li>`;
            }
          );
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  } else {
    activeCategory.classList.remove('active-all-categories');
    activeCategory.classList.add('inactive-all-categories');
    const nameTitle = categoriesName.split(` `);
    const changeNameTitle = nameTitle.slice(0, -1);

    const spanName = categoriesName.split(' ').pop();

    textTitle.innerHTML = changeNameTitle.join(` `);
    let span = document.createElement('span');
    span.classList.add(`Books-best-sellers-text-span`);
    span.textContent = ` ${spanName}`;
    textTitle.appendChild(span);
  }

  if (categoriesName) {
    getCategory(categoriesName)
      .then(data => {
        const listItem = data
          .map(
            ({
              book_image,
              title,
              author,
              _id,
            } = listItem) => `<li id="${_id}" class="bs-book-item">
      <img class="bs-book-image" src="${book_image}" alt="${title}" />
      <p class="title-book">${title}</p>
      <p class="author-book">${author}</p>
    </li>`
          )
          .join(``);
        console.dir(data);
        listCategory.innerHTML = listItem;
      })
      .catch(err => console.log(err));
  }
}
// const categoryTitle = document.createElement('h3');
// categoryTitle.textContent = `${category.list_name}`.toUpperCase();
// console.log(category);
// // add class
// categoryTitle.className = 'bs-h3';
// const booksList = document.createElement('ul');
// // add class
// booksList.className = 'bs-book-list';
// category.forEach(book => {
// const bookItem = document.createElement('li');
// add class
// bookItem.className = 'bs-book-item';
// const bookInfo = {
//   id: book._id,
//   title: book.title,
//   author: book.author,
//   image: book.book_image,
//   description: book.description,
//   buy_links: book.buy_links[1],
// };
// update code with add class
// listCategory.innerHTML = `<li id="${book._id}" class="bs-book-item">
//   <img class="bs-book-image" src="${book.book_image}" alt="${book.title}" />
//   <p class="title-book">${book.title}</p>
//   <p class="author-book">${book.author}</p>
// </li>`;
// booksList.appendChild(bookItem);
// bookItem.addEventListener('click', () => {
//   openModal(bookInfo.id);
// });
// });
// categoryListContainer.appendChild(categoryTitle);
// categoryListContainer.appendChild(booksList);
// const seeMoreButton = document.createElement('button');
// seeMoreButton.type = 'button';
// // add class
// seeMoreButton.classList.add('bs-buttom');
// // update code with add class
// // seeMoreButton.textContent = 'See More';
// const seeMoreText = document.createElement('span');
// seeMoreText.textContent = 'See More';
// seeMoreText.classList.add('bs-buttom-name');
// seeMoreButton.appendChild(seeMoreText);
// categoryListContainer.appendChild(seeMoreButton);
// seeMoreButton.addEventListener('click', e => {
//   console.log(e);
// });
