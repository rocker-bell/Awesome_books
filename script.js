// class Book {
//     constructor({Title, Author, BookId}) {
//         this.Title = Title;
//         this.Author = Author;
//         this.BookId = BookId;
//     }
// }

let Books = [];

function AddBook() {
    const Title = document.getElementById('title');
    const Author = document.getElementById('author');
    const PTitle = document.createElement('p');
    const PAuthor = document.createElement('p');
    PTitle.innerHTML = 'Title: ${Book.title}';
    PAuthor.innerHTML = 'Author: ${Book.author}';
    const RButton = document.createElement('button');
    RButton.setAttribute('id', 'Remove')
    PTitle.appendChild(Title.value);
    PAuthor.appendChild(Author.value);
    const BooksCollection = document.createElement('div');
    BooksCollection.appendChild(PTitle).appendChild(PAuthor).appendChild(RButton);
    Books.push(Book);
    console.log(BooksCollection)
}



