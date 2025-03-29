function Create(){
    return (
        <div>
        Create
            <main>
                <div className="div-white-container">   
                    <h1>CREATE NEW COMIC</h1>
                    <div className="div-form-container-center">
                        <form>
                            <div>
                                <label htmlFor="comic_title">Title:</label>
                                <input type="text" name="comic_title" id="comic_title" placeholder="Title"/>
                            </div> 
                            <br/>
                            <div>
                                <label htmlFor="comic_author">Author:</label>
                                <input type="text" name="comic_author" id="comic_author" placeholder="Author"/>
                            </div> 
                            <br/>

                            <div>
                                <label htmlFor="comic_publisher">Publisher:</label>
                                <select name="comic_publisher" id="comic_publisher" >
                                    <option value="" disabled selected>Select</option>
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
                                <label htmlFor="comic_genre">Genre:</label>
                                <input type="text" name="comic_genre" id="comic_genre" placeholder="Genre"/>
                            </div>
                            <br/>

                            <div>
                                <label htmlFor="comic_length">Number of pages:</label>
                                <input type="number" name="comic_length" id="comic_length" placeholder="Number of Pages"/>
                            </div>
                            <br/>

                            <div>
                                <label htmlFor="comic_rating">Rating:</label>
                                <input type="number" name="comic_rating" id="comic_rating" placeholder="number (0-5)"/>
                            </div> 
                            <br/>

                            <div className="synopsis-input-formatting">
                                <label htmlFor="comic_synopsis">Synopsis:</label>
                                <textarea type="textarea" name="comic_synopsis" id="comic_synopsis" placeholder="Synopsis"></textarea>
                            </div>
                            
                            <div className="div-white-container-form-button">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>  
    )
  
};

export default Create;