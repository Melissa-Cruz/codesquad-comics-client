import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Update(){
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [books,setBooks] = useState([]);

    useEffect(() => {

        const url = "https://course-project-codesquad-comics-server.onrender.com/api/books"

        fetch( `${url}/${bookId}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setBooks(result.data.books)
            })
            .catch((error) => console.log(error))
    });

    const handleUpdateFormSubmit = (e) => {
        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            length: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value 


        }

        const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/edit"

        fetch(`${url}/${bookId}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body),


        })
            .then((response) => console.log(response))
            .then((result) => {
                console.log(result);
                setBooks(result.data.books);
                navigate("/admin");

            })
            .catch((error) => console.log(error));

    }


    return (          
        <main>
            <div className="div-white-container">
                <h1>UPDATE COMIC</h1>

                <div className="div-update-form-container-center">
                    <form onSubmit={handleUpdateFormSubmit}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" value="title value stored in the database"/>
                        </div> 
                        <br/>

                        <div>
                            <label htmlFor="author">Author:</label>
                            <input type="text" name="author" id="author" value="author value stored in the database"/>
                        </div> 
                            <br/>

                        <div>
                            <label htmlFor="publisher">Publisher:</label>
                            <select name="publisher" id="publisher" >
                                <option value="" disabled selected>publisher value stored in the database</option>
                                <option value="boom!_box">BOOM! Box</option>
                                <option value="dc_comics">DC Comics</option>
                                <option value="harry_n_abrams">Harry N. Abrams</option>
                                <option value="icon_books">Icon Books</option>
                                <option value="image_comics">Image Comics</option>
                                <option value="marvel">Marvel</option>
                                <option value="simon_and_schuster">Simon & Schuster</option>
                                <option value="marvel">Marvel</option>
                                <option value="top_shelf_productions">Top Shelf Productions</option>
                                <option value="viz_media_llc">Viz Media LLC</option>
                            </select>    
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="genre">Genre:</label>
                            <input type="text" name="genre" id="genre" value="genre data stored in the database"/>
                        </div> 
                        <br/>
                        <div>
                            <label htmlFor="pages">Number of pages:</label>
                            <input type="number" name="pages" id="pages" value="255"/>
                        </div> 
                        <br/>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <input type="number" name="rating" id="rating" value="5"/>
                        </div> 
                        <br/>
                        <div>
                            <label htmlFor="synopsis">Synopsis:</label>
                            <textarea type="textarea" name="synopsis" id="synopsis" placeholder="Synopsis">synopsis value stored in the database</textarea>
                        </div> 
                        <div classNameName="div-white-container-form-button">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>    
        </main>
    )
};

export default Update;