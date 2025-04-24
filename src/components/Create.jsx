function Create() {
  // Build an arrow function to handle the create form submissions. There will be one parameter of "event" (or "e" for short).

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");

    const url =
      "https://course-project-codesquad-comics-server.onrender.com/api/books/create";

    console.log("this handleFormSubmission ran");
    const body = {
      title: e.target.comic_title.value,
      author: e.target.comic_author.value,
      publisher: e.target.comic_publisher.value,
      genre: e.target.comic_genre.value,
      length: e.target.comic_length.value,
      rating: e.target.comic_rating.value,
      synopsis: e.target.comic_synopsis.value,
    };

    // Print the values of each input element, one at a time, to the console, so that we can confirm the values we are submitting are indeed recorded in the form.
    // console.log()

    console.log(e.target.comic_title.value);
    console.log(e.target.comic_author.value);
    console.log(e.target.comic_publisher.value);
    console.log(e.target.comic_genre.value);
    console.log(e.target.comic_length.value);
    console.log(e.target.comic_rating.value);
    console.log(e.target.comic_synopsis.value);

    fetch(
      `${url}`,
      { method: "POST", body: JSON.stringify(body) }
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.message);
        })

    );
    console.log(error.message);
  };
  c

  return (
    <main>
      <div className="div-white-container">
        <h1>CREATE NEW COMIC</h1>
        <div className="div-form-container-center">
          <form onSubmit={handleFormSubmission}>
            <div>
              <label htmlFor="comic_title">Title:</label>
              <input
                type="text"
                name="comic_title"
                id="comic_title"
                placeholder="Title"
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="comic_author">Author:</label>
              <input
                type="text"
                name="comic_author"
                id="comic_author"
                placeholder="Author"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="comic_publisher">Publisher:</label>
              <select name="comic_publisher" id="comic_publisher" required>
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
              <label htmlFor="comic_genre">Genre:</label>
              <input
                type="text"
                name="comic_genre"
                id="comic_genre"
                placeholder="Genre"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="comic_length">Number of pages:</label>
              <input
                type="number"
                name="comic_length"
                id="comic_length"
                placeholder="Number of Pages"
                required
              />
            </div>
            <br />

            <div>
              <label htmlFor="comic_rating">Rating:</label>
              <input
                type="number"
                name="comic_rating"
                id="comic_rating"
                placeholder="number (0-5)"
                required
              />
            </div>
            <br />

            <div className="synopsis-input-formatting">
              <label htmlFor="comic_synopsis">Synopsis:</label>
              <textarea
                type="textarea"
                name="comic_synopsis"
                id="comic_synopsis"
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
