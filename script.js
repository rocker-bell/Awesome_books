const library = document.querySelector('#library');

//add books
const addBooks = document.forms['addBook'];

let bookLib = [];

addBooks.addEventListener('submit', function(e){
  e.preventDefault();
  const book = addBooks.querySelector('input[id="bookTitle"]').value;
  const author = addBooks.querySelector('input[id="authorName"]').value;
  
  bookLib.push({
   bookName: book,
   bookAuthor: author,
  });
  
  localStorage.setItem("books", JSON.stringify(bookLib));
 
  //create elements
  const list = document.createElement('li');
  const bookName = document.createElement('span');
  const authorName = document.createElement('span');
  const deleteButton = document.createElement('button');

  // add text
  bookName.textContent = book;
  authorName.textContent = author;
  deleteButton.textContent = 'Remove';

  //remove books

  library.addEventListener('click', function(e){
    if(e.target.className === 'delete') {
      const book = e.target.parentElement;
      library.removeChild(book);
    };
  });

  //add class
  bookName.classList.add('bookTitle');
  authorName.classList.add('authorName');
  deleteButton.classList.add('delete');

  //add to elements
  list.appendChild(bookName);
  list.appendChild(authorName);
  list.appendChild(deleteButton);
  library.appendChild(list);
  library.style.listStyleType = 'none';
});


