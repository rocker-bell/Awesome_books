// const express = require("express")
// const path  = require("path");
// const cors = require("cors");
// const fs = require("fs");
// const {UUID} = require("UUOD, V4")
// const { json } = require("stream/consumers");


// const app = express();
// app.use(cors())

// const BookLibrary_json_path = path(__dirname, path.join("./Library.json"))

// function ReadBookLibrary_json_path () {
//     if(!fs.existsSync(Library_json_path)) {
//         fs.readFileSync(JSON.stringify(Library_json_path, []), encoding:{"utf-8"})
//     }
// }


// app.use(express.static(__dirname, path.join("../front_end/dist")))


// function WriteBookLibrary_json_path () {
//     const book = BookLibrary_json_path.foreach(book => {
//         book = {
//             id : UUID,
//             Title : book.title,
//             autor : book.author,
//             descirption : book.description,
//             publish_date : book.publish_date,
//             publish_country : book.publish_country,
//             price : BookLibrary_json_path.price || null
//         }
//     })

//     fs.writeFileSync
// }


// app.post()


// app.get()


// const PORT = 8100;

// app.listen(PORT, () => {
//     console.log(`server live at http://localhost:${PORT}`)
// })










// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const fs = require("fs");
// const { v4: uuidv4 } = require("uuid"); // Correct import for UUID
// const app = express();

// app.use(cors());
// app.use(express.json()); // Add this to parse JSON requests

// const BookLibrary_json_path = path.join(__dirname, "./Library.json");

// // Read the book library from the JSON file
// function ReadBookLibrary() {
//   if (!fs.existsSync(BookLibrary_json_path)) {
//     fs.writeFileSync(BookLibrary_json_path, JSON.stringify([]), "utf-8");
//     return [];
//   }
//   const data = fs.readFileSync(BookLibrary_json_path, "utf-8");
//   return JSON.parse(data);
// }

// const CurrentDate = new Date()

// // Write the book library to the JSON file
// function WriteBookLibrary(books) {
//   const formattedBooks = books.map((book) => ({
//     id: book.id || uuidv4(),
//     title: book.title,
//     author: book.author,
//     description: book.description,
//     publish_date: book.publish_date,
//     publish_country: book.publish_country,
//     price: book.price || null,
//     createdAt : CurrentDate.toLocaleString()
//   }));
//   fs.writeFileSync(BookLibrary_json_path, JSON.stringify(formattedBooks, null, 2), "utf-8");
// }

// // Serve static files from the frontend
// app.use(express.static(path.join(__dirname, "../front_end/dist")));

// // API endpoint to get all books
// app.get("/api/books", (req, res) => {
//   const books = ReadBookLibrary();
//   res.json(books);
// });

// // API endpoint to add a new book
// app.post("/api/books", (req, res) => {
//   const books = ReadBookLibrary();
//   const newBook = {
//     id: uuidv4(),
//     title: req.body.title  || null,
//     author: req.body.author  || null,
//     description: req.body.description  || null,
//     publish_date: req.body.publish_date  || null,
//     publish_country: req.body.publish_country  || null,
//     price: req.body.price || null,
//     createdAt : CurrentDate.toISOString()  || null
//   };
//   books.push(newBook);
//   WriteBookLibrary(books);
//   res.status(201).json(newBook);
// });

// const PORT = 8100;
// app.listen(PORT, () => {
//   console.log(`Server live at http://localhost:${PORT}`);
// });


const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(cors());
app.use(express.json()); // Add this to parse JSON requests

const BookLibrary_json_path = path.join(__dirname, "./Library.json");

const CurrentDate = new Date();

// Read the book library from the JSON file
function ReadBookLibrary() {
  if (!fs.existsSync(BookLibrary_json_path)) {
    fs.writeFileSync(BookLibrary_json_path, JSON.stringify([]), "utf-8");
    return [];
  }
  const data = fs.readFileSync(BookLibrary_json_path, "utf-8");
  return JSON.parse(data);
}

// Write the book library to the JSON file
function WriteBookLibrary(books) {
  const formattedBooks = books.map((book) => ({
    id: book.id || uuidv4(),
    title: book.title || null,
    author: book.author || null,
    description: book.description || null,
    publish_date: book.publish_date || null,
    publish_country: book.publish_country || null,
    price: book.price || null,
    createdAt: CurrentDate.toISOString(),
  }));
  fs.writeFileSync(BookLibrary_json_path, JSON.stringify(formattedBooks, null, 2), "utf-8");
}

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "../front_end/dist")));

// API endpoint to get all books
app.get("/api/books", (req, res) => {
  const books = ReadBookLibrary();
  res.json(books);
});

// API endpoint to add a new book
app.post("/api/books", (req, res) => {
  const books = ReadBookLibrary();
  const newBook = {
    id: uuidv4(),
    title: req.body.title || null,
    author: req.body.author || null,
    description: req.body.description || null,
    publish_date: req.body.publish_date || null,
    publish_country: req.body.publish_country || null,
    price: req.body.price || null,
    createdAt: CurrentDate.toISOString(),
  };
  books.push(newBook);
  WriteBookLibrary(books);
  res.status(201).json(newBook);
});

const PORT = 8100;
app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
});
