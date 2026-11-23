const books = [];
const form = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const list = document.querySelector('#book-list');

function render() {
  list.replaceChildren(...books.map(book => {
    const item = document.createElement('li');
    item.textContent = book.author ? `${book.title} — ${book.author}` : book.title;
    return item;
  }));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = title.value.trim();
  if (!name) { title.focus(); return; }
  books.push({ title: name, author: author.value.trim() });
  render();
  form.reset();
  title.focus();
});
