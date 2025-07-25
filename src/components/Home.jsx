import React, { useState, useEffect } from "react";
import booksData from "../data/books";

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

          {/* <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/fun-home.jpg" alt="comic book cover for Fun Home has a picture of three young kids and a teen"/>
                                </a>
                                <figcaption className="multiline">
                                    <cite>Fun Home: A Family Tragicomic</cite>
                                    by Alison Bechdel
                                    5 stars
                                <a href="#" target="_self">Details</a>
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/watchmen.jpg" alt="comic book cover with a black oval and a squirt of pink goo with HBO logo on upper left, DC attribution in bottom left and the title Watchmen on the side"/></a>
                                <figcaption className="multiline"><cite>Watchmen</cite> 
                                by Alan Moore
                                5 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/hunter-x-hunter.jpg" alt="comic book cover of a child on top of a frog with the title Hunter repeating in the background"/></a>
                                <figcaption className="multiline"><cite>Hunter X Hunter Vol.I</cite> 
                                by Yoshihiro Togashi 
                                5 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/lumberjanes.jpg" alt="comic book cover of 5 ladies sitting in front of a wooden cabin"/></a>
                                <figcaption className="multiline"><cite>Lumberjanes Vol.I</cite> 
                                by Noelle Stevenson
                                5 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/one-piece.jpg" alt="comic book cover of three people on a ship with seagulls and having fun"/></a>
                                <figcaption className="multiline"><cite>One Piece, Vol.I: Romance Dawn</cite> 
                                by Eiichiro Oda
                                5 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/wake.jpg" alt="comic book cover of black people against a city background"/></a>
                                <figcaption className="multiline"><cite>Wake: The Hidd</cite> 
                                by Rebecca Hall
                                4 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/black-panther.jpg" alt="comic book cover black panther against dark city skyline"/></a>
                                <figcaption className="multiline"><cite>Black Panther: A Nation Under Our Feet Book I</cite> 
                                by Ta-Nehisi Coates
                                3 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/the-walking-dead.jpg" alt="comic book cover of zombies and a broken picture frame of a family"/></a>
                                <figcaption className="multiline"><cite>The Walking Dead, Vol.I: Days Gone Bye</cite> 
                                by Robert Kirkman
                                4 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/march.jpg" alt="comic book cover where the bottom half is of folks eating at a table and the top is a leg view of a busy sidewalk"/></a>
                                <figcaption className="multiline"><cite>March: Book One</cite> 
                                by John Lewis
                                5 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/batman.jpg" alt="comic book cover of Batman outline and lightning"/></a>
                                <figcaption className="multiline"><cite>Batman:The Dark Knight Returns</cite> 
                                by Frank Miller
                                3 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/queer.jpg" alt="comic book cover of person in suit with an umbrella"/></a>
                                <figcaption className="multiline"><cite>Queer: A Graphic History</cite> 
                                by Meg-John Barker
                                4 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <a href="#" target="_self"><img className="comic-book-cover" src="public/images/parable-of-the-sower.jpg" alt="comic book cover of black woman with gold hoops only half her face with mountains in the distance"/></a>
                                <figcaption className="multiline"><cite>Parable of the Sower</cite> 
                                by Octavia E. Butler
                                4 stars
                                </figcaption>
                                <a href="#" target="_self">Details</a>
                            </figure>
                        </div> */}
        </div>
        <button className="button-space-formatting">DISPLAY MORE</button>
      </div>
    </main>
  );
}

export default Home;
