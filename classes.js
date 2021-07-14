class Book {
  constractor (Author, Title, Id) {
      this.Author = Author;
      this.Title = Title;
      this.id = id;
  }
}

class Librairy {
  constractor (Book) {
      this.BookLibrairy = Book;
  }

  AddBook(Book) {
      BookLibrairy.push(Book);

      const TitleP = document.createElement('p');
      const AuthorP =  document.createElement('p');
      const Bookcontainer = document.createElement('List_Container');

      const BookTitle = document.appendChild('Title').value;
      const AuthorName = document.appendChild('Author').value;
      const RmButton = document.createElement('button');

      TitleP.innerHTML = `Title:   ${Book.title}`;
      AuthorP.innerHTML = `Author:   ${Book.author}`;
      RmButton.innerHTML = 'Remove';

      RmButton.setAttribute('class', btn.id);
      RmButton.setAttribute('id', Book.id);
      Bookcontainer.setAttribute('id', Book.id);
      
      Bookcontainer.appendChild(BookTitle).appendChild(AuthorName);
      document.getElementById('addBook').appendChild(Bookcontainer);
      TitleP.innerHTML = `Title:   ${Book.title}`;
      AuthorP.innerHTML = `Author:   ${Book.author}`;
  }

  Remove(BookId) {
      const BookContainer = document.getElementById(BookId)
      NewBook = [];
      for ( const i in this.BookLibrairy) {
         if (this.BookLibrairy[i] !== BookId){
          NewBook.push(this.BookLibrairy[i])
         }
      }
  }

  ShowBook() {
      for (const i in this.BookLibrairy){
          this.AddBook(this.BookLibrairy[i])
      }
  }
}

function AddNewbook () {
  const Title = document.getElementById('bookTitle');
  const Author = document.getElementById('authorName');
  const BookId = Math.floor(Math.random() * 2000);
  const NewBook = new Book(Title.value, Author.value, BookId);
  Title.value = '';
  Author.value = '';
  BookLibrairy.AddBook(NewBook);
}
