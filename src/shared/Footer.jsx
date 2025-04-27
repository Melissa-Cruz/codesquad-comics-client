function Footer(){
    return (
            
        <footer>

            <div>
                <h3>VISIT US</h3>
                <address> 
                    <div>CodeSquad Comics </div>
                    <div>123 Dorchester Avenue </div>
                    <div>Boston, MA 02124</div>
                    </address>
            </div>

            <div>
                <h3>LINKS</h3>
                <div>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>

                </div>
                <div>
                    <Link to="/login">Login</Link>

                </div>
            </div>

            <div>
                <h3 >FOLLOW US</h3>
                <div> 
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <div>
                <h3>A PRODUCT OF</h3>
                <a href="#">
                    <img src="./images/CodeSquad-logo.jpg" alt="CodeSquad logo followed by CodeSquad.org"/>
                </a> 
            </div>
        </footer>
            
    )
}; 

export default Footer;