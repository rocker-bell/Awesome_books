//create a class
class BookList {
  constructor(Books) {
    this.bookListCollection = Books;
  }

  addBook(Book) {
    this.bookListCollection.push(Book);
    const TitleP = document.createElement('p');
    const AuthorP = document.createElement('p');
    const RButton = document.createElement('button');
    RButton.addEventListener('click', () => { this.RemoveBook(Book.id); });
    RButton.innerHTML = 'Remove';
    RButton.setAttribute('id', Book.id);
    RButton.setAttribute('class', 'rmv-btn');
    const BookContainer = document.createElement('div');
    BookContainer.setAttribute('id', Book.id);
    TitleP.innerHTML = `Title:   ${Book.title}`;
    AuthorP.innerHTML = `Author:   ${Book.author}`;
    document.getElementById('list_container').appendChild(BookContainer).appendChild(TitleP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(AuthorP);
    document.getElementById('list_container').appendChild(BookContainer).appendChild(RButton);
  }

  RemoveBook(BookId) {
    const BookContainer = document.getElementById(BookId);
    BookContainer.parentNode.removeChild(BookContainer);
    const BooksNew = [];

    for (const i in this.bookListCollection) {
      if (this.bookListCollection[i].id !== BookId) {
        BooksNew.push(this.bookListCollection[i]);
      }
    }

    this.bookListCollection = BooksNew;
    localStorage.clear();
    const BookList = JSON.stringify(BooksNew);
  
    localStorage.setItem('library', BookList);
  }

  AddToStorage() {
    localStorage.setItem('library', JSON.stringify(this.bookListCollection));
  }

  ShowBooks() {
    for (const i in this.bookListCollection) {
      this.addBook(this.bookListCollection[i])
    }
  }
}

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}



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

