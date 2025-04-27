import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({user, setUser}){

    const navigate = useNavigate();
    const handleLogout = (e) =>  {

    

    const url = "https://course-project-codesquad-comics-server.onrender.com/logout";

    fetch(`${url}`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        // it doesn't specify in the directions but I need it needs a body
        body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log(result); 
        setUser({});
        localStorage.removeItem("user");
        navigate("/");
    })
    .catch((error) => {
        console.log(error); 
        navigate("/admin")
    });
    };

    return(
        
        <header>
            <div className="codesquad-comics-header-logo">
                <a href="#">
                    <img className="nav-comic-icon" src="./images/CodeSquad-Comics-logo.jpg" alt="four books followed by the title CodeSquad Comics"/>
                </a> 
            </div>

{/* //Change "to" attributes to "/" for the image and Home links, "/about" for about link, "/admin" for admin link and "/login" for login link. Leave the href for logout link as "#"  <------ This lead to an error for me*/ }


            <nav className="navbar-container">
                <Link to="/home">HOME</Link>
                <Link to="/about">ABOUT</Link>
                {user.username ? ( 
                    <Link to="/admin">ADMIN</Link>,
                    <a href = "#" onClick={handleLogout}>LOGOUT</a>
                ) : (
                    <Link to="/Login">LOGIN</Link>
                )
                 }
            </nav>  
            <div className="hamburger-container">
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
            
    )
};

export default Header;