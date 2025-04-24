import React, { useEffect, useState } from "react";
import booksData from "../data/books";

function Admin() {
  const [books, setBooks] = useState([]);
  {
    /* // Create a useEffect function  */
  }

  const url =
    "https://course-project-codesquad-comics-server.onrender.com/api/books";

  useEffect(() => {
    fetch(`${url}`)
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

              {/* <tr>
                                    <td>Batman: The Dark Knight Returns</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Black Panther: A Nation Under Our Feet Book I</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Fun Home: A Family Tragicomic</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Hunter X Hunter Vol. I</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Lumberjanes Vol. I</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>March: Book One</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>One Piece, Vol. I: Romance Dawn</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Parable of the Sower</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Queer: A Graphic History</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>The Walking Dead, Vol.1: Days</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                                <tr>
                                    <td>Watchmen</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Admin;
