/* eslint max-classes-per-file: ["error", 2] */
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// Class with list of books
class BookList {
  constructor(Books) {
    this.bookListCollection = Books;
  }

  // Add book list to the top of the page
  addBook(Book) {
    this.bookListCollection.push(Book);
    const Details = document.createElement('div');
    const RButton = document.createElement('button');
    RButton.addEventListener('click', () => { this.RemoveBook(Book.id); });
    RButton.innerHTML = 'Remove';
    RButton.setAttribute('id', Book.id);
    RButton.setAttribute('class', 'rmv-btn');
    const BookContainer = document.createElement('div');
    BookContainer.className = 'book';
    BookContainer.setAttribute('id', Book.id);
    Details.innerHTML = `&nbsp;&nbsp;&nbsp;"${Book.title}"&nbsp;by&nbsp;&nbsp;${Book.author}`;
    document.getElementById('list_container').appendChild(BookContainer).appendChild(Details);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(RButton);
  }

  // Remove books from the page when the button is clicked
  RemoveBook(BookId) {
    const BookContainer = document.getElementById(BookId);
    BookContainer.parentNode.removeChild(BookContainer);
    const BooksNew = [];

    /* eslint-disable */
    for (const i in this.bookListCollection) {
      if (this.bookListCollection[i].id !== BookId) {
        BooksNew.push(this.bookListCollection[i]);
      }
    }

    /* eslint-enable */
    this.bookListCollection = BooksNew;
    localStorage.clear();
    const BookList = JSON.stringify(BooksNew);

    // eslint-disable-next-line no-unused-vars
    localStorage.setItem('library', BookList);
  }

  // Adds books to local storage
  AddToStorage() {
    localStorage.setItem('library', JSON.stringify(this.bookListCollection));
  }

  /* eslint-disable */
  // Displays books
  ShowBooks() {
    for(const i in this.bookListCollection) {
      this.addBook(this.bookListCollection[i]);
    }
  }
}


/* eslint-enable */
// Retrieves books from library
const NewBookCollection = new BookList(JSON.parse(localStorage.getItem('library')) || []);
NewBookCollection.ShowBooks();

function AddNewbook() {
  const title = document.getElementById('Title');
  const author = document.getElementById('Author');
  const IdBook = Math.floor(Math.random() * 1000);
  const NewBook = new Book(title.value, author.value, IdBook);
  title.value = '';
  author.value = '';
  NewBookCollection.addBook(NewBook);
  NewBookCollection.AddToStorage();
}

AddNewbook();