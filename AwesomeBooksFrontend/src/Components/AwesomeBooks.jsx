// import React, { useState, useEffect } from "react";
// import "../Styles/Structure.css";
// import { DateTime } from "luxon";

// export default function AwesomeBooks() {
//   const [view, setView] = useState("welcome");
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");

//   // Update date/time every second using Luxon
//   useEffect(() => {
//     const updateTime = () => {
//       const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
//       setDate(now);
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//   const savedBooks = JSON.parse(localStorage.getItem("AwesomeBooksLibrary")) || [];
//   setBooks(savedBooks);
// }, []);


// useEffect(() => {
//   localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(books));
// }, [books]);



//   // Add book
//   const addNewBook = () => {
//     if (!title.trim() || !author.trim()) return;
//     const newBook = { id: Date.now(), title, author };
//     setBooks([...books, newBook]);
//     localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(updatedBooks)); // ✅
//     setTitle("");
//     setAuthor("");
     

//   };

//   // Remove book
//   // const removeBook = (id) => {
//   //   setBooks(books.filter((book) => book.id !== id));
    
//   // };


//   const removeBook = (id) => {
//   const updatedBooks = books.filter((book) => book.id !== id);
//   setBooks(updatedBooks);
//   localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(updatedBooks)); // ✅
// };

//   return (
//     <div className="landing_page_wrapper">
//       <nav className="nav-bar">
//         <h3 className="logo">
//           <button className="link-btn" onClick={() => setView("welcome")}>
//             Awesome Books
//           </button>
//         </h3>

//         <ul className="nav-items">
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("list")}>List</button>
//           </li>
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("add")}>Add new</button>
//           </li>
//           <li>
//             <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
//           </li>
//         </ul>
//       </nav>

//       <div id="date">{date}</div>

//       <main>
//         {view === "welcome" && (
//           <section id="welcome">
//             <h1>Welcome to Awesome Books</h1>
//             <p>
//               An app that enables you to add and remove e-books to your own local library for free.
//               <br />
//               Happy Reading!
//             </p>
//           </section>
//         )}

//         {/* {view === "list" && (
//           <>
//             <h1 className="heading">All Awesome Books</h1>
//             <section className="library" id="lib">
//               <div id="list_container" className="list-container">
//                 {books.length === 0 ? (
//                   <p>No books added yet.</p>
//                 ) : (
//                   books.map((book) => (
//                     <div key={book.id} className="book-item">
//                       <p>
//                         <strong>{book.title}</strong> by {book.author}
//                       </p>
//                       <button className="btn remove-btn" onClick={() => removeBook(book.id)}>
//                         Remove
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           </>
//         )} */}


//         {view === "list" && (
//   <>
//     <h1 className="heading">All Awesome Books</h1>
//     <section className="library" id="lib">
//       <div id="list_container" className="list-container">
//         {books.length === 0 ? (
//           <p>No books added yet.</p>
//         ) : (
//           books.map((book) => (
//             <div key={book.id} className="book-item">
//               <p>
//                 <strong>{book.title}</strong> by {book.author}
//               </p>
//               <button
//                 className="btn remove-btn"
//                 onClick={() => removeBook(book.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   </>
// )}


//         {view === "add" && (
//           <section className="form" id="AddNewbook_container">
//             <h1>Add a new book</h1>
//             <input
//               type="text"
//               className="input"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//             <button className="btn add-btn" onClick={addNewBook}>
//               Add
//             </button>
//           </section>
//         )}

//         {view === "contact" && (
//           <section className="contact" id="contact">
//             <h1>Contact information</h1>
//             <p>
//               Do you have any questions or just want to say "Hello"?<br />
//               You can reach out to us on:
//             </p>
//             <ul className="contact-list">
//               <li>Our email: rockerbell@microverse.com</li>
//               <li>Our phone number: phone number here</li>
//               <li>Our address: country address</li>
//             </ul>
//           </section>
//         )}
//       </main>

//       <footer className="foot">
//         <p>Copyright...</p>
//       </footer>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import "../Styles/Structure.css";
// import { DateTime } from "luxon";

// export default function AwesomeBooks() {
//   const [view, setView] = useState("welcome");
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");

//   // Update date/time every second using Luxon
//   useEffect(() => {
//     const updateTime = () => {
//       const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
//       setDate(now);
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Load saved books from localStorage on mount
//   useEffect(() => {
//     const savedBooks = JSON.parse(localStorage.getItem("AwesomeBooksLibrary")) || [];
//     setBooks(savedBooks);
//   }, []);

//   // Save books to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(books));
//   }, [books]);

//   // Add new book
//   const addNewBook = () => {
//     if (!title.trim() || !author.trim()) return;
//     const newBook = { id: Date.now(), title, author };
//     const updatedBooks = [...books, newBook];
//     setBooks(updatedBooks);
//     localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(updatedBooks)); // ✅ fixed
//     setTitle("");
//     setAuthor("");
//   };

//   // Remove book
//   const removeBook = (id) => {
//     const updatedBooks = books.filter((book) => book.id !== id);
//     setBooks(updatedBooks);
//     localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(updatedBooks));
//   };

//   return (
//     <div className="landing_page_wrapper">
//       <nav className="nav-bar">
//         <h3 className="logo">
//           <button className="link-btn" onClick={() => setView("welcome")}>
//             Awesome Books
//           </button>
//         </h3>

//         <ul className="nav-items">
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("list")}>List</button>
//           </li>
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("add")}>Add new</button>
//           </li>
//           <li>
//             <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
//           </li>
//         </ul>
//       </nav>

//       <div id="date">{date}</div>

//       <main>
//         {view === "welcome" && (
//           <section id="welcome">
//             <h1>Welcome to Awesome Books</h1>
//             <p>
//               An app that enables you to add and remove e-books to your own local library for free.
//               <br />
//               Happy Reading!
//             </p>
//           </section>
//         )}

//         {view === "list" && (
//           <>
//             <h1 className="heading">All Awesome Books</h1>
//             <section className="library" id="lib">
//               <div id="list_container" className="list-container">
//                 {books.length === 0 ? (
//                   <p>No books added yet.</p>
//                 ) : (
//                   books.map((book) => (
//                     <div key={book.id} className="book-item">
//                       <p>
//                         <strong>{book.title}</strong> by {book.author}
//                       </p>
//                       <button
//                         className="btn remove-btn"
//                         onClick={() => removeBook(book.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           </>
//         )}

//         {view === "add" && (
//           <section className="form" id="AddNewbook_container">
//             <h1>Add a new book</h1>
//             <input
//               type="text"
//               className="input"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//             <button className="btn add-btn" onClick={addNewBook}>
//               Add
//             </button>
//           </section>
//         )}

//         {view === "contact" && (
//           <section className="contact" id="contact">
//             <h1>Contact information</h1>
//             <p>
//               Do you have any questions or just want to say "Hello"?<br />
//               You can reach out to us on:
//             </p>
//             <ul className="contact-list">
//               <li>Our email: rockerbell@microverse.com</li>
//               <li>Our phone number: phone number here</li>
//               <li>Our address: country address</li>
//             </ul>
//           </section>
//         )}
//       </main>

//       <footer className="foot">
//         <p>Copyright...</p>
//       </footer>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import "../Styles/Structure.css";
// import { DateTime } from "luxon";

// export default function AwesomeBooks() {
//   const [view, setView] = useState("welcome");
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");

//   // Update date/time every second using Luxon
//   useEffect(() => {
//     const updateTime = () => {
//       const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
//       setDate(now);
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

  
//   // useEffect(() => {
//   //   const savedBooks = JSON.parse(localStorage.getItem("AwesomeBooksLibrary")) || [];
//   //   setBooks(savedBooks);
//   // }, []);

  
//   // useEffect(() => {
//   //   localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(books));
//   // }, [books]);

 
//   // const addNewBook = () => {
//   //   if (!title.trim() || !author.trim()) return;
//   //   const newBook = { id: Date.now(), title, author };
//   //   setBooks(prevBooks => [...prevBooks, newBook]); // Functional update ensures latest state
//   //   setTitle("");
//   //   setAuthor("");
//   //   setView("list"); // Optional: switch to list after adding
//   // };

  
//   // const removeBook = (id) => {
//   //   setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
//   // };


//   // Add new book
// const addNewBook = () => {
//   if (!title.trim() || !author.trim()) return;

//   const newBook = { id: Date.now(), title, author };

//   // Use functional update to ensure we get latest state
//   setBooks(prevBooks => [...prevBooks, newBook]);

//   setTitle("");
//   setAuthor("");

//   setView("list"); // optional: switch to list view
// };

// // Remove book
// const removeBook = (id) => {
//   setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
// };

// // Persist books to localStorage whenever they change
// useEffect(() => {
//   localStorage.setItem("AwesomeBooksLibrary", JSON.stringify(books));
// }, [books]);

// // Load books from localStorage once on mount
// useEffect(() => {
//   const savedBooks = JSON.parse(localStorage.getItem("AwesomeBooksLibrary")) || [];
//   setBooks(savedBooks);
// }, []);

// useEffect(() => {
//   console.log("Current localStorage:", localStorage.getItem("AwesomeBooksLibrary"));
// }, [books]);

//   return (
//     <div className="landing_page_wrapper">
//       <nav className="nav-bar">
//         <h3 className="logo">
//           <button className="link-btn" onClick={() => setView("welcome")}>
//             Awesome Books
//           </button>
//         </h3>

//         <ul className="nav-items">
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("list")}>List</button>
//           </li>
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("add")}>Add new</button>
//           </li>
//           <li>
//             <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
//           </li>
//         </ul>
//       </nav>

//       <div id="date">{date}</div>

//       <main>
//         {view === "welcome" && (
//           <section id="welcome">
//             <h1>Welcome to Awesome Books</h1>
//             <p>
//               An app that enables you to add and remove e-books to your own local library for free.
//               <br />
//               Happy Reading!
//             </p>
//           </section>
//         )}

//         {view === "list" && (
//           <>
//             <h1 className="heading">All Awesome Books</h1>
//             <section className="library" id="lib">
//               <div id="list_container" className="list-container">
//                 {books.length === 0 ? (
//                   <p>No books added yet.</p>
//                 ) : (
//                   books.map((book) => (
//                     <div key={book.id} className="book-item">
//                       <p>
//                         <strong>{book.title}</strong> by {book.author}
//                       </p>
//                       <button
//                         className="btn remove-btn"
//                         onClick={() => removeBook(book.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           </>
//         )}

//         {view === "add" && (
//           <section className="form" id="AddNewbook_container">
//             <h1>Add a new book</h1>
//             <input
//               type="text"
//               className="input"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//             <button className="btn add-btn" onClick={addNewBook}>
//               Add
//             </button>
//           </section>
//         )}

//         {view === "contact" && (
//           <section className="contact" id="contact">
//             <h1>Contact information</h1>
//             <p>
//               Do you have any questions or just want to say "Hello"?<br />
//               You can reach out to us on:
//             </p>
//             <ul className="contact-list">
//               <li>Our email: rockerbell@microverse.com</li>
//               <li>Our phone number: phone number here</li>
//               <li>Our address: country address</li>
//             </ul>
//           </section>
//         )}
//       </main>

//       <footer className="foot">
//         <p>Copyright...</p>
//       </footer>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import "../Styles/Structure.css";
// import { DateTime } from "luxon";
// import axios from "axios"; // we'll use axios for API requests

// export default function AwesomeBooks() {
//   const [view, setView] = useState("welcome");
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");

//   // Update date/time every second using Luxon
//   useEffect(() => {
//     const updateTime = () => {
//       const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
//       setDate(now);
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Load books from backend
//   const fetchBooks = async () => {
//     try {
//       const res = await axios.get("/api/books");
//       setBooks(res.data);
//     } catch (err) {
//       console.error("Failed to fetch books:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Add new book via backend
//   const addNewBook = async () => {
//     if (!title.trim() || !author.trim()) return;

//     const newBook = { title, author };

//     try {
//       const res = await axios.post("/api/books", newBook);
//       setBooks((prevBooks) => [...prevBooks, res.data]);
//       setTitle("");
//       setAuthor("");
//       setView("list");
//     } catch (err) {
//       console.error("Failed to add book:", err);
//     }
//   };

//   // Remove book (optional: add a DELETE endpoint on backend)
//   // For now, just remove locally
//   const removeBook = (id) => {
//     setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//     // If you want server-side removal, create a DELETE /api/books/:id endpoint
//   };

//   return (
//     <div className="landing_page_wrapper">
//       <nav className="nav-bar">
//         <h3 className="logo">
//           <button className="link-btn" onClick={() => setView("welcome")}>
//             Awesome Books
//           </button>
//         </h3>

//         <ul className="nav-items">
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("list")}>List</button>
//           </li>
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("add")}>Add new</button>
//           </li>
//           <li>
//             <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
//           </li>
//         </ul>
//       </nav>

//       <div id="date">{date}</div>

//       <main>
//         {view === "welcome" && (
//           <section id="welcome">
//             <h1>Welcome to Awesome Books</h1>
//             <p>
//               An app that enables you to add and remove e-books to your own library.
//               <br />
//               Happy Reading!
//             </p>
//           </section>
//         )}

//         {view === "list" && (
//           <>
//             <h1 className="heading">All Awesome Books</h1>
//             <section className="library" id="lib">
//               <div id="list_container" className="list-container">
//                 {books.length === 0 ? (
//                   <p>No books added yet.</p>
//                 ) : (
//                   books.map((book) => (
//                     <div key={book.id} className="book-item">
//                       <p>
//                         <strong>{book.title}</strong> by {book.author}
//                       </p>
//                       <button
//                         className="btn remove-btn"
//                         onClick={() => removeBook(book.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           </>
//         )}

//         {view === "add" && (
//           <section className="form" id="AddNewbook_container">
//             <h1>Add a new book</h1>
//             <input
//               type="text"
//               className="input"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//             <button className="btn add-btn" onClick={addNewBook}>
//               Add
//             </button>
//           </section>
//         )}

//         {view === "contact" && (
//           <section className="contact" id="contact">
//             <h1>Contact information</h1>
//             <p>
//               Do you have any questions or just want to say "Hello"?<br />
//               You can reach out to us on:
//             </p>
//             <ul className="contact-list">
//               <li>Our email: rockerbell@microverse.com</li>
//               <li>Our phone number: phone number here</li>
//               <li>Our address: country address</li>
//             </ul>
//           </section>
//         )}
//       </main>

//       <footer className="foot">
//         <p>Copyright...</p>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "../Styles/Structure.css";
import { DateTime } from "luxon";

export default function AwesomeBooks() {
  const [view, setView] = useState("welcome");
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  // Update date/time every second using Luxon
  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
      setDate(now);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load books from backend
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:8100/api/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Failed to fetch books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add new book via backend
  const addNewBook = async () => {
    if (!title.trim() || !author.trim()) return;

    const newBook = { title, author };

    try {
      const res = await fetch("http://localhost:8100/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
      const data = await res.json();
      setBooks((prevBooks) => [...prevBooks, data]);
      setTitle("");
      setAuthor("");
      setView("list");
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  // Remove book locally (optional: add DELETE API to persist removal)
  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    // To persist deletion, create DELETE /api/books/:id on the backend
  };

  return (
    <div className="landing_page_wrapper">
      <nav className="nav-bar">
        <h3 className="logo">
          <button className="link-btn" onClick={() => setView("welcome")}>
            Awesome Books
          </button>
        </h3>

        <ul className="nav-items">
          <li className="item">
            <button className="link-btn" onClick={() => setView("list")}>List</button>
          </li>
          <li className="item">
            <button className="link-btn" onClick={() => setView("add")}>Add new</button>
          </li>
          <li>
            <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
          </li>
        </ul>
      </nav>

      <div id="date">{date}</div>

      <main>
        {view === "welcome" && (
          <section id="welcome">
            <h1>Welcome to Awesome Books</h1>
            <p>
              An app that enables you to add and remove e-books to your own library.
              <br />
              Happy Reading!
            </p>
          </section>
        )}

        {view === "list" && (
          <>
            <h1 className="heading">All Awesome Books</h1>
            <section className="library" id="lib">
              <div id="list_container" className="list-container">
                {books.length === 0 ? (
                  <p>No books added yet.</p>
                ) : (
                  books.map((book) => (
                    <div key={book.id} className="book-item">
                      <p>
                        <strong>{book.title}</strong> by {book.author}
                      </p>
                      <button
                        className="btn remove-btn"
                        onClick={() => removeBook(book.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </section>
          </>
        )}

        {view === "add" && (
          <section className="form" id="AddNewbook_container">
            <h1>Add a new book</h1>
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="input"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button className="btn add-btn" onClick={addNewBook}>
              Add
            </button>
          </section>
        )}

        {view === "contact" && (
          <section className="contact" id="contact">
            <h1>Contact information</h1>
            <p>
              Do you have any questions or just want to say "Hello"?<br />
              You can reach out to us on:
            </p>
            <ul className="contact-list">
              <li>Our email: rockerbell@microverse.com</li>
              <li>Our phone number: phone number here</li>
              <li>Our address: country address</li>
            </ul>
          </section>
        )}
      </main>

      <footer className="foot">
        <p>Copyright...</p>
      </footer>
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import "../Styles/Structure.css";
// import { DateTime } from "luxon";

// type Book = {
//   id: string;
//   title: string;
//   author: string;
//   description?: string;
//   publish_date?: string;
//   publish_country?: string;
//   price?: number | null;
// };

// type View = "welcome" | "list" | "add" | "contact";

// export default function AwesomeBooks() {
//   const [view, setView] = useState<View>("welcome");
//   const [books, setBooks] = useState<Book[]>([]);
//   const [title, setTitle] = useState<string>("");
//   const [author, setAuthor] = useState<string>("");
//   const [date, setDate] = useState<string>("");

//   // Update date/time every second using Luxon
//   useEffect(() => {
//     const updateTime = () => {
//       const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
//       setDate(now);
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Load books from backend
//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("http://localhost:8100/api/books"); // backend port
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       const data: Book[] = await res.json();
//       setBooks(data);
//     } catch (err) {
//       console.error("Failed to fetch books:", err);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Add new book via backend
//   const addNewBook = async () => {
//     if (!title.trim() || !author.trim()) return;

//     const newBook = { title, author };

//     try {
//       const res = await fetch("http://localhost:8100/api/books", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newBook),
//       });

//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       const data: Book = await res.json();
//       setBooks((prevBooks) => [...prevBooks, data]);
//       setTitle("");
//       setAuthor("");
//       setView("list");
//     } catch (err) {
//       console.error("Failed to add book:", err);
//     }
//   };

//   // Remove book locally (optional: add DELETE API to persist removal)
//   const removeBook = (id: string) => {
//     setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//     // To persist deletion, implement DELETE /api/books/:id on backend
//   };

//   return (
//     <div className="landing_page_wrapper">
//       <nav className="nav-bar">
//         <h3 className="logo">
//           <button className="link-btn" onClick={() => setView("welcome")}>
//             Awesome Books
//           </button>
//         </h3>

//         <ul className="nav-items">
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("list")}>List</button>
//           </li>
//           <li className="item">
//             <button className="link-btn" onClick={() => setView("add")}>Add new</button>
//           </li>
//           <li>
//             <button className="link-btn" onClick={() => setView("contact")}>Contact</button>
//           </li>
//         </ul>
//       </nav>

//       <div id="date">{date}</div>

//       <main>
//         {view === "welcome" && (
//           <section id="welcome">
//             <h1>Welcome to Awesome Books</h1>
//             <p>
//               An app that enables you to add and remove e-books to your own library.
//               <br />
//               Happy Reading!
//             </p>
//           </section>
//         )}

//         {view === "list" && (
//           <>
//             <h1 className="heading">All Awesome Books</h1>
//             <section className="library" id="lib">
//               <div id="list_container" className="list-container">
//                 {books.length === 0 ? (
//                   <p>No books added yet.</p>
//                 ) : (
//                   books.map((book) => (
//                     <div key={book.id} className="book-item">
//                       <p>
//                         <strong>{book.title}</strong> by {book.author}
//                       </p>
//                       <button
//                         className="btn remove-btn"
//                         onClick={() => removeBook(book.id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </section>
//           </>
//         )}

//         {view === "add" && (
//           <section className="form" id="AddNewbook_container">
//             <h1>Add a new book</h1>
//             <input
//               type="text"
//               className="input"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <input
//               type="text"
//               className="input"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//             />
//             <button className="btn add-btn" onClick={addNewBook}>
//               Add
//             </button>
//           </section>
//         )}

//         {view === "contact" && (
//           <section className="contact" id="contact">
//             <h1>Contact information</h1>
//             <p>
//               Do you have any questions or just want to say "Hello"?<br />
//               You can reach out to us on:
//             </p>
//             <ul className="contact-list">
//               <li>Our email: rockerbell@microverse.com</li>
//               <li>Our phone number: phone number here</li>
//               <li>Our address: country address</li>
//             </ul>
//           </section>
//         )}
//       </main>

//       <footer className="foot">
//         <p>Copyright...</p>
//       </footer>
//     </div>
//   );
// }
