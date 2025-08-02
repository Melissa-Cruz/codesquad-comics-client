import React, { useEffect, useState } from "react";
import booksData from "../data/books";

function Admin() {
  const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
  const [books, setBooks] = useState([]);
  {
    /* // Create a useEffect function  */
  }

  // const url ="https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    // fetch(`${url}`)
    fetch(`${API_BASE_URL}/api/books`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooks(result.data.books);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUrl =
    "https://course-project-codesquad-comics-server.onrender.com/api/books/delete/";
  // "https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}";
  const handleDeleteBook = (bookId) => {
    // console.log(JSON.str)

    console.log(`${deleteUrl}${bookId}`);
    fetch(`${deleteUrl}${bookId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="div-white-container">
        <h1>ADMIN PAGE</h1>
        <div className="div-button-container">
          <button className="button-space-formatting">ADD NEW COMIC</button>
        </div>

        <div className="admin-table-container">
          <table className="comic-table-formatting">
            <thead>
              <tr>
                <th>COMIC TITLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
    
                  <td>
                    <button><a href="./Update">EDIT</a></button>
                  </td>
                  {/* do the format beloow */}
                  <td>
                    <button onClick={() => handleDeleteBook(book._id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}

              </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Admin;
