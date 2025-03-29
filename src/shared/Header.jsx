function Header(){
    return(
        <div>
            
            <header>
                <div className="codesquad-comics-header-logo">
                    <a href="#" target="_self">
                        <img className="nav-comic-icon" src="./images/CodeSquad-Comics-logo.jpg" alt="four books followed by the title CodeSquad Comics"/>
                    </a> 
                </div>

                <nav className="navbar-container">
                    <a href="#" target="_self">HOME</a>
                    <a href="#" target="_self">ABOUT</a>
                    <a href="#" target="_self">LOGIN</a>
                </nav>  
                <div className="hamburger-container">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </header>
            
        </div>
    )
};

export default Header;