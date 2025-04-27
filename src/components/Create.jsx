import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  // Build an arrow function to handle the create form submissions. There will be one parameter of "event" (or "e" for short).
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/api/books/create";

    console.log("this handleFormSubmission ran");
    const body = {

      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      length: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value
    };

    // Print the values of each input element, one at a time, to the console, so that we can confirm the values we are submitting are indeed recorded in the form.
    // console.log()

    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);

    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/admin")

    
    })
      .catch((error) => {
        console.log(error);
        [errorMessage, setErrorMessage] = useState("");
        console.log(error.message);
      });
  };

  return (
    <main>
      <div className="div-white-container">
        <h1>CREATE NEW COMIC</h1>
        <div className="div-form-container-center">
          <form onSubmit={handleFormSubmission}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="author">Author:</label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="publisher">Publisher:</label>
              <select name="publisher" id="publisher" required>
                <option value="" disabled selected>
                  Select
                </option>
                <option value="boom!_box">BOOM! Box</option>
                <option value="dc_comics">DC Comics</option>
                <option value="harry_n_abrams">Harry N. Abrams</option>
                <option value="icon_books">Icon Books</option>
                <option value="image_comics">Image Comics</option>
                <option value="marvel">Marvel</option>
                <option value="simon_and_schuster">Simon & Schuster</option>
                <option value="marvel">Marvel</option>
                <option value="top_shelf_productions">
                  Top Shelf Productions
                </option>
                <option value="viz_media_llc">Viz Media LLC</option>
              </select>
            </div>
            <br />

            <div>
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                name="genre"
                id="genre"
                placeholder="Genre"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="pages">Number of pages:</label>
              <input
                type="number"
                name="pages"
                id="pages"
                placeholder="Number of Pages"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="number (0-5)"
                required
              />
            </div>
            <br />

            <div className="synopsis-input-formatting">
              <label htmlFor="synopsis">Synopsis:</label>
              <textarea
                type="textarea"
                name="synopsis"
                id="synopsis"
                placeholder="Synopsis"
                required
              ></textarea>
            </div>

            <div className="div-white-container-form-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Create;
