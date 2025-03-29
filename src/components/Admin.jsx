function Admin() {
    return (
        <div> 
            Admin
            <main>
                
                <div className="div-white-container">
                    <h1>ADMIN PAGE</h1>
                    <div className="div-button-container">
                        <button className="button-space-formatting">ADD NEW COMIC</button></div>
                    
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
                                <tr>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
           
        </div>
    )
};  

export default Admin;