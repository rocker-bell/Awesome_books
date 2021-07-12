let Books = [];

function AddBook(Book) {
    
    const Title = document.getElementById('title');
    const Author = document.getElementById('author');
    const PTitle = document.createElement('p');
    const PAuthor = document.createElement('p');
    PTitle.appendChild(Title.value);
    PAuthor.appendChild(Author.value);
    const BooksCollection = document.createElement('div');
    BooksCollection.appendChild(PTitle).appendChild(PAuthor);
    Books.push(BooksCollection);
    


}

const Add = document.getElementById('add');
Add.addEventListener ('click', AddBook());