function Header({user, setUser}){
    return(
            
        <header>
            <div className="codesquad-comics-header-logo">
                <a href="#">
                    <img className="nav-comic-icon" src="./images/CodeSquad-Comics-logo.jpg" alt="four books followed by the title CodeSquad Comics"/>
                </a> 
            </div>

            <nav className="navbar-container">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">LOGIN</a>
            </nav>  
            <div className="hamburger-container">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
            
    )
};

export default Header;