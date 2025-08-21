import React, { useState, useEffect } from "react";
// import booksData from "../data/books";

function Home() {
  // Create a state using useState to hold data for "books".
  const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;

  //books belong to the Home component as a state
  const [books, setBooks] = useState([]);

  // const url =
    // "https://course-project-codesquad-comics-server.onrender.com/api/books";
  //useEffect gets the data outside of react
  useEffect(() => {
    // create a callback function that will send a GET method using fetch to
    fetch(`${API_BASE_URL}/api/books`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooks(result.data.books);
      })
      .catch((error) => console.log(error));
  }, []); // <- add empty brackets here ( run the useEffect only once in the beginning, this is the dependency array ( think about this as a trigger or control mechanism, the brackets is setting the condition of how this is run, empty brackets is an indicator to run once and then never again ))

  //In the callback section, use the setter function for books, and set it to booksData imported from the book.js file

  // does this needd to take an event input since it's reading data?
  // const handleBooksChange = () =>{
  //     setBooks(booksData);
  // }

  return (
    <main>
      <div className="div-white-container">
        <h1>CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Melissa.
          The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information about each graphic novel including the
          publisher, genre, number of pages, and a brief synopsis. The About
          page includes meta-information about this collection. Login is only
          available to the site administrator at this time.
        </p>
      </div>

      <div className="div-white-container">
        <h2>COMPLETE COMIC COLLECTION</h2>

        <div className="comic-book-collection-list">
          {books.map((book) => (
            <div key={book._id}>
              <figure>
                <div>
                  <a href="#" target="_self">
                    <img
                      className="comic-book-cover"
                      src={`./images/${book.imageUrl}`}
                      alt={book.title}
                    />
                  </a>
                </div>
                <div>
                  <figcaption className="multiline">
                    <div>
                      <cite>{book.title}</cite>
                    </div>
                    <div>by {book.author}</div>
                    <div>{book.rating} stars</div>
                    <div>
                      <a href="#" target="_self">
                        Details
                      </a>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </div>
          ))}

        </div>
        <button className="button-space-formatting">DISPLAY MORE</button>
      </div>
    </main>
  );
}

export default Home;
