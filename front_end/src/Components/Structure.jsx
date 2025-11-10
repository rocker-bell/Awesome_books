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

  // Add book
  const addNewBook = () => {
    if (!title.trim() || !author.trim()) return;
    const newBook = { id: Date.now(), title, author };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  // Remove book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
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
              An app that enables you to add and remove e-books to your own local library for free.
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
                      <button className="btn remove-btn" onClick={() => removeBook(book.id)}>
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
